# sam2008610.github.io

個人部落格，使用 [Astro](https://astro.build) 建置，推送到 `main` 後由 GitHub Actions 自動部署到 GitHub Pages。

## 開發

需要 Node.js 22.23 以上（建議 24，見 `.nvmrc`）。

```sh
npm install
npm run dev      # 本機開發：http://localhost:4321
npm run build    # 型別檢查 + 建置到 dist/
npm run preview  # 預覽建置結果
```

## 寫新文章

在 `src/content/posts/` 下建立一個資料夾，資料夾名稱就是網址：

```
src/content/posts/my-new-post/
├── index.md
└── cover.jpg     # 選填，封面圖；內文用到的圖片也放這裡
```

`index.md` 的 front matter：

```yaml
---
title: "文章標題"
date: 2026-11-25T20:00:00+08:00
description: "選填，摘要；沒填會自動擷取內文開頭"
tags: ["標籤一", "標籤二"]
cover: "./cover.jpg"
coverAlt: "封面圖說明"
draft: true       # 草稿只會在 npm run dev 顯示
---
```

內文引用圖片：`![說明](./photo.jpg)`，Astro 會自動壓縮並轉成 WebP。

## 結構

| 路徑 | 用途 |
|---|---|
| `src/consts.ts` | 網站名稱、自我介紹、選單、社群連結 |
| `src/content/posts/` | 文章 |
| `src/pages/about.md` | 關於頁 |
| `src/styles/global.css` | 所有樣式與深淺色配色 |
| `src/assets/hero.jpg` | 首頁橫幅與預設分享圖 |
