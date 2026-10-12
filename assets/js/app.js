/* ============================================================
 * 渲染 + 中英切换 + 明暗主题 + 打印
 * ============================================================ */
(function () {
  'use strict';

  var LS = { lang: 'resume.lang', theme: 'resume.theme' };

  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  var qs = new URLSearchParams(location.search);
  var lang  = qs.get('lang') === 'en' ? 'en' : (qs.get('lang') === 'zh' ? 'zh' : (read(LS.lang) === 'en' ? 'en' : 'zh'));
  var theme = read(LS.theme) === 'dark' ? 'dark' : 'light';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  /* 取双语字段 */
  function t(o) {
    if (o == null) return '';
    if (typeof o === 'string') return o;
    return (o[lang] != null ? o[lang] : (o.zh != null ? o.zh : ''));
  }
  function ui(k) { return UI[lang][k] || UI.zh[k] || k; }

  var ROLE_ORDER = ['python', 'quant', 'ai', 'teacher'];
  var PAGES = { python: 'python.html', quant: 'quant.html', ai: 'ai.html', teacher: 'teacher.html', home: 'index.html' };

  function href(page) {
    var base = PAGES[page] || page;
    return lang === 'en' ? base + '?lang=en' : base;
  }

  /* ---------------- 片段 ---------------- */
  function topbar(roleKey) {
    var pills = ROLE_ORDER.map(function (k) {
      var r = ROLES[k];
      return '<a class="pill' + (k === roleKey ? ' is-active' : '') + '" style="--pill:' + r.accent + '" href="' + href(k) + '">' +
        '<span class="pill-ico">' + esc(r.icon) + '</span>' + esc(t(r.nav)) + '</a>';
    }).join('');
    return '' +
      '<header class="topbar">' +
        '<div class="topbar-inner">' +
          '<a class="brand" href="' + href('home') + '">' +
            '<span class="brand-dot"></span>' +
            '<span class="brand-name">' + esc(t(PROFILE.name)) + '</span>' +
            '<span class="brand-sub">' + ui('brand') + '</span>' +
          '</a>' +
          '<nav class="pills">' + pills + '</nav>' +
          '<div class="actions">' +
            '<button class="btn icon-btn" id="themeBtn" type="button" title="' + esc(ui(theme === 'dark' ? 'toLight' : 'toDark')) + '">' +
              (theme === 'dark' ? '☀' : '☾') +
            '</button>' +
            '<button class="btn lang-btn" id="langBtn" type="button" title="' + esc(ui('langTip')) + '">' + esc(ui('langBtn')) + '</button>' +
            '<button class="btn print-btn" id="printBtn" type="button">' + esc(ui('print')) + '</button>' +
          '</div>' +
        '</div>' +
      '</header>';
  }

  function hero(role) {
    var chips = [
      { ico: '☎', txt: PROFILE.phone, link: 'tel:' + PROFILE.phone },
      { ico: '✉', txt: PROFILE.email, link: 'mailto:' + PROFILE.email },
      { ico: '◎', txt: t(PROFILE.city) },
      { ico: '⚧', txt: t(PROFILE.gender) + ' · ' + t(PROFILE.age) }
    ].map(function (c) {
      var inner = '<span class="chip-ico">' + c.ico + '</span>' + esc(c.txt);
      return c.link ? '<a class="chip" href="' + c.link + '">' + inner + '</a>' : '<span class="chip">' + inner + '</span>';
    }).join('');

    var links = PROFILE.links.map(function (l) {
      return '<a class="chip" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
        '<span class="chip-ico">↗</span>' + esc(l.label) + '</a>';
    }).join('');

    var hl = (role.highlights || []).map(function (h) {
      return '<li>' + esc(t(h)) + '</li>';
    }).join('');

    return '' +
      '<section class="hero card" style="--accent:' + role.accent + '">' +
        '<div class="hero-top">' +
          '<div class="avatar">' + esc(t(PROFILE.initial)) + '</div>' +
          '<div class="hero-main">' +
            '<h1 class="name">' + esc(t(PROFILE.name)) +
              '<span class="name-en">' + esc(lang === 'zh' ? PROFILE.name.en : PROFILE.name.zh) + '</span>' +
            '</h1>' +
            '<p class="role-title">' + esc(t(role.title)) + '</p>' +
            '<p class="tagline">' + esc(t(role.tagline)) + '</p>' +
          '</div>' +
          '<div class="hero-badge"><span>' + esc(t(role.nav)) + '</span></div>' +
        '</div>' +
        '<div class="chips">' + chips + links + '</div>' +
        (hl ? '<div class="hl-box"><h3 class="hl-title">' + esc(ui('highlights')) + '</h3><ul class="hl-list">' + hl + '</ul></div>' : '') +
      '</section>';
  }

  function section(title, body, cls) {
    return '<section class="card sec' + (cls ? ' ' + cls : '') + '">' +
      '<h2 class="sec-title"><span class="sec-bar"></span>' + esc(title) + '</h2>' + body + '</section>';
  }

  function typeBlock(o, kind) {
    var lines = (t(o.points) || []).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('');
    var tags = (o.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + '</span>'; }).join('');
    var linkHtml = o.link
      ? '<a class="entry-link" href="' + esc(o.link) + '" target="_blank" rel="noopener">↗ ' + esc(lang === 'zh' ? '查看项目' : 'View project') + '</a>'
      : '';
    return '' +
      '<article class="entry">' +
        '<div class="entry-head">' +
          '<div class="entry-left">' +
            '<h3 class="entry-name">' + esc(t(o[kind === 'exp' ? 'company' : 'name'])) + '</h3>' +
            '<p class="entry-sub">' + esc(t(o.role || '')) + '</p>' +
          '</div>' +
          '<span class="entry-time">' + esc(t(o.period)) + '</span>' +
        '</div>' +
        '<ul class="entry-points">' + lines + '</ul>' +
        '<div class="entry-foot">' + tags + linkHtml + '</div>' +
      '</article>';
  }

  function sideCol(role) {
    var skills = (role.skillKeys || []).map(function (k) {
      var g = SKILL_GROUPS[k];
      if (!g) return '';
      var items = (t(g.items) || []).map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('');
      return '<div class="skill-group"><h4>' + esc(t(g.name)) + '</h4><ul>' + items + '</ul></div>';
    }).join('');

    var edu = EDUCATION;
    var courses = (t(edu.courses) || []).map(function (c) { return '<span class="tag">' + esc(c) + '</span>'; }).join('');

    var awards = (AWARDS[lang] || []).map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('');

    return '' +
      '<aside class="side">' +
        section(ui('skills'), '<div class="skills">' + skills + '</div>') +
        section(ui('education'),
          '<div class="edu">' +
            '<h3 class="edu-school">' + esc(t(edu.school)) + '</h3>' +
            '<p class="edu-degree">' + esc(t(edu.degree)) + '</p>' +
            '<p class="edu-time">' + esc(t(edu.period)) + '</p>' +
            '<h4 class="mini-title">' + esc(ui('coreCourses')) + '</h4>' +
            '<div class="tags">' + courses + '</div>' +
            '<h4 class="mini-title">' + esc(ui('campus')) + '</h4>' +
            '<p class="edu-campus">' + esc(t(edu.campus)) + '</p>' +
          '</div>') +
        section(ui('awards'), '<ul class="award-list">' + awards + '</ul>') +
      '</aside>';
  }

  function resumePage(role) {
    var exp = role.expIds.map(function (id) { return typeBlock(EXPERIENCE[id], 'exp'); }).join('');
    var projs = role.projIds.map(function (id) { return typeBlock(PROJECTS[id], 'proj'); }).join('');

    var main = '' +
      '<div class="main">' +
        section(ui('about'), '<p class="prose">' + esc(t(role.summary)) + '</p>') +
        section(ui('experience'), '<div class="entries">' + exp + '</div>') +
        (projs ? section(ui('projects'), '<div class="entries">' + projs + '</div>') : '') +
      '</div>';

    return hero(role) + '<div class="grid">' + main + sideCol(role) + '</div>';
  }

  function homePage() {
    var cards = ROLE_ORDER.map(function (k) {
      var r = ROLES[k];
      var hl = (r.highlights || []).slice(0, 3).map(function (h) {
        var s = t(h); return '<li>' + esc(s.length > 96 ? s.slice(0, 96) + '…' : s) + '</li>';
      }).join('');
      return '<a class="role-card" style="--accent:' + r.accent + '" href="' + href(k) + '">' +
        '<div class="rc-head"><span class="rc-ico">' + esc(r.icon) + '</span>' +
          '<span class="rc-nav">' + esc(t(r.nav)) + '</span></div>' +
        '<h3 class="rc-title">' + esc(t(r.title)) + '</h3>' +
        '<p class="rc-tag">' + esc(t(r.tagline)) + '</p>' +
        '<ul class="rc-hl">' + hl + '</ul>' +
        '<span class="rc-more">' + esc(ui('viewResume')) + ' →</span>' +
      '</a>';
    }).join('');

    var awards = (AWARDS[lang] || []).map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('');
    var courses = (t(EDUCATION.courses) || []).map(function (c) { return '<span class="tag">' + esc(c) + '</span>'; }).join('');

    var homeHero =
      '<section class="hero card home-hero" style="--accent:#2563eb">' +
        '<div class="hero-top">' +
          '<div class="avatar">' + esc(t(PROFILE.initial)) + '</div>' +
          '<div class="hero-main">' +
            '<h1 class="name">' + esc(t(PROFILE.name)) +
              '<span class="name-en">' + esc(lang === 'zh' ? PROFILE.name.en : PROFILE.name.zh) + '</span></h1>' +
            '<p class="role-title">' + esc(t(PROFILE.school)) + '</p>' +
            '<p class="tagline">' + esc(lang === 'zh'
              ? '4 个方向的简历版本：Python 开发 · 量化开发 · AI 算法 · 数学教师（中英双语，可一键切换）'
              : 'Four tailored resume versions: Python Engineering · Quant Development · AI Algorithm · Mathematics Teaching (CN/EN, one-click switch)') + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="chips">' +
          '<a class="chip" href="tel:' + PROFILE.phone + '"><span class="chip-ico">☎</span>' + esc(PROFILE.phone) + '</a>' +
          '<a class="chip" href="mailto:' + PROFILE.email + '"><span class="chip-ico">✉</span>' + esc(PROFILE.email) + '</a>' +
          '<span class="chip"><span class="chip-ico">◎</span>' + esc(t(PROFILE.city)) + '</span>' +
          PROFILE.links.map(function (l) {
            return '<a class="chip" href="' + esc(l.url) + '" target="_blank" rel="noopener"><span class="chip-ico">↗</span>' + esc(l.label) + '</a>';
          }).join('') +
        '</div>' +
      '</section>';

    return homeHero +
      '<h2 class="band-title">' + esc(ui('allVersions')) + '</h2>' +
      '<div class="role-grid">' + cards + '</div>' +
      '<div class="grid">' +
        '<div class="main">' +
          section(ui('education'),
            '<div class="edu">' +
              '<h3 class="edu-school">' + esc(t(EDUCATION.school)) + '</h3>' +
              '<p class="edu-degree">' + esc(t(EDUCATION.degree)) + '</p>' +
              '<p class="edu-time">' + esc(t(EDUCATION.period)) + '</p>' +
              '<h4 class="mini-title">' + esc(ui('coreCourses')) + '</h4><div class="tags">' + courses + '</div>' +
              '<h4 class="mini-title">' + esc(ui('campus')) + '</h4><p class="edu-campus">' + esc(t(EDUCATION.campus)) + '</p>' +
            '</div>') +
        '</div>' +
        '<aside class="side">' + section(ui('awards'), '<ul class="award-list">' + awards + '</ul>') + '</aside>' +
      '</div>';
  }

  function footer() {
    return '<footer class="footer">' +
      '<span>' + esc(t(PROFILE.name)) + ' · ' + esc(PROFILE.email) + ' · ' + esc(PROFILE.phone) + '</span>' +
      '<span>' + esc(ui('updated')) + ' 2026-10</span>' +
    '</footer>';
  }

  /* ---------------- 渲染 ---------------- */
  var app = document.getElementById('app');
  var roleKey = document.body.dataset.role || 'home';

  function render() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.setAttribute('data-theme', theme);

    if (roleKey === 'home') {
      document.title = t(PROFILE.name) + ' · ' + (lang === 'zh' ? '个人简历' : 'Resume');
      app.innerHTML = topbar('home') + homePage() + footer();
    } else {
      var role = ROLES[roleKey];
      document.title = t(PROFILE.name) + ' · ' + t(role.title);
      app.innerHTML = topbar(roleKey) + resumePage(role) + footer();
    }
    bind();
  }

  function bind() {
    var lb = document.getElementById('langBtn');
    if (lb) lb.addEventListener('click', function () {
      lang = lang === 'zh' ? 'en' : 'zh';
      store(LS.lang, lang);
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    var tb = document.getElementById('themeBtn');
    if (tb) tb.addEventListener('click', function () {
      theme = theme === 'dark' ? 'light' : 'dark';
      store(LS.theme, theme);
      render();
    });

    var pb = document.getElementById('printBtn');
    if (pb) pb.addEventListener('click', function () { window.print(); });
  }

  render();
})();
