import Presentation from "@/components/presentation/Presentation";
import Scores from "@/components/resultats/scores/Scores";

export default async function Home() {
  return (
    <>
      <Presentation />
      <Scores />
    </>
  );
}
