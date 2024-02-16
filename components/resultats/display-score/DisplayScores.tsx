"use client";
import { Item } from "@/interface/IScore";
import TemplateScore from "./TemplateScore";
import TeamScore from "./TeamScore";
import Button from "@/components/button/Button";

export default function DisplayScores({ item }: { item: Item }) {
  const handleClick = () => {
    console.log("====================================");
    console.log(item.fixture.id);
    console.log("====================================");
  };

  return (
    <div className="p-4 max-w-5xl mx-auto " key={item.fixture.id}>
      {/* <TemplateScore src={item.league.logo} content={item.league.name} /> */}
      <div className="flex justify-center">
        <TeamScore
          leagueLogoHome={item.teams.home.logo}
          leagueNameHome={item.teams.home.name}
          leagueLogoAway={item.teams.away.logo}
          leagueNameAway={item.teams.away.name}
          goalHome={item.goals.home}
          goalAway={item.goals.away}
        />
      </div>
      <Button onClick={handleClick} additionalClass="bg-sky-600 m-4">
        Parier
      </Button>
    </div>
  );
}
