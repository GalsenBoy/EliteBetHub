import Image from "next/image";
import React from "react";

type TemplateScoreType = {
  src: string;
  content: string;
  additionalClass?: string;
};

export default function TemplateScore({
  src,
  content,
  additionalClass,
}: TemplateScoreType) {
  return (
    <div className={`flex flex-col items-center ${additionalClass}`}>
      <Image
        src={src}
        width={150}
        height={150}
        alt={content}
        style={{ objectFit: "cover" }}
      />
      <p className="text-lg">{content}</p>
    </div>
  );
}
