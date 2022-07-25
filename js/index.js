const info = Vue.createApp({
    data() {
        return {
            tel: '私密',
            email: 'me[at]sonui·cn',
            name: 'Sonui',
            school: '内蒙古某大学',
            honor: [
                {
                    ico: "jsjds-logo.png",
                    name: "第十五届中国大学生计算机大赛国赛",
                    lev: "三等奖",
                    time: "2022.7.25",
                    caption: ["该认证为软件开发能力认证"]
                },
                {
                    ico: "lanqiao-logo.svg",
                    name: "第十二届蓝桥杯省赛",
                    lev: "一等奖",
                    time: "2021.4.30",
                    caption: ["C/C++ 程序设计大学B组", "该认证为算法能力认证"]
                },
                {
                    ico: "lanqiao-logo.svg",
                    name: "第十三届蓝桥杯省赛",
                    lev: "一等奖",
                    time: "2022.4.28",
                    caption: ["C/C++ 程序设计大学B组", "该认证为算法能力认证"]
                },
                {
                    ico: "huawei-logo-30.png",
                    name: "华为中国大学生 ICT 2021省赛",
                    lev: "二等奖",
                    time: "2021.11.18",
                    caption: ["该认证为云服务知识认证"]
                },
                {
                    ico: "ustc-logo.png",
                    name: "第八届中科大信息安全大赛",
                    lev: "排名: 前21%",
                    time: "2021.10.30",
                    caption: ["该认证为信息安全能力认证"]
                }
            ],
            project: [
                {
                    name: "Online Chat",
                    time: ["2022.3.14", "至今"],
                    url: [
                        {
                            caption: "Github: https://github.com/sosyz/OnlineChat",
                            url: "https://github.com/sosyz/OnlineChat"
                        }
                    ],
                    work: "前后端开发",
                    content: "<br/><br/>前端: 使用 Vue + Element构建<br/>后端: 使用 SpringBoot 处理HTTP请求, 使用 Mybatis 操作数据库, 在聊天消息收发中运用了 RabbitMQ 来处理防止过载, 同时使用 redis 对冷数据缓存减少对数据库读取压力",
                    technology: "Vue, SpringBoot, Mybatis, RabbitMQ, Redis"
                },
                {
                    name: "Cloud Office",
                    time: ["2021.11.1", "至今"],
                    url: [
                        {
                            caption: "服务端: https://github.com/sosyz/CloudOffice_Server",
                            url: "https://github.com/sosyz/CloudOffice_Server"
                        },
                        {
                            caption: "客户端: https://github.com/sosyz/CloudOffice_uniapp",
                            url: "https://github.com/sosyz/CloudOffice_uniapp"
                        }
                    ],
                    work: "前后端开发",
                    content: "<br/>前端: 使用 uni-app 开发<br/>后端使用 Gin, Gorm 开发, 运行环境为 Serverless, 通过组建私有网络来减低延迟, 使用了S3标准存储桶存储文件, 通过解析OpenXML信息及使用腾讯云文档能力来获取文件信息, 通过使用 Python 管理打印队列, 打印机从打印队列中获取文件进行打印, 打印机端通过 WebSocket 连接打印机池 Serverless 心跳上报状态",
                    technology: "uni-app, Gin, Gorm, Serverless, Python, WebSocket"
                },
                {
                    name: "撤回查询 (SeekMsg)",
                    time: ["2017.6", "2019.10"],
                    url: [
                        // {
                        //     caption: "Gitee: https://gitee.com/sonui/CoolQ_SeekMsg",
                        //     url: "javascript:void();"
                        // }
                    ],
                    work: "前后端开发",
                    content: "使用 QQ 机器人框架开放SDK进行二次开发, 对收到的消息进行存储的同时 Hook 框架 SendMsg 接口来保存机器人发送的消息， 存储于本地 SQLite3 数据库中， 使用者通过命令触发调取记录， AES-128-CBC 加密后上传至服务器后回复查看链接，使用者通过链接后的 \"#\" 参数解密数据, 作为插件运行在500+ QQ 机器人",
                    technology: "CQ, SQLite3, EPL, JavaScript, Html, CSS"
                },
                {
                    name: "贴吧管理工具",
                    time: ["2021.12", "至今"],
                    url: [
                        {
                            caption: "商业项目, 闭源",
                            url: "javascript:void(0)"
                        }
                    ],
                    work: "应用软件开发",
                    content: "一款于 Windows 平台运行的软件, 对软件 UI 进行设计及功能代码编写, 使用多线程扫描帖子标题和回复内容, 投入进规则匹配进行匹配, 匹配成功后根据设定规则进行相应的拉黑、删除等操作",
                    technology: "EPL Regex"
                }
            ],
            schoolLife: [
                {
                    name: "<img alt=\"microsoft\" src=\"assets/microsoft.svg\">微软Engage大学生培养计划",
                    time: ["2022.7.11", "2022.8.19"],
                    position: "一组成员",
                    content: "接受微软导师培训，学习了协同开发、工程性思维、编程等知识, 参与了EasyWork项目的开发负责前端部分",
                },
                {
                    name: "<img alt=\"microsoft\" src=\"assets/youthcamp.png\">字节跳动青训营",
                    time: ["2022.7.24", "2022.8.19"],
                    position: "基础班学员",
                    content: "接受字节跳动青训营培训, 学习了前端三件套、安全规范、TS、React、Web动画、小游戏小程序开发等知识",
                },
                {
                    name: "<img alt=\"qlzj\" src=\"assets/acm-logo.png\">ACM 协会",
                    time: ["2021.3", "至今"],
                    position: "核心成员",
                    content: "负责了 ACM 训练 OJ 的搭建, 出题, 提交, 测试, 排名等工作, 参与了 ACM 协会的大量活动, 包括 ACM 协会的比赛, 技术交流, 新生培训等"
                },
                // {
                //     name: "Phoenix 项目组",
                //     time: ["2022.5.1", "2023.7.1"],
                //     position: "组长",
                //     content: "负责了项目组的组建, 人员管理, 产品设计, 对校用 OJ 进行开发"
                // },
                {
                    name: "<img alt=\"contest\" src=\"assets/contest.svg\">竞赛活动",
                    time: ["2019.9.1", "2023.7.1"],
                    position: false,
                    content: "在校期间积极参与各项比赛，例如互联网+、挑战杯、申请大学生创新创业基金, 协办学校 ACM 比赛, 在参加活动体验活动的同时也取得了优秀的成绩, 成功申请数项大学生创新创业基金"
                }
            ],
            other: [
                {
                    title: "<img alt=\"HydroLogo\" src=\"./assets/hydrooj-logo.ico\" height=\"16px\" />HydroOJ 文档贡献者",
                    content: "对 Hydro 的使用文档补充 Linux 环境安装、 CDN 配置等说明。"
                },
                {
                    title: "<img alt=\"chatting\" src=\"./assets/icpc-chatting.png\" height=\"16px\" />交流与分享",
                    content: "习惯与他人分享已掌握的技能，也十分懂得向他人学习。常活跃于开源社区，并愿意为自己喜欢的程序提交补丁。"
                }
            ]
        }
    }
})

info.mount('#info');
