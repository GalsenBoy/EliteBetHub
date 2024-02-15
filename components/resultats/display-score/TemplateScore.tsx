import Image from "next/image";

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
    <div className={`flex space-x-3 my-3 ${additionalClass}`}>
      <Image
        src={src}
        width={25}
        height={25}
        alt={content}
        style={{ objectFit: "cover" }}
      />
      <p>{content}</p>
    </div>
  );
}
