import React, { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

//const TextBox = (props: InputHTMLAttributes<HTMLInputElement> & {children: ReactNode}) => {   ///< inputタグはchildren要素カットで良いんじゃない？
const TextBox = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="text"
      className="px-4 py-2 rounded-full bg-white text-black border border-gray-500 m-4"
      {...props}
    ></input>
  );
};

export default TextBox;
