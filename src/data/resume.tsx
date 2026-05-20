import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "文海星辰",
  initials: "DV",
  url: "https://dillion.io",
  location: "旧金山, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "以理性为笔，以热爱为墨，写尽对世界的壮阔向往。",
  summary:
    "自2013年9月赴江城武汉，我便在此开启了漫长的创业求索之路。\n\n数载浮沉，尝过世事风霜，也遇过人间光亮，在起落之间沉淀心性，于得失之中认清方向。\n\n行至2019年末，我选择与过往作别，转身奔赴全新的人生旷野。\n从前在商海逐浪，如今以代码为舟，在理性与逻辑的世界里继续前行。\n半生辗转，初心未改，依旧相信热爱自有力量，前路皆有奔赴。\n\n闲暇时偏爱打篮球，在汗水与心跳里保持热忱与鲜活，以少年心气，对抗岁月漫长。",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "首页" },
    { href: "#about", icon: NotebookIcon, label: "平生自述🖊️" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    wechat: {
      qrcode: "/wechat-qrcode.png",
      id: "zhudiwen9999",
    },
    social: {
      GitHub: {
        name: "序章与征途⚓️",
        url: "#work",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "成长轨迹🚀",
        url: "#education",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "武器库⚒️",
        url: "#skills",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "赴一场创造与热爱的邀约🪁",
        url: "#projects",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "发送邮件",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "独立技术创业者",
      href: "#",
      badges: [],
      location: "武汉",
      title: "独立技术创业者",
      logoUrl: "/atomic.png",
      start: "2024年1月",
      end: "至今",
      description:
        "专注于 SaaS 产品开发和技术咨询，帮助企业实现数字化转型。",
    },
    {
      company: "协议开发",
      href: "#",
      badges: [],
      location: "远程",
      title: "协议开发工程师",
      logoUrl: "/nvidia.png",
      start: "2023年1月",
      end: "2023年9月",
      description:
        "参与区块链协议开发，实现智能合约和去中心化应用。",
    },
    {
      company: "后端开发",
      href: "#",
      badges: [],
      location: "远程",
      title: "后端开发工程师",
      logoUrl: "/splunk.svg",
      start: "2022年1月",
      end: "2022年9月",
      description:
        "设计和实现高可用的后端服务架构，优化系统性能和稳定性。",
    },
    {
      company: "软件工程师",
      href: "#",
      badges: [],
      location: "远程",
      title: "软件工程师",
      logoUrl: "/shopify.svg",
      start: "2021年1月",
      end: "2021年9月",
      description:
        "参与企业级应用开发，使用现代技术栈构建高效可靠的软件系统。",
    },
    {
      company: "技术学习转型",
      href: "#",
      badges: [],
      location: "武汉",
      title: "技术学习者",
      logoUrl: "/buildspace.jpg",
      start: "2020年1月",
      end: "2020年9月",
      description:
        "系统学习编程和软件开发，完成从传统行业到技术领域的转型。",
    },
    {
      company: "自主创业",
      href: "#",
      badges: [],
      location: "武汉",
      title: "创始人",
      logoUrl: "/lime.svg",
      start: "2013年9月",
      end: "2019年12月",
      description:
        "以传统行业为序，在商业浪潮中见天地、见众生，沉淀独属于自己的人生底色。",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "#",
      degree: "技术进阶学习",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "计算机技术",
      href: "#",
      degree: "系统自学开发",
      logoUrl: "/waterloo.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "自主创业",
      href: "#",
      degree: "武汉创业历练",
      logoUrl: "/laurier.png",
      start: "2013",
      end: "2019",
    },
    {
      school: "福建体育职业技术学院",
      href: "#",
      degree: "体育专业",
      logoUrl: "/ib.png",
      start: "2009",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "生成式引擎优化GEO",
      href: "https://chatcollect.com",
      dates: "2025年9月 - 至今",
      active: true,
      description:
"信息时代正在重塑搜索的边界，我以生成式引擎优化为笔，书写搜索引擎变革的序章。",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "网站",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/1.mp4",
    },
    {
      title: "个人网站开发",
      href: "https://magicui.design",
      dates: "2025年6月 - 至今",
      active: true,
      description:
        "为开发者与品牌方提供定制化网站开发，以及可商用的动画UI组件设计与交付。",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "网站",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/2.mp4",
    },
    {
      title: "生活碎片记录",
      href: "https://llm.report",
      dates: "2025年10月 - 至今",
      active: true,
      description:
"记录日常，收藏热爱，把平凡的日子过得闪闪发光。",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "网站",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/3.mp4",
    },
    {
      title: "光标织就的星轨",
      href: "https://automatic.chat",
      dates: "2023年4月 - 2024年3月",
      active: true,
      description:
"以光标为引，在方寸屏幕间，织就流动的光影诗篇。",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "网站",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/4.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "2018年11月23日 - 25日",
      location: "伦敦, 安大略省",
      description:
        "开发了一个使用增强现实技术为儿童提供睡前故事的移动应用程序。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "2018年9月14日 - 16日",
      location: "滑铁卢, 安大略省",
      description:
        "开发了一个移动应用程序，实时向所有学生提供大学校园内的活动信息。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "2018年3月23日 - 24日",
      location: "加州旧金山",
      description:
        "开发了一个移动应用程序，将受害者的医疗数据从救护车内传输给医院的医生。",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "2018年2月3日 - 4日",
      location: "加州旧金山",
      description:
        "开发了一个网络应用程序，聚合关于加密货币的社交媒体数据并预测未来价格。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "2018年1月20日 - 21日",
      location: "加州戴维斯",
      description:
        "开发了一个移动应用程序，为用户分配每日碳排放限额，以迈向可持续环境。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "最佳数据黑客奖",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "2017年10月13日 - 15日",
      location: "滑铁卢, 安大略省",
      description:
        "开发了一个区块链应用程序，供医生和药剂师进行可信交易，防止患者用药过量。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "2017年9月15日 - 17日",
      location: "滑铁卢, 安大略省",
      description:
        "开发了一个虚拟现实应用程序，允许用户以第三人称视角看到自己。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "2017年8月26日 - 27日",
      location: "多伦多, 安大略省",
      description:
        "开发了一个开放平台，让寄往同一地点的人可以合并运费并节省开支。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "2017年7月23日",
      location: "多伦多, 安大略省",
      description:
        "开发了一个 Chrome 扩展程序，跟踪您访问的 Facebook 个人资料，如果您访问了另一个女孩的页面，会立即发短信给您的女朋友。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "2017年6月23日 - 25日",
      location: "多伦多, 安大略省",
      description:
        "开发了一个 Python 库，可以导入到任何 Python 游戏中，并根据玩家的实时情绪改变游戏难度。使用 OpenCV 和网络摄像头进行面部识别，并使用 [Tensorflow](https://www.tensorflow.org/Tensorflow) 和 [Keras](https://keras.io/) 在 [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) 上训练了一个自定义机器学习模型。该项目在多伦多全球 AI 黑客马拉松中获得一等奖，并被邀请在 [NextAI Canada](https://www.nextcanada.com/next-ai) 进行演示。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "一等奖",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "2017年6月17日 - 18日",
      location: "蒙特利尔, 魁北克",
      description:
        "使用 AI 开发实时面部微表情分析器",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "2017年6月10日",
      location: "多伦多, 安大略省",
      description:
        "为食物浪费创业公司 <a href='http://genecis.co/'>Genecis</a> 开发了一个自定义管理界面，用于管理他们的数据并提供分析。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "一等奖",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "2017年5月19日 - 21日",
      location: "国际",
      description: "改进 PocketDoc 并提交到在线比赛",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "前10名决赛选手 | 荣誉提名",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "2017年5月12日 - 14日",
      location: "多伦多, 安大略省",
      description: "开发神经网络来优化采矿过程",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "2017年5月5日 - 7日",
      location: "滑铁卢, 安大略省",
      description:
        "开发了 Pocketdoc，一款应用程序，您可以拍摄身体伤口的照片，应用程序会返回受伤或疾病的常见解决方案或治疗方法。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "2017年4月28日 - 30日",
      location: "滑铁卢, 安大略省",
      description:
        "开发了 Earthwatch，一个网络应用程序，允许飞机上的用户虚拟地查看下方世界的重要兴趣点。他们甚至可以选择偏离航线，然后再飞回来。特别感谢 CesiumJS 提供开源世界和飞机模型。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "2017年3月24日 - 26日",
      location: "密歇根州安阿伯",
      description:
        "开发了 Super Graphic Air Traffic，一个 VR 网站，旨在向人们介绍空中交通管制的世界。这个项目完全使用 THREE.js 和 node 后端服务器构建。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "2017年3月4日 - 5日",
      location: "滑铁卢, 安大略省",
      description:
        "在 2017 年 StartHacks 上开发的 Recipic 是一款移动应用程序，允许您拍摄家中食材的照片，它将使用 ClarifAI 图像识别 API 识别这些食材，并返回可能的食谱。Recipic 在黑客马拉松中获得最佳演讲和最佳黑客一等奖。",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "一等奖",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "2017年2月3日 - 5日",
      location: "金斯顿, 安大略省",
      description:
        "开发了一款移动游戏，支持全城范围内的追捕游戏，带有随机大厅",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "2016年11月26日",
      location: "滑铁卢, 安大略省",
      description:
        "开发了一个 Windows 11 模拟版本，带有有趣的通知和功能",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "2016年10月29日",
      location: "金斯顿, 安大略省",
      description:
        "为使用滑铁卢门户网站应用上传作业开发了一个内部小部件",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;