# 周莉坤 · 双语静态简历（GitHub Pages）

纯静态站点，无需构建步骤。中英双语一键切换，包含 4 个岗位方向的定制版本。

**线上地址：<https://ilearn-better.github.io/resume/>**
**仓库地址：<https://github.com/ILearn-better/resume>**

## 页面结构

| 文件 | 说明 | 在线地址 |
|---|---|---|
| `index.html` | 首页：4 个版本导航 + 教育/荣誉概览 | <https://ilearn-better.github.io/resume/> |
| `python.html` | Python 后端 / 应用开发工程师 | <https://ilearn-better.github.io/resume/python.html> |
| `quant.html` | 量化开发工程师（Python） | <https://ilearn-better.github.io/resume/quant.html> |
| `ai.html` | AI 算法 / 机器学习工程师 | <https://ilearn-better.github.io/resume/ai.html> |
| `teacher.html` | 数学教师（中英双语） | <https://ilearn-better.github.io/resume/teacher.html> |

英文版链接：在任意地址后加 `?lang=en`，例如 <https://ilearn-better.github.io/resume/teacher.html?lang=en>。

## 部署状态

- 仓库：`ILearn-better/resume`（Public）
- Pages 源：`main` 分支根目录
- 更新方式：本地改完 `git add -A && git commit -m "..." && git push`，约 1 分钟后自动生效。

## 功能

- **中英切换**：右上角 `EN / 中` 按钮，切换后停留在当前页面；把语言写进 URL（`?lang=en`），链接可直接分享给英文场景。
- **深色模式**：右上角 ☾ / ☀ 按钮，偏好写入 localStorage。
- **打印 / 存为 PDF**：右上角「打印 / 存为 PDF」，已做 A4 打印样式（自动隐藏导航与按钮、分页不切段）。
- **投递用链接**：每个岗位一个独立 URL，可直接贴进简历投递系统。

## 本地预览

```bash
cd resume
python -m http.server 8000
# 打开 http://localhost:8000
```

直接双击 `index.html` 也能看（file:// 协议下 localStorage 可能被浏览器限制，语言切换会退化为仅当前页生效）。

## 发布到 GitHub Pages

仓库需要是 **Public**（免费版 Pages 不支持私有仓库），并确保 Pages 源设为 `main` 分支根目录。

```bash
cd resume
git init -b main
git add .
git commit -m "feat: bilingual static resume"
gh repo create resume --public --source=. --remote=origin --push

# 开启 GitHub Pages（main 分支根目录）
gh api -X POST repos/ILearn-better/resume/pages \
  -f source[branch]=main -f source[path]=/ 2>/dev/null \
  || gh api -X PUT repos/ILearn-better/resume/pages \
     -f source[branch]=main -f source[path]=/
```

几分钟后访问 `https://ilearn-better.github.io/resume/`。

也可以直接运行仓库里的 `deploy.ps1`（Windows PowerShell 一键完成上面的步骤）。

## 目录结构

```
resume/
├── index.html / python.html / quant.html / ai.html / teacher.html
├── .nojekyll            # 让 GitHub Pages 跳过 Jekyll 处理
├── deploy.ps1           # 一键发布脚本（Windows）
└── assets/
    ├── css/style.css    # 全部样式（含深色模式与 A4 打印样式）
    └── js/
        ├── data.js      # ★ 所有简历内容（中英双语），改内容只改这里
        └── app.js       # 渲染 + 语言切换 + 主题切换 + 打印
```

## 怎么改内容

只编辑 `assets/js/data.js`：

- `PROFILE` —— 姓名、电话、邮箱、期望城市、GitHub / Gitee / CSDN 链接
- `ROLES` —— 每个岗位方向的标题、一句话简介、个人简介、核心亮点、引用了哪些经历/项目/技能
- `EXPERIENCE` / `PROJECTS` —— 工作与项目经历（`zh` / `en` 成对书写，条目数需一致）
- `SKILL_GROUPS` —— 技能标签，各岗位按 `skillKeys` 取用
- `EDUCATION` / `AWARDS` —— 教育经历与荣誉奖项

新增一个岗位方向：在 `ROLES` 里加一项，同时复制 `python.html` 改 `data-role` 即可。
