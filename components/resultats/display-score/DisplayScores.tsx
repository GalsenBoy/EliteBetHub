import { Item } from "@/interface/IScore";
import TeamScore from "./TeamScore";
export default function DisplayScores({ item }: { item: Item }) {
  return (
    <div className="p-4">
      <TeamScore leagueLogo={item.league.logo} leagueName={item.league.name} />
      <TeamScore
        leagueLogo={item.teams.home.logo}
        leagueName={item.teams.home.name}
        goal={item.goals.home}
      />
      <TeamScore
        leagueLogo={item.teams.away.logo}
        leagueName={item.teams.away.name}
        goal={item.goals.away}
      />
    </div>
  );
}
