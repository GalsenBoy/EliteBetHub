"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      className="px-4 py-2 rounded-lg bg-sky-600 m-4"
      onClick={async () => await signIn()}
    >
      Se connecter
    </button>
  );
}
