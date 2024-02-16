"use client";
import Button from "@/components/button/Button";
import TemplateScore from "./TemplateScore";
import React from "react";
import Bet from "./Bet";

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
  const randomHome = React.useMemo(() => Math.random() * 10, []);
  const randomAway = React.useMemo(() => Math.random() * 10, []);

  const handleHome = () => {
    console.log(randomHome * 100);
  };
  // const montant = handleHome();

  return (
    <section className="flex space-x-6">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <TemplateScore src={leagueLogoHome} content={leagueNameHome} />
          <h3 style={{ fontSize: "3em" }}>{goalHome}</h3>
        </div>
        <Bet
          random={randomHome}
          leagueName={leagueNameHome}
          color="bg-sky-500"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-3">
          <h3 style={{ fontSize: "3em" }}>{goalAway}</h3>
          <TemplateScore src={leagueLogoAway} content={leagueNameAway} />
        </div>
        <Bet
          random={randomAway}
          leagueName={leagueNameAway}
          color="bg-red-500"
        />
      </div>
    </section>
  );
}
