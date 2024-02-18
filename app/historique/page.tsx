// Historique.tsx
"use client";
import { useStore } from "@/lib/historique-store";
import { useEffect } from "react";

export default function Historique() {
  const { tickets, loadTickets } = useStore();

  useEffect(() => {
    loadTickets();
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl my-12">VOS PARIS</h1>
      {tickets.map((ticket, key) => (
        <div
          key={key}
          className="rounded-xl p-2 mb-4 mx-auto"
          style={{ background: "#061121", maxWidth: 300 }}
        >
          <p>
            Paris sur <span className="text-red-500">{ticket.leagueName}</span>
          </p>
          <p className="mt-4">
            Montant:{" "}
            <span className="text-green-500">{ticket.montant.toFixed(2)}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
