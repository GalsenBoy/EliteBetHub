import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Avatar() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <section>
        <div id="profil-user">
          {session.user.image && session.user.name ? (
            <Image
              width={100}
              height={100}
              src={session.user.image}
              alt={session.user.name}
              quality={100}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          ) : (
            <Image
              src="/vercel.svg"
              alt="elitebethub"
              width={100}
              height={100}
              style={{ borderRadius: "50%" }}
            />
          )}
          <h1 className="text-2xl text-red-500">{session?.user.name}</h1>
          <h2 className="text-2xl text-red-500">{session?.user.email}</h2>
        </div>
      </section>
    );
  }
}
