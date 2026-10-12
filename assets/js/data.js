/* ============================================================
 * 周莉坤 · 双语简历内容数据源 (zh / en)
 * 所有页面共用此文件，改内容只需改这里。
 * ============================================================ */

const PROFILE = {
  name:    { zh: '周莉坤', en: 'Likun Zhou' },
  initial: { zh: '周', en: 'LZ' },
  gender:  { zh: '男', en: 'Male' },
  age:     { zh: '26 岁', en: '26 years old' },
  phone:   '15707513462',
  email:   '1597027672@qq.com',
  city:    { zh: '深圳 / 广州', en: 'Shenzhen / Guangzhou' },
  school:  { zh: '广东海洋大学 · 信息与计算科学 · 理学学士', en: 'Guangdong Ocean University · B.Sc. in Information and Computing Science' },
  links: [
    { label: 'GitHub', url: 'https://github.com/ILearn-better' },
    { label: 'Gitee',  url: 'https://gitee.com/zhoulikun621' },
    { label: 'CSDN',   url: 'https://blog.csdn.net/qq_46181653' }
  ]
};

/* ---------------- UI 文案 ---------------- */
const UI = {
  zh: {
    brand: '简历',
    home: '首页',
    about: '个人简介',
    highlights: '核心亮点',
    experience: '工作经历',
    projects: '项目经历',
    skills: '专业技能',
    education: '教育经历',
    awards: '荣誉奖项',
    contact: '联系方式',
    target: '求职意向',
    city: '期望城市',
    age: '年龄',
    print: '打印 / 存为 PDF',
    toDark: '深色',
    toLight: '浅色',
    langBtn: 'EN',
    langTip: 'Switch to English',
    allVersions: '全部版本',
    overview: '快速概览',
    viewResume: '查看简历',
    coreCourses: '核心课程',
    campus: '在校经历',
    links: '主页链接',
    updated: '更新于'
  },
  en: {
    brand: 'Resume',
    home: 'Home',
    about: 'Profile',
    highlights: 'Key Highlights',
    experience: 'Work Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    awards: 'Honors & Awards',
    contact: 'Contact',
    target: 'Objective',
    city: 'Preferred City',
    age: 'Age',
    print: 'Print / Save as PDF',
    toDark: 'Dark',
    toLight: 'Light',
    langBtn: '中',
    langTip: '切换到中文',
    allVersions: 'All Versions',
    overview: 'Quick Overview',
    viewResume: 'View Resume',
    coreCourses: 'Core Courses',
    campus: 'Campus Activities',
    links: 'Links',
    updated: 'Updated'
  }
};

/* ---------------- 岗位方向 ---------------- */
const ROLES = {
  python: {
    key: 'python',
    icon: 'Py',
    accent: '#2563eb',
    nav:   { zh: 'Python 开发', en: 'Python Engineer' },
    title: { zh: 'Python 后端 / 应用开发工程师', en: 'Python Backend / Application Engineer' },
    tagline: {
      zh: '信息与计算科学出身 · 2 年 Python 工程与算法经验 · OCR / 数据处理 / 接口开发与部署',
      en: 'B.Sc. in Information & Computing Science · 2 years of Python engineering & algorithm experience · OCR, data pipelines, API development & deployment'
    },
    summary: {
      zh: '具备从算法研究到工程落地的完整实践：在软件公司负责 PDF 翻译、表单识别、图片翻译等 OCR 相关功能开发，独立完成接口编写、部署与测试；在量化公司搭建 MongoDB 数据服务、编写数据库脚本、开发单因子检测程序。熟练使用 Python 与主流深度学习框架，能承担数据处理、模型迁移学习与服务化部署工作，代码规范意识良好。',
      en: 'End-to-end experience from algorithm research to production delivery: developed OCR-driven features (PDF translation, form recognition, image translation) and owned API implementation, deployment and testing; at a quantitative firm, built MongoDB data services, database scripts and a single-factor screening program. Proficient in Python and mainstream deep-learning frameworks, capable of data processing, transfer learning and service deployment, with solid coding-standard awareness.'
    },
    highlights: [
      { zh: 'OCR 文档翻译：基于 PaddleOCR / DBNet / CRNN 实现 PDF 翻译与版式保持，DBNet 主干由 MobileNetV3 换为 ResNet50 后 Hmean 由 0.58 提升至 0.71',
        en: 'OCR document translation: built PDF translation with layout preservation on PaddleOCR / DBNet / CRNN; switching the DBNet backbone from MobileNetV3 to ResNet50 raised Hmean from 0.58 to 0.71' },
      { zh: '工程交付：独立完成功能接口的编写、部署、测试与性能优化（Django / Docker / Linux）',
        en: 'Delivery ownership: independently implemented, deployed and tested feature APIs and optimised performance (Django / Docker / Linux)' },
      { zh: '数据工程：MongoDB 数据服务搭建与历史数据迁移，数据库脚本编写、监控与异常处理',
        en: 'Data engineering: set up MongoDB data services and migrated historical data; wrote database scripts with monitoring and exception handling' },
      { zh: '数理底子：全国大学生数学建模竞赛广东赛区一等奖，数据分析与建模能力强',
        en: 'Quantitative foundation: First Prize in the Guangdong Division of the National College Student Mathematical Modeling Contest' }
    ],
    expIds: ['wangxin', 'zhongmi', 'xingdongyuan'],
    projIds: ['ocr', 'flower', 'face'],
    skillKeys: ['lang', 'dl', 'eng', 'data', 'ml', 'office']
  },

  quant: {
    key: 'quant',
    icon: 'Q',
    accent: '#0d9488',
    nav:   { zh: '量化开发', en: 'Quant Developer' },
    title: { zh: '量化开发工程师（Python）', en: 'Quantitative Developer (Python)' },
    tagline: {
      zh: 'Python · 数据工程 · 因子研究 · 固收交易支持',
      en: 'Python · Data Engineering · Factor Research · Fixed-income Trading Support'
    },
    summary: {
      zh: '在量化科技公司担任 Python 量化开发工程师，负责 MongoDB 数据服务搭建与历史数据迁移，编写数据库脚本并实现监控与异常处理，参与单因子检测程序开发，并协助研究员按指定策略执行国开债报价交易。信息与计算科学专业背景，概率统计、数值分析与运筹学基础扎实，熟悉从数据清洗、因子计算到回测验证的完整链路。',
      en: 'Worked as a Python quantitative developer at a quantitative technology firm: built and migrated MongoDB data services, wrote database scripts with monitoring and exception handling, contributed to the single-factor screening program, and supported researchers in quoting/trading China Development Bank bonds under prescribed strategies. B.Sc. in Information and Computing Science with solid grounding in probability & statistics, numerical analysis and operations research, familiar with the full chain from data cleaning and factor computation to backtest validation.'
    },
    highlights: [
      { zh: '量化数据基建：搭建 MongoDB 数据服务器，编写脚本完成历史数据迁移与校验',
        en: 'Quant data infrastructure: built the MongoDB server and wrote scripts to migrate and validate historical data' },
      { zh: '数据链路稳定：数据库脚本编写 + 监控告警 + 异常处理，保障数据服务可用性',
        en: 'Reliable data pipeline: database scripting plus monitoring and exception handling to keep data services available' },
      { zh: '因子研究：参与单因子检测程序开发，完成因子有效性验证',
        en: 'Factor research: contributed to the single-factor screening program and validated factor effectiveness' },
      { zh: '交易流程：协助研究员按指定策略进行国开债报价交易，理解固收品种交易与报价机制',
        en: 'Trading workflow: supported researchers in CDB bond quoting/trading by strategy, understanding fixed-income quoting mechanics' }
    ],
    expIds: ['zhongmi', 'wangxin'],
    projIds: ['ocr', 'flower'],
    skillKeys: ['lang', 'quant', 'data', 'ml', 'eng', 'office']
  },

  ai: {
    key: 'ai',
    icon: 'AI',
    accent: '#7c3aed',
    nav:   { zh: 'AI 算法', en: 'AI Algorithm' },
    title: { zh: 'AI 算法工程师 / 机器学习工程师', en: 'AI Algorithm / Machine Learning Engineer' },
    tagline: {
      zh: '深度学习 · 计算机视觉 · OCR / 图像分类 · 迁移学习与模型优化',
      en: 'Deep Learning · Computer Vision · OCR / Image Classification · Transfer Learning & Model Optimisation'
    },
    summary: {
      zh: '具备深度学习模型的复现、迁移学习与优化经验：毕业论文《基于深度学习的 OCR 技术研究》中完成 DBNet + CRNN 的复现与改进，通过替换主干网络将检测 Hmean 从 0.58 提升至 0.71；在花卉识别科创项目中结合 ResNet50 迁移学习、Gini 特征选择与 SVM，将训练时间压缩至全连接方案的 23.86%。熟悉 PyTorch / Keras / PaddlePaddle，掌握图像分类、目标检测与 OCR 任务的完整训练、评估与部署流程。',
      en: 'Hands-on experience reproducing, transferring and optimising deep-learning models: in the thesis "Research on Deep Learning based OCR", reproduced and improved DBNet + CRNN, lifting detection Hmean from 0.58 to 0.71 by replacing the backbone; in an AI flower-recognition project, combined ResNet50 transfer learning, Gini-based feature selection and SVM to cut training time to 23.86% of the fully-connected baseline. Proficient in PyTorch / Keras / PaddlePaddle with complete train-evaluate-deploy pipelines for classification, detection and OCR.'
    },
    highlights: [
      { zh: 'OCR 检测改进：DBNet 特征提取层 MobileNetV3 → ResNet50，Hmean 0.58 → 0.71；仅增大训练轮次可达 0.75',
        en: 'OCR detection improvement: DBNet backbone MobileNetV3 → ResNet50 raised Hmean from 0.58 to 0.71; increasing epochs alone reached 0.75' },
      { zh: '迁移学习 + 特征选择：ResNet50 + Gini + SVM，训练时间仅为全连接方案的 23.86%，较原 SVM 减少 30.4%',
        en: 'Transfer learning + feature selection: ResNet50 + Gini + SVM cut training time to 23.86% of the fully-connected baseline and 30.4% less than the original SVM' },
      { zh: '模型复现与调研：复现 ResNet、ViT 等主流网络，跟踪多模态技术发展趋势',
        en: 'Model reproduction & research: reproduced mainstream networks such as ResNet and ViT, tracking multimodal trends' },
      { zh: '部署能力：Tkinter 桌面端 + Django Web 端部署，熟悉 Linux / Docker 环境',
        en: 'Deployment: shipped to Tkinter desktop and Django web, comfortable with Linux / Docker' }
    ],
    expIds: ['wangxin', 'xingdongyuan', 'zhongmi'],
    projIds: ['ocr', 'flower', 'face'],
    skillKeys: ['lang', 'dl', 'ml', 'eng', 'data', 'office']
  },

  teacher: {
    key: 'teacher',
    icon: '∑',
    accent: '#d97706',
    nav:   { zh: '数学教师', en: 'Math Teacher' },
    title: { zh: '数学教师（中英双语）', en: 'Bilingual Mathematics Teacher (CN / EN)' },
    tagline: {
      zh: '3 年 K12 数学 / 英语双线教学 · 学员续费率 90% · 适配 IGCSE / A-Level 衔接',
      en: '3 years of K12 mathematics & English teaching · 90% renewal rate · IGCSE / A-Level transition ready'
    },
    summary: {
      zh: '信息与计算科学专业本科出身，数理基础扎实，拥有 3 年 K12 数学、英语双线教学经验，可胜任中英双语国际数学课程讲授，适配 IGCSE、A-Level 等国际课程的入门衔接与同步巩固。擅长以中文拆解核心数学逻辑、同步渗透英文专业术语与题干表达，帮助学生平稳过渡国际课程体系，兼顾知识掌握与英文读题能力提升。个性化教学经验丰富，学员提分效果显著、续费率达 90%；具备数学建模竞赛背景，可双语指导学生数学探究项目与拓展学习，注重培养学生的逻辑思维与问题解决能力。',
      en: 'B.Sc. in Information and Computing Science with a rigorous mathematical foundation and 3 years of K12 teaching experience across both mathematics and English; qualified to deliver Chinese-English bilingual instruction for international mathematics curricula such as IGCSE and A-Level, covering introductory transition and synchronous consolidation. Skilled at unpacking core mathematical logic in Chinese while weaving in English academic terminology and question framing, helping students move smoothly into international curricula while building both subject knowledge and English reading proficiency. Experienced in personalised teaching with strong score gains and a 90% renewal rate; with a mathematical-modeling competition background, able to guide students bilingually through mathematical inquiry projects and enrichment work, focusing on logical thinking and problem solving.'
    },
    highlights: [
      { zh: '提分成果：初中数学 70+ → 中考 90 分；高二数学 60+ → 90 分并长期稳定 70 分以上；初中英语 70+ → 中考 90 分',
        en: 'Measurable gains: junior-high maths 70+ → 90 in the entrance exam; Grade-11 maths 60+ → 90 and steady above 70; junior-high English 70+ → 90 in the entrance exam' },
      { zh: '带教规模：同期稳定带教 15 名一对一学员，峰值 17 人，学员整体续费率 90%',
        en: 'Caseload: 15 concurrent 1-on-1 students, peaking at 17, with a 90% overall renewal rate' },
      { zh: '双语教学：以中文拆解数学逻辑，同步渗透英文专业术语与题干表达，支持国际课程衔接',
        en: 'Bilingual delivery: core logic explained in Chinese with English terminology and question framing woven in, supporting international-curriculum transition' },
      { zh: '竞赛背景：全国大学生数学建模竞赛广东赛区一等奖，可双语指导学生数学探究与拓展学习',
        en: 'Competition background: First Prize in the Guangdong Division of the National College Student Mathematical Modeling Contest; able to mentor inquiry and enrichment work bilingually' }
    ],
    expIds: ['jinxueyou', 'sikaole', 'taoli'],
    projIds: [],
    skillKeys: ['cert', 'teach', 'tools']
  }
};

/* ---------------- 工作经历 ---------------- */
const EXPERIENCE = {
  xingdongyuan: {
    company: { zh: '深圳行动元智能科技有限公司', en: 'Shenzhen Xingdongyuan Intelligent Technology Co., Ltd.' },
    role:    { zh: '知识图谱 / 算法助理（实习）', en: 'Knowledge Graph & Algorithm Assistant (Intern)' },
    period:  { zh: '2023.03 – 2023.07', en: 'Mar 2023 – Jul 2023' },
    tags:    ['NLP', 'Knowledge Graph', 'ResNet', 'ViT', 'Qt', 'CAN'],
    points: {
      zh: [
        '学习公司内部技术文档，参与技术文档标注策略制定。',
        '参与文档标注工作，实现结构化文本分解，制作入库知识卡片。',
        '开展 AI 技术调研，跟踪多模态技术发展趋势，复现 ResNet、ViT 等常见深度学习模型。',
        '学习 CAN 通讯基础，完成基于 Qt 的 CAN 报文解析工具开发。',
        '协助算法工程师搭建企业知识机器人；确定 OCR 论文选题并完成毕业论文《基于深度学习的 OCR 技术研究》。'
      ],
      en: [
        'Studied internal technical documentation and contributed to the annotation strategy for technical documents.',
        'Performed document annotation, decomposed structured text and produced knowledge cards for the knowledge base.',
        'Conducted AI technology research, tracked multimodal trends and reproduced common deep-learning models such as ResNet and ViT.',
        'Learned CAN bus fundamentals and developed a Qt-based CAN message parsing tool.',
        'Assisted algorithm engineers in building an enterprise knowledge robot; selected the OCR thesis topic and completed the thesis "Research on Deep Learning based OCR".'
      ]
    }
  },

  wangxin: {
    company: { zh: '深圳市网新新思软件有限公司', en: 'Shenzhen Wangxin Xinsi Software Co., Ltd.' },
    role:    { zh: '数据提取工程师（OCR / 应用开发）', en: 'Data Extraction Engineer (OCR / Application Development)' },
    period:  { zh: '2023.06 – 2023.10', en: 'Jun 2023 – Oct 2023' },
    tags:    ['Python', 'OCR', 'PaddleOCR', 'Django', 'API', 'Docker'],
    points: {
      zh: [
        '负责 PDF 翻译、表单识别、图片翻译等功能开发，基于 OCR 技术实现 PDF 文档翻译准确且保持原有版式。',
        '协助算法工程师进行数据处理，参与数据清洗、预处理等环节，为后续分析提供数据支撑。',
        '完成功能接口的编写、部署和测试，确保接口稳定运行，提升系统性能与用户体验。',
        '参与项目优化，通过技术手段提升运行效率与稳定性，同时遵循代码规范保证代码质量。'
      ],
      en: [
        'Developed PDF translation, form recognition and image translation features, using OCR to translate PDFs accurately while preserving the original layout.',
        'Supported algorithm engineers with data processing including cleaning and preprocessing, feeding downstream analysis.',
        'Implemented, deployed and tested feature APIs, ensuring stable operation and improving system performance and user experience.',
        'Contributed to project optimisation, improving runtime efficiency and stability while following coding standards to keep code quality high.'
      ]
    }
  },

  zhongmi: {
    company: { zh: '深圳众米量化科技有限公司', en: 'Shenzhen Zhongmi Quantitative Technology Co., Ltd.' },
    role:    { zh: 'Python 量化开发工程师', en: 'Python Quantitative Developer' },
    period:  { zh: '2024.03 – 2024.05', en: 'Mar 2024 – May 2024' },
    tags:    ['Python', 'MongoDB', '因子检测', '固收交易'],
    points: {
      zh: [
        '搭建 MongoDB 数据服务器，编写脚本完成历史数据迁移与校验。',
        '编写数据库脚本程序，实现数据监控与异常处理。',
        '参与单因子检测程序开发，完成因子有效性验证。',
        '协助研究员按指定策略进行国开债报价交易，熟悉固收品种的报价与交易流程。'
      ],
      en: [
        'Set up the MongoDB data server and wrote scripts to migrate and validate historical data.',
        'Wrote database scripts providing data monitoring and exception handling.',
        'Contributed to the development of the single-factor screening program and validated factor effectiveness.',
        'Assisted researchers in quoting/trading China Development Bank (CDB) bonds under prescribed strategies, gaining exposure to fixed-income quoting and trading workflows.'
      ]
    }
  },

  taoli: {
    company: { zh: '深圳桃李未来教育集团有限公司', en: 'Shenzhen Taoli Future Education Group Co., Ltd.' },
    role:    { zh: '初中数学教师', en: 'Junior High School Mathematics Teacher' },
    period:  { zh: '2024.07 – 2024.12', en: 'Jul 2024 – Dec 2024' },
    tags:    ['初中数学', '教学计划', '课后辅导'],
    points: {
      zh: [
        '根据教学大纲和学生实际情况制定详细的教学计划。',
        '以清晰、准确的方式讲解数学知识。',
        '组织课堂互动，引导学生积极参与课堂讨论，关注学生的课堂表现，及时发现学生的困惑和问题。',
        '批改作业并及时反馈，对学习有困难的学生进行个别辅导。'
      ],
      en: [
        'Formulated detailed teaching plans based on the syllabus and each student\u2019s actual level.',
        'Explained mathematical knowledge in a clear and accurate manner.',
        'Organised classroom interaction, guided students into active discussion, monitored performance and identified confusion promptly.',
        'Graded assignments with timely feedback and provided individual tutoring for students who struggled.'
      ]
    }
  },

  sikaole: {
    company: { zh: '深圳市思考乐文化教育科技发展有限公司', en: 'Shenzhen Sikaole Culture & Education Technology Development Co., Ltd.' },
    role:    { zh: '初中数学教师', en: 'Junior High School Mathematics Teacher' },
    period:  { zh: '2025.01 – 2025.03', en: 'Jan 2025 – Mar 2025' },
    tags:    ['初中数学', '分层教学', '学情诊断'],
    points: {
      zh: [
        '结合教学大纲与学生学情制定精细化教学计划，以清晰逻辑拆解数学核心知识点，帮助学生搭建完整知识体系。',
        '设计课堂互动环节引导学生主动思考，及时捕捉学生知识盲区并针对性辅导，落实差异化教学。',
        '负责作业批改与个性化反馈，为学习困难学生提供课后一对一辅导，同步完成学员沟通与课程服务跟进工作。'
      ],
      en: [
        'Designed fine-grained teaching plans aligned with the syllabus and student profiles, breaking down core mathematical concepts logically to help students build a systematic knowledge framework.',
        'Designed interactive classroom activities to stimulate active thinking, identified knowledge gaps promptly and delivered targeted tutoring with differentiated instruction.',
        'Graded assignments and gave personalised feedback, provided after-class one-to-one tutoring for struggling students, and handled student communication and course service follow-up.'
      ]
    }
  },

  jinxueyou: {
    company: { zh: '深圳金学优科技有限公司松岗分公司', en: 'Shenzhen Jinxueyou Technology Co., Ltd. (Songgang Branch)' },
    role:    { zh: '数学老师（一对一 · 中英双语）', en: 'Mathematics Teacher (1-on-1, Bilingual CN/EN)' },
    period:  { zh: '2025.03 – 2026.07', en: 'Mar 2025 – Jul 2026' },
    tags:    ['双语教学', 'IGCSE / A-Level', '分层教学', '一对一', '学情反馈'],
    points: {
      zh: [
        '负责初高中数学、英语一对一全流程双语教学，覆盖课程设计、试听授课、正式讲授、课后答疑与阶段性学情反馈，全程跟进学生知识掌握与语言适配进度。',
        '同期稳定带教 15 名一对一学员，峰值带教 17 人，学员整体续费率达 90%，教学服务与提分效果获得学员及家长高度认可。',
        '落地双语分层教学方案：初中数学学员由 70+ 提升至中考 90 分，并持续跟进高中阶段学习；高二数学学员由 60+ 提升至 90 分，成绩长期稳定在 70 分以上；初中英语学员由 70+ 提升至中考 90 分。',
        '将英语教学经验无缝迁移至数学双语授课场景，帮助学生攻克专业词汇与英文题干理解难点。'
      ],
      en: [
        'Delivered end-to-end 1-on-1 bilingual instruction in junior and senior high mathematics and English, covering curriculum design, trial classes, formal lecturing, after-class tutoring and periodic academic feedback, tracking both subject mastery and language adaptation.',
        'Managed 15 concurrent 1-on-1 students with a peak of 17, achieving a 90% overall renewal rate and strong recognition from students and parents for teaching quality and support.',
        'Implemented a bilingual tiered-teaching scheme: a junior-high maths student rose from 70+ to 90 in the high school entrance exam and continued into senior high; a Grade-11 student rose from 60+ to 90 and has stayed above 70; a junior-high English student rose from 70+ to 90 in the entrance exam.',
        'Transferred English-teaching experience seamlessly into bilingual mathematics instruction, helping students overcome subject-specific vocabulary and English question-stem comprehension.'
      ]
    }
  }
};

/* ---------------- 项目经历 ---------------- */
const PROJECTS = {
  ocr: {
    name: { zh: '基于深度学习的 OCR 技术研究（毕业论文）', en: 'Research on Deep Learning based OCR (Bachelor Thesis)' },
    period: { zh: '2023.05 – 2023.06', en: 'May 2023 – Jun 2023' },
    tags: ['PaddleOCR', 'DBNet', 'CRNN', '迁移学习', 'ICDAR2015', 'Hmean'],
    link: '',
    points: {
      zh: [
        '深入分析 DB（DBNet）与 CRNN 模型的基本模块与工作机制。',
        '研读百度 PaddleOCR 项目相关代码，利用获取的预训练权重进行迁移学习。',
        '采用不同迁移学习策略，改进 DB 主干网络的初始化参数；基于自定义数据集 det_data_lesson_demo、ic15_data 与 ICDAR2015 完成模型训练与评估，并对比实验结果。',
        '将 DBNet 的特征提取层由 MobileNetV3 更换为 ResNet50 后，检测效果提升显著，Hmean 值由 0.58 提升至 0.71；若不改变特征提取模型只增大训练次数，Hmean 亦可达到 0.75。'
      ],
      en: [
        'Analysed the building blocks and working mechanisms of DB (DBNet) and CRNN in depth.',
        'Studied the PaddleOCR codebase and performed transfer learning using the released pretrained weights.',
        'Applied different transfer-learning strategies and improved the initialisation of the DB backbone; trained and evaluated on the custom datasets det_data_lesson_demo, ic15_data and ICDAR2015, comparing experimental results.',
        'Replacing DBNet\u2019s feature extractor from MobileNetV3 to ResNet50 markedly improved detection, raising Hmean from 0.58 to 0.71; keeping the backbone but increasing training epochs also reached 0.75.'
      ]
    }
  },

  flower: {
    name: { zh: '基于人工智能的花卉识别小程序（校级科创项目）', en: 'AI-based Flower Recognition Application (University Research Project)' },
    period: { zh: '2020.06 – 2022.07', en: 'Jun 2020 – Jul 2022' },
    tags: ['ResNet50', 'SVM', 'Gini 特征选择', '迁移学习', 'Django', 'Tkinter'],
    link: 'https://gitee.com/zhoulikun621/django-platform-development',
    points: {
      zh: [
        '利用 ResNet50 进行迁移学习提取图像特征，并将分类网络修改为 SVM，对比模型准确率与训练时间。',
        '将 ResNet50 提取的特征基于 Gini 指数进行特征选择，再代入 SVM 进行分类，对比准确率与训练时间。',
        '训练时间仅为以全连接神经网络作为分类方法方案的 23.86%；基于 Gini 指数进行特征选择后，准确率基本不变，训练时间较原 SVM 方法减少 30.4%。',
        '利用 Tkinter 封装为桌面小程序，同时通过 Django 部署到 Web 端。'
      ],
      en: [
        'Used ResNet50 transfer learning to extract image features and replaced the classification head with an SVM, comparing accuracy and training time.',
        'Applied Gini-index-based feature selection on ResNet50 features before SVM classification, again comparing accuracy and training time.',
        'Training time was only 23.86% of the fully-connected-classifier baseline; with Gini-based feature selection, accuracy stayed essentially unchanged while training time dropped 30.4% versus the original SVM approach.',
        'Packaged as a desktop mini-app with Tkinter and deployed to the web with Django.'
      ]
    }
  },

  face: {
    name: { zh: '基于 OpenCV 的实时人脸识别（课程设计）', en: 'Real-time Face Recognition based on OpenCV (Course Project)' },
    period: { zh: '2021.02 – 2021.03', en: 'Feb 2021 – Mar 2021' },
    tags: ['OpenCV', 'Keras', 'CNN', '实时视频'],
    link: 'https://github.com/ILearn-better/Real-time-face-recognition-based-on-OpenCV',
    points: {
      zh: [
        '利用 OpenCV 进行图像处理，借助 Keras 框架搭建卷积神经网络，对图像进行特征提取与特征训练。',
        '利用训练好的分类模型进行预测，并将预测标签实时标注在每一帧图片上，实现视频流实时人脸检测与标注。'
      ],
      en: [
        'Used OpenCV for image processing and built a convolutional neural network with Keras for feature extraction and training.',
        'Used the trained classifier to predict and overlay labels on every frame in real time, achieving live face detection and annotation on a video stream.'
      ]
    }
  }
};

/* ---------------- 技能组 ---------------- */
const SKILL_GROUPS = {
  lang: {
    name: { zh: '编程语言', en: 'Programming Languages' },
    items: {
      zh: ['Python（熟练）', 'C++', 'Java', 'Matlab', 'SQL', 'LaTeX'],
      en: ['Python (advanced)', 'C++', 'Java', 'Matlab', 'SQL', 'LaTeX']
    }
  },
  dl: {
    name: { zh: '深度学习 / 计算机视觉', en: 'Deep Learning / Computer Vision' },
    items: {
      zh: ['PyTorch、Keras、PaddlePaddle、OpenCV', 'ResNet / MobileNet / ViT / R-CNN 等经典网络', 'DB / CRNN 文本检测与识别', '迁移学习、特征工程与模型评估'],
      en: ['PyTorch, Keras, PaddlePaddle, OpenCV', 'Classic networks: ResNet / MobileNet / ViT / R-CNN', 'DB / CRNN text detection & recognition', 'Transfer learning, feature engineering, model evaluation']
    }
  },
  ml: {
    name: { zh: '机器学习 / 数据分析', en: 'Machine Learning / Data Analysis' },
    items: {
      zh: ['回归、聚类、优化等经典机器学习方法', '数据清洗、预处理与特征选择', '模型搭建、指标对比与结果复现'],
      en: ['Classical ML: regression, clustering, optimisation', 'Data cleaning, preprocessing and feature selection', 'Model building, metric comparison and result reproduction']
    }
  },
  quant: {
    name: { zh: '量化研究', en: 'Quantitative Research' },
    items: {
      zh: ['单因子检测与因子有效性验证', '国开债报价交易支持（固收品种）', '概率统计、数值分析、运筹学基础'],
      en: ['Single-factor screening and factor validation', 'CDB bond quoting/trading support (fixed income)', 'Probability & statistics, numerical analysis, operations research']
    }
  },
  data: {
    name: { zh: '数据工程', en: 'Data Engineering' },
    items: {
      zh: ['MongoDB 数据服务搭建与历史数据迁移', '数据库脚本编写、监控与异常处理', 'NumPy / Pandas 数据处理'],
      en: ['MongoDB data service setup and data migration', 'Database scripting, monitoring and exception handling', 'Data processing with NumPy / Pandas']
    }
  },
  eng: {
    name: { zh: '工程与部署', en: 'Engineering & Deployment' },
    items: {
      zh: ['Linux 常用命令与开发环境', 'Docker 容器化部署', 'Django Web 服务与 RESTful 接口开发', 'Git 版本管理、代码规范', 'Qt / Tkinter 桌面工具开发'],
      en: ['Linux command line and dev environment', 'Docker containerised deployment', 'Django web services and RESTful API development', 'Git version control and coding standards', 'Qt / Tkinter desktop tooling']
    }
  },
  office: {
    name: { zh: '办公与排版', en: 'Office & Typesetting' },
    items: {
      zh: ['Excel（函数、数据透视、宏）、Word、PPT', 'LaTeX 文档排版'],
      en: ['Excel (formulas, pivot tables, macros), Word, PPT', 'LaTeX typesetting']
    }
  },
  cert: {
    name: { zh: '语言证书', en: 'Language Certificate' },
    items: {
      zh: ['大学英语四级（CET-4）', '可流畅阅读英文原版数学教材与教辅资料', '胜任中英双语授课的语言要求'],
      en: ['CET-4 certificate', 'Able to read original English mathematics textbooks fluently', 'Meets the language requirement for bilingual instruction']
    }
  },
  teach: {
    name: { zh: '教学能力', en: 'Teaching Skills' },
    items: {
      zh: ['双语教案设计、课件开发', '学情诊断与分层教学', '试卷分析与一对一培优补差', '国际课程（IGCSE / A-Level）入门衔接与同步巩固', '数学探究项目与竞赛指导'],
      en: ['Bilingual lesson planning and courseware design', 'Learning-needs diagnosis and differentiated instruction', 'Exam-paper analysis and 1-on-1 remediation / enrichment', 'IGCSE / A-Level transition and synchronous consolidation', 'Guiding mathematical inquiry projects and competitions']
    }
  },
  tools: {
    name: { zh: '教学工具与可视化', en: 'Teaching Tools & Visualisation' },
    items: {
      zh: ['Office 双语课件与学情报告', 'Python、Matlab、LaTeX', '几何画板可视化数学教学'],
      en: ['Bilingual courseware and student reports in Office', 'Python, Matlab, LaTeX', "Geometer's Sketchpad for visual maths teaching"]
    }
  }
};

/* ---------------- 教育经历 ---------------- */
const EDUCATION = {
  school: { zh: '广东海洋大学', en: 'Guangdong Ocean University' },
  degree: { zh: '信息与计算科学 · 理学学士（本科）', en: 'B.Sc. in Information and Computing Science' },
  period: { zh: '2019.09 – 2023.06', en: 'Sep 2019 – Jun 2023' },
  courses: {
    zh: ['常微分方程', '复变函数与积分变换', '离散数学', '运筹学', '概率论与数理统计', '数值分析', '数据分析', '数据结构与算法', '数字图像处理', '模式识别', 'Python / C++ / Java / Matlab'],
    en: ['Ordinary Differential Equations', 'Complex Functions & Integral Transforms', 'Discrete Mathematics', 'Operations Research', 'Probability & Mathematical Statistics', 'Numerical Analysis', 'Data Analysis', 'Data Structures & Algorithms', 'Digital Image Processing', 'Pattern Recognition', 'Python / C++ / Java / Matlab']
  },
  campus: {
    zh: '校数学建模团队核心成员，参与校级科创项目，负责团队新人培训与解题方法指导；曾任学习委员、宣传委员。',
    en: 'Core member of the university mathematical-modeling team; participated in a university-level research project and led new-member training and problem-solving mentoring; served as Study Committee Member and Publicity Committee Member.'
  }
};

/* ---------------- 荣誉奖项 ---------------- */
const AWARDS = {
  zh: [
    '全国大学生数学建模竞赛 · 广东赛区一等奖',
    'Mathorcup 高校数学建模挑战赛 · 二等奖',
    '数维杯国际数学建模竞赛 · 二等奖',
    '广东海洋大学校级数学建模竞赛 · 一等奖',
    '广东海洋大学校级二、三等奖学金'
  ],
  en: [
    'First Prize, Guangdong Division, National College Student Mathematical Modeling Contest (CUMCM)',
    'Second Prize, MathorCup College Mathematical Modeling Challenge',
    'Second Prize, Shuwei Cup International Mathematical Modeling Competition',
    'First Prize, Guangdong Ocean University Mathematical Modeling Contest',
    'Second- and Third-class Scholarships, Guangdong Ocean University'
  ]
};
