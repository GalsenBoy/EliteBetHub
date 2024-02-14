import DisplayScores from "../display-score/DisplayScores";
import "./scores.scss";
export default async function Scores() {
  let data;
  try {
    const response = await fetch(
      "https://v3.football.api-sports.io/fixtures?live=all&results=7",
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
    <section id="scores">
      <h1 className="text-2xl">Résultats des match en cours</h1>
      {data["response"].map((item: any) => (
        <DisplayScores item={item} key={item.fixture_id} />
      ))}
    </section>
  );
}
