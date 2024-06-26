export interface Member {
    photo: string;
    name: string;
    jobTitle: string;
    department: string;
    introduction: string;
    instagram: string;
    github: string;
    linkedin: string;
}

export const data: {
    [key: string]: {
        members: Array<Member>;
    };
} = {
    "2023-2024": {
        members: [
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/蘇奕幃 Alex Su.png`,
                name: "蘇奕幃 Alex Su",
                jobTitle: "Lead",
                department: "工業與資訊管理學系 113級",
                introduction:
                    "喜歡聽K-pop跟J-pop，偶爾去個音樂祭，都大四了還在搞社團",
                instagram: "https://www.instagram.com/yeeway_0609",
                github: "https://github.com/yeeway0609",
                linkedin: "www.linkedin.com/in/yi-wei-su",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/陳威凱 Wayne.jpg`,
                name: "陳威凱 Wayne",
                jobTitle: "總務",
                department: "工業與資訊管理學系 113級",
                introduction: "Coding／Gym／Gaming",
                instagram: "",
                github: "https://github.com/weikaibro",
                linkedin: "https://www.linkedin.com/in/weikaichen/",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/王政硯 Jason Wang.JPG`,
                name: "王政硯 Jason Wang",
                jobTitle: "活動部 部長",
                department: "土木工程學系 113級",
                introduction: "pneumonoultramicroscopicsilicovolcanoconiosis",
                instagram: "",
                github: "",
                linkedin: "https://www.linkedin.com/in/政硯-王-7b8b7b294/",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/黃楷越 Ayu.jpg`,
                name: "黃楷越 Ayu",
                jobTitle: "活動部 部員、數據組 組員",
                department: "統計學系雙主修歷史學系",
                introduction: "如果看見地獄，我就不怕魔鬼",
                instagram: "https://www.instagram.com/fyh_kevin/",
                github: "",
                linkedin:
                    "https://www.linkedin.com/in/kai-yue-huang-277591267/",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/許晏綾 YeyeLeaf.png`,
                name: "許晏綾 YeyeLeaf",
                jobTitle: "活動部 部員",
                department: "資訊工程學系 115級",
                introduction: "哈囉我是葉子！",
                instagram: "",
                github: "https://github.com/YeyeLeaf",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/avatar.png`,
                name: "邱繼寬",
                jobTitle: "活動部 部員",
                department: "資訊工程學系 115級",
                introduction: "",
                instagram: "",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/avatar.png`,
                name: "張維芹",
                jobTitle: "設計部 部長",
                department: "歷史學系 114級",
                introduction: "",
                instagram: "",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/游舒淳 Minnie Yu.jpeg`,
                name: "游舒淳 Minnie Yu",
                jobTitle: "設計部 部員",
                department: "工業設計學系 114級",
                introduction:
                    "嗨～我是游舒淳，專長是平面和產品設計，請多多指教～",
                instagram:
                    "https://instagram.com/yushuchuen?igshid=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/陳莉臻 Lili.jpeg`,
                name: "陳莉臻 Lili",
                jobTitle: "設計部 部員",
                department: "資訊工程學系 115級",
                introduction:
                    "UI/UX新手，向大大們努力學習ˋˏ  👣 ˎˊ .ᐟ‪‪.ᐟ好多好多想做的事，喜歡躺在星空下和高山草原",
                instagram:
                    "https://instagram.com/liliii__88?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr",
                github: "https://github.com/LileeeC",
                linkedin:
                    "https://www.linkedin.com/in/%E8%8E%89%E8%87%BB-%E9%99%B3-85577a296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/徐名萱(橘子).jpg`,
                name: "徐名萱(橘子)",
                jobTitle: "設計部 部員",
                department: "工業設計學系 113級",
                introduction:
                    "ENFP~沒有很E但是很NP(想法很跳躍、做事很彈性的意思) 喜歡做比較跳脫框架的設計，喜歡吃甜的，喜歡野餐，喜歡看殭屍片，喜歡奇怪又可愛的東西~",
                instagram:
                    "https://instagram.com/kjasminss?igshid=OGQ5ZDc2ODk2ZA==",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/avatar.png`,
                name: "官佩嫻",
                jobTitle: "設計部 部員",
                department: "工業設計學系 113級",
                introduction: "",
                instagram: "",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/avatar.png`,
                name: "邱于芸",
                jobTitle: "設計部 部員",
                department: "建築學系 114級",
                introduction: "",
                instagram: "",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/顏于絜 Jamie Yan.jpg`,
                name: "顏于絜 Jamie Yan",
                jobTitle: "公關部 部長",
                department: "政治學系 115級",
                introduction: "跨院雙主修資訊系，努力每學期歐趴中！",
                instagram: "https://www.instagram.com/9._._.9.9/",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/張柏駿 Burgeon.jpg`,
                name: "張柏駿 Burgeon",
                jobTitle: "公關部 部員",
                department: "工業與資訊管理學系 113級",
                introduction: "慢慢變強中",
                instagram: "https://www.instagram.com/burgeon_c0602/",
                github: "https://github.com/Burgeon-C",
                linkedin: "https://www.linkedin.com/in/burgeonchang-ncku/",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/邱宇辰 Benson Chiu.jpeg`,
                name: "邱宇辰 Benson Chiu",
                jobTitle: "公關部 部員",
                department: "工業與資訊管理學系 113級",
                introduction: "哈嘍",
                instagram: "",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/銀絲卷.jpeg`,
                name: "銀絲卷",
                jobTitle: "公關部 部員",
                department: "工業與資訊管理學系 114級",
                introduction:
                    "大家好～我是工資系大三，希望可以成為一名前端開發工程師",
                instagram: "",
                github: "https://github.com/shixuanLin1009",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/avatar.png`,
                name: "林志芸",
                jobTitle: "Web 網頁開發組 組長",
                department: "資訊工程學系 114級",
                introduction: "",
                instagram: "",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/李緒成.JPG`,
                name: "李緒成",
                jobTitle: "GCP 組長",
                department: "資訊工程學系 115級",
                introduction:
                    "目前就讀成大資工系大二, 興趣是聽音樂, 因為不會用樂器, 還有出去玩！ 上大學才接觸一點網頁開發的東西, 發現自己前端太爛所以只能往後端走qq, 會的東西還很少, 希望大家能多多指教～ 最近有點想當機師, 如果有知道怎麼當的話麻煩聯絡我",
                instagram:
                    "https://instagram.com/peter_lee0814?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr",
                github: "https://github.com/peterxcli",
                linkedin: "https://linkedin.com/",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/施尚均 Finn.jpg`,
                name: "施尚均 Finn",
                jobTitle: "AI 人工智慧組 組長",
                department: "電機工程學系 113級",
                introduction:
                    "小子，我最近正好有些不錯的模型要脫手，要不要試用看看",
                instagram:
                    "https://www.instagram.com/finn_ilda/?igshid=M2RkZGJiMzhjOQ%3D%3D",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/顏鈺蓁 Yu Chen Yen.jpg`,
                name: "顏鈺蓁 Yu Chen Yen",
                jobTitle: "AI 人工智慧組 副組長",
                department: "電機工程學系 113級",
                introduction: "嗨",
                instagram: "https://www.instagram.com/yuchen170_/",
                github: "https://github.com/yuchen170",
                linkedin:
                    "https://www.linkedin.com/in/yuchen170?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/周穆可 Claire Chou.jpeg`,
                name: "周穆可 Claire Chou",
                jobTitle: "數據科學組 組長",
                department: "政治學系 112級",
                introduction: "吃一個甜點心情還是不好嗎？那就吃兩個",
                instagram:
                    "https://instagram.com/claire_chou_18?igshid=M2RkZGJiMzhjOQ%3D%3D&utm_source=qr",
                github: "",
                linkedin: "http://linkedin.com/in/mu-ko-chou",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/W.A.Mozart.png`,
                name: "W.A.Mozart",
                jobTitle: "數據科學組 副組長",
                department: "數學系 113級",
                introduction: "音樂家、歌劇作家",
                instagram: "",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2023-2024/HW.png`,
                name: "HW",
                jobTitle: "Unity 遊戲開發組 組長",
                department: "工程科學系 113級",
                introduction: "這是必填問題",
                instagram: "",
                github: "https://github.com/wayneouow",
                linkedin: "",
            },
        ],
    },
    "2022-2023": {
        members: [
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2022-2023/葉人豪 Huckle Yeh.jpg`,
                name: "葉人豪 Huckle Yeh",
                jobTitle: "Lead",
                department: "電機工程學系 114級",
                introduction: "Live a life that you will remember!",
                instagram: "https://www.instagram.com/hhjj55013/",
                github: "https://github.com/hhjj55013",
                linkedin:
                    "https://www.linkedin.com/in/%E4%BA%BA%E8%B1%AA-%E8%91%89-950057243/",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2022-2023/Yu-Chen Chan.png`,
                name: "Yu-Chen Chan",
                jobTitle: "總務",
                department: "資訊工程學系 113級",
                introduction: "A",
                instagram: "",
                github: "https://github.com/TCFSH69",
                linkedin: "https://www.linkedin.com/in/yu-chen-chan-3b4b60226/",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2022-2023/劉育瑄 Jenny Liu.jpg`,
                name: "劉育瑄 Jenny Liu",
                jobTitle: "公關部 部長",
                department: "資訊工程研究所 113級",
                introduction: "Enrich your life!",
                instagram: "https://www.instagram.com/jenny.liu_1116/",
                github: "https://github.com/Niomoo",
                linkedin: "https://www.linkedin.com/in/jenny-liu-lyh/",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2022-2023/何寬羿 Kevin.jpg`,
                name: "何寬羿 Kevin",
                jobTitle: "跨平台 APP 組 組長",
                department: "資訊工程學系 114級",
                introduction: "",
                instagram: "",
                github: "",
                linkedin: "",
            },
            {
                photo: `${process.env.PUBLIC_URL}/img/teams/2022-2023/王第一 WangFirst.png`,
                name: "王第一 WangFirst",
                jobTitle: "Unity 遊戲開發組 組長",
                department: "光電系 112級",
                introduction:
                    "遊戲設計師兼繪師兼音樂家兼光學工程師兼教師兼藝術家。",
                instagram: "https://www.instagram.com/wangstarfirst/",
                github: "https://github.com/WangStarFirst",
                linkedin:
                    "https://www.linkedin.com/in/%E5%B4%87%E5%AE%89-%E7%8E%8B-67211019b/",
            },
        ],
    },
};
