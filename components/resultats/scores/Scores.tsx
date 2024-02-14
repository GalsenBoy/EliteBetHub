export default async function Scores() {
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
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
  return (
    <section>
      {data["response"].map((item: any) => (
        <div key={item.fixture.id}>
          <div className="flex space-x-3">
            <img
              src={item.league.logo}
              alt=""
              style={{ width: 25, height: 25, objectFit: "cover" }}
            />
            <p>{item.league.name}</p>
          </div>
          {/* <p>Date: {new Date(item.fixture.date).toLocaleDateString()}</p> */}
          <div className="flex space-x-3">
            <img
              src={item.teams.home.logo}
              alt="elitebethub"
              style={{ width: 25, height: 25, objectFit: "cover" }}
            />
            <p>
              {item.teams.home.name} <span>{item.goals.home}</span>
            </p>
          </div>
          <div className="flex space-x-3">
            <img
              src={item.teams.away.logo}
              alt="elitebethub"
              style={{ width: 25, height: 25, objectFit: "cover" }}
            />
            <p>
              {item.teams.away.name} <span>{item.goals.away}</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
