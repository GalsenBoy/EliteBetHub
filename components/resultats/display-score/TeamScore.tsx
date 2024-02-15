import Button from "@/components/button/Button";
import TemplateScore from "./TemplateScore";
import { randomOne, randomTwo } from "@/lib/randonFloat";

type TeamScoreProps = {
  leagueLogoHome: string;
  leagueNameHome: string;
  leagueLogoAway: string;
  leagueNameAway: string;
  goalHome: number;
  goalAway: number;
};

export default function TeamScore({
  leagueLogoHome,
  leagueNameHome,
  leagueLogoAway,
  leagueNameAway,
  goalHome,
  goalAway,
}: TeamScoreProps) {
  return (
    <section className="flex  space-x-6">
      <div>
        <TemplateScore src={leagueLogoHome} content={leagueNameHome} />
        <TemplateScore src={leagueLogoAway} content={leagueNameAway} />
      </div>
      <div>
        <p className="my-3">{goalHome}</p>
        <p>{goalAway}</p>
      </div>
      <div className=" flex flex-col space-y-2">
        <Button additionalClass="bg-sky-600 " content={randomOne} />
        <Button additionalClass="bg-sky-600 " content={randomTwo} />
      </div>
    </section>
  );
}
