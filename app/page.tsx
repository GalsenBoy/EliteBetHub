import Presentation from "@/components/presentation/Presentation";

export default async function Home() {
  var myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", process.env.FOOTBALL_API_KEY as string);
  myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let data;
  try {
    const response = await fetch(
      "https://v3.football.api-sports.io/fixtures?live=all",
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
    // console.log("====================================");
    console.log(data["response"]);
    // console.log("====================================");
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }

  return (
    <>
      <Presentation />
      <hr />
      {data["response"].map((item: any) => (
        <div key={item.fixture.id}>
          <h3>{item.league.name}</h3>
          <p>Referee: {item.fixture.referee}</p>
          <p>Date: {new Date(item.fixture.date).toLocaleDateString()}</p>
          <p>Home Team: {item.teams.home.name}</p>
          <p>Away Team: {item.teams.away.name}</p>
          <p>
            Score: {item.goals.home} - {item.goals.away}
          </p>
        </div>
      ))}
    </>
  );
}
