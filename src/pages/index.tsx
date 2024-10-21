import { PortfolioType } from "@/types";
import Portfolio from "../design/Pages/Portfolio";

export default function Home() {
    const contents: PortfolioType = {
        title: "みのむねっと",
        copyright: "minomura naoya",
        contents: [
            {
                tag: "list",
                title: "最近の更新",
                contents: [
                    "2024-10-14 「Tablify PDF」のページを作成しました。 ",
                    "2024-8-14 「都道府県落とし」のページを作成しました。 ",
                    "2024-04-01 Webサイトを移行しました。 ",
                    "2023-03-31 「ほのるるげーむ」のページを作成しました。 ",
                    "2022-08-23 「英単語」のページを作成しました。 ",
                    "2022-08-06 「紛らわしい文字チェック」のページを作成しました。 ",
                    "2022-06-08 「禁酒ルーレット」のページを作成しました。 ",
                    "2022-05-07 「東京都行き先ルーレット」のページを作成しました。 ",
                    "2022-05-04  Webサイトを立ち上げました。 ",
                ]
            },
            {
                tag: "image",
                title: "プロフィール",
                imagePath: "/profile1.png",
                imageCaption: "お腹が冷えやすいキャラクター",
                contents: [
                    "1997年生まれ",
                    "日本のとある企業に勤めています。",
                ]
            },
            {
                tag: "list",
                title: "スキル",
                contents: [
                    "AtCoder水色（2021年時点、使用言語：C++）",
                    "TypeScript 2024/03-現在",
                    "React 2024/03-現在",
                    "Next.js 2024/03-現在",
                    "Java 2023/01-2023/04",
                ]
            },
            {
                tag: "list",
                title: "資格",
                contents: [
                    "AZ-204 2024年取得",
                    "AZ-500 2024年取得",
                    "情報処理安全確保支援士試験 2024年合格",
                    "Java Silver 2023年取得",
                    "英検1級 2023年取得",
                    "AZ-700 2022年取得",
                    "CCNP(ENCOR, ENARSI) 2022年取得",
                    "CCNA 2022年取得",
                    "応用情報技術者試験 2021年取得",
                    "日商簿記検定1級 2020年取得",
                    "統計検定2級 2020年取得",
                    "第一級特殊陸上無線技士 2020年取得",
                    "TOEIC 875",
                    "学士（農学）",
                ]
            }
        ]
    }
    return (
        <Portfolio props={contents} />
    )
}
