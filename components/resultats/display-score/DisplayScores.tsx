"use client";
import { Item } from "@/interface/IScore";
import TeamScore from "./TeamScore";

export default function DisplayScores({ item }: { item: Item }) {
  return (
    <div className="p-4 max-w-5xl mx-auto mb-7" key={item.fixture.id}>
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
    </div>
  );
}
