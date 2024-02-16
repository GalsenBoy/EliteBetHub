import Image from "next/image";
import "./presentation.scss";
export default function Presentation() {
  return (
    <section id="presentation">
      <div className="h-16">
        <Image src={"/player.jpg"} alt="joueur" width={1600} height={2} />
      </div>
    </section>
  );
}
