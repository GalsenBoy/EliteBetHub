/* eslint-disable react/no-unescaped-entities */
"use client";
import { signIn } from "next-auth/react";
import Login from "./Login";
export default function Home() {
  return (
    <main>
      Home page
      <Login />
    </main>
  );
}
