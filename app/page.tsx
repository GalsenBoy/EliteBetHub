import LoginButton from "@/components/LoginButton";
import SignOutButton from "@/components/SignOutButton";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div>
        <p>{JSON.stringify(session, null, 2)}</p>
        <SignOutButton />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl text-red-400">Hello Billy</h1>
      <LoginButton />
    </div>
  );
}
