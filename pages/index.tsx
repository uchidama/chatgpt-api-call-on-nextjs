/**
 * ChatGPT API（gpt-3.5-turbo）を Node.js から使ってみる（公式リファレンスで参照した情報も記載）
 * https://qiita.com/youtoy/items/b3e2e462029bf40f8a1a
 * 　このコードをベースに。
 * $ npm i openai
 *
 * https://platform.openai.com/docs/api-reference/chat/create?lang=node.js
 *  これ、Example requestの右上にcurl, python, node.jsの選択がある！これは気が付かんわー
 *
 * https://openai.com/product
 *
 * https://platform.openai.com/account/api-keys
 *
 * https://twitter.com/yanosen_jp/status/1631074488363384832
 *
 * https://qiita.com/youtoy/items/84384ad7a742ea1ce8f5
 *
 * https://platform.openai.com/docs/libraries/node-js-library
 *
 * https://platform.openai.com/docs/api-reference/authentication
 *
 * https://platform.openai.com/docs/api-reference/searches
 */

import React from "react";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import axios from "axios";

const ChatGptApiTest = () => {
  const callAI = async () => {
    const chat: string = (
      document!.getElementById("text-textbox") as HTMLInputElement
    ).value;

    const res = await axios.get("/api/chatgpt?chat=" + chat);
    const data = await res.data;
    console.log(data);
    console.log(data.chat);
    alert(data.chat);
  };

  return (
    <div className="min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8  rounded-xl bg-gray-100 mx-auto my-2">
        <div className="">
          <div>
            <TextBox
              id="text-textbox"
              name="text-textbox"
              placeholder="何か質問を入力"
            ></TextBox>
          </div>
          <Button
            type="button"
            onClick={() => {
              callAI();
            }}
          >
            ChatGPTへ送る
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatGptApiTest;
