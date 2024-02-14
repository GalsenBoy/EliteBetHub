type TeamScoreProps = {
  leagueLogo: string;
  leagueName: string;
  goal?: number;
};

export default function TeamScore({
  leagueLogo,
  leagueName,
  goal,
}: TeamScoreProps) {
  return (
    <div className="flex space-x-3">
      <img
        src={leagueLogo}
        alt=""
        style={{ width: 25, height: 25, objectFit: "cover" }}
      />
      <p>
        {leagueName} <span>{goal}</span>
      </p>
    </div>
  );
}
