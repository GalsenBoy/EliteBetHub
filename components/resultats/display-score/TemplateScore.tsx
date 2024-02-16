import Button from "@/components/button/Button";
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
  // const randomHome = React.useMemo(() => Math.random() * 10, []);
  // const randomAway = React.useMemo(() => Math.random() * 10, []);
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
      {/* <div className=" flex flex-col space-y-2">
        <Button
          additionalClass="bg-sky-600 mt-4"
          content={randomHome.toFixed(2)}
        />
        <Button
          additionalClass="bg-red-600 mt-4"
          content={randomAway.toFixed(2)}
        />
      </div> */}
    </div>
  );
}
