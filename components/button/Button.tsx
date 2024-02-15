import React from "react";

type ButtonType = {
  content?: string | number;
  onClick?: () => void;
  children?: React.ReactNode;
  additionalClass?: string;
};

export default function Button({
  content,
  children,
  additionalClass,
  onClick,
}: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${additionalClass}`}
    >
      {content ? content : children}
    </button>
  );
}
