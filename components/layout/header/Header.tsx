import LoginButton from "@/components/button/LoginButton";
import "./header.scss";
import SignOutButton from "@/components/button/SignOutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header>
      <div id="header-container">
        <h1>EBH</h1>
        {session ? <SignOutButton /> : <LoginButton />}
      </div>
    </header>
  );
}
