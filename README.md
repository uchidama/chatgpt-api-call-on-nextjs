[![Image from Gyazo](https://i.gyazo.com/33e98ce97ed6b295667597b2c6a5a5f6.gif)](https://gyazo.com/33e98ce97ed6b295667597b2c6a5a5f6)　　
　　

Next.jsプロジェクトからChatGPT API(gpt-3.5-turbo)を呼び出すサンプル

# 主要コード

- [pages/api/chatgpt.ts](https://github.com/uchidama/chatgpt-api-call-on-nextjs/blob/main/pages/api/chatgpt.ts)
    - ChatGPT APIを呼び出す。.env.local内のOPENAI_API_KEYをNEXT_PUBLIC_にしないために、pages/api/以下に配置。　　
- [pages/index.tss](https://github.com/uchidama/chatgpt-api-call-on-nextjs/blob/main/pages/index.tsx)
    - /api/chatgptと通信して、メッセージの送信、受け取り。

## .env.local

このリポジトリ内にはないが作成して、OPENAIのAPIキーを書き込む
```
OPENAI_API_KEY=HOGEHOGE
```
OPENAIのAPIキーは[ココ](https://platform.openai.com/account/api-keys)から取得する。 

## 起動

```
npm run dev
```
localhost:3000/ にブラウザからアクセスして使用。　　

## 使用パッケージ

```
npm i openai
npm i axios
```

ChatGPTとは直接関係ないがデザインのために[tailwind css](https://tailwindcss.com/docs/guides/nextjs)を使用している

# 以下Next.jsのデフォルトで書かれてるREADME内容

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
