"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <button
      onClick={async () => {
        await signIn();
      }}
    >
      Se connecter
    </button>
  );
}
