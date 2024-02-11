"use client";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      className="px-4 py-2 rounded-lg bg-sky-600 m-4"
      onClick={async () => await signOut()}
    >
      Se déconnecter
    </button>
  );
}
