/* eslint-disable react/no-unescaped-entities */
import DisplayScores from "../display-score/DisplayScores";
import "./scores.scss";
export default async function Scores() {
  let data;
  try {
    const response = await fetch(
      "https://v3.football.api-sports.io/fixtures?live=all&timezone=Europe/London&timezone=Europe/Madrid&timezone=Europe/Rome&timezone=Europe/Paris&timezone=Europe/Istanbul",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.FOOTBALL_API_KEY as string,
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
        redirect: "follow",
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
  return (
    <section id="scores ">
      <h1 className="text-5xl text-center font-semibold mb-12">
        Résultats des match en cours
      </h1>
      <h2 className="text-3xl text-center my-6 text-yellow-400">
        ⚠️Vous n'avez pas la possibilité d'avoir un ticket combiné pour le
        moment
      </h2>
      {data["response"].splice(0, 13).map((item: any) => (
        <DisplayScores item={item} key={item.fixture_i} />
      ))}
    </section>
  );
}
