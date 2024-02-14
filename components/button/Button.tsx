import React from "react";

type ButtonType = {
  content?: string;
  children?: React.ReactNode;
};

export default function Button({ content, children }: ButtonType) {
  return (
    <button className="px-4 py-2 rounded-lg bg-sky-600 m-4">
      {content ? content : children}
    </button>
  );
}
