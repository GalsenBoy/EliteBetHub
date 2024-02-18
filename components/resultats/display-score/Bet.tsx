// Bet.tsx
import { useEffect, useState } from "react";
// import { Input, Label, Button } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
// import useStore from '@/store';
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useStore } from "@/lib/historique-store";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

type BetType = {
  random: number;
  leagueName: string;
  color: string;
};

export default function Bet({ random, leagueName, color }: BetType) {
  const [inputValue, setInputValue] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);
  const [tickets, setTickets] = useState<ITicket[]>([]);

  const montantPotentiel = inputValue * random;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };
  const handleActive = () => {
    if (inputValue && !isNaN(inputValue) && inputValue > 0) {
      setIsActive(true);
    }
    const newTicket: ITicket = {
      leagueName: leagueName,
      montant: montantPotentiel,
    };
    const updatedTickets = [...tickets, newTicket];
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };
  useEffect(() => {
    const storedTickets = localStorage.getItem("tickets");
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets));
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`py-2 px-4 mt-4 ${color}`}>
          {random.toFixed(2)}
        </Button>
      </DialogTrigger>
      {montantPotentiel > 0 && (
        <p>
          Paris sur {leagueName}, gain potentiel :{" "}
          <span className="text-green-500">{montantPotentiel.toFixed(2)}</span>
        </p>
      )}
      <DialogContent className="sm:max-w-[425px] bg-slate-950">
        <DialogHeader>
          <DialogTitle>Vous pariez sur {leagueName}</DialogTitle>
          <DialogDescription className="mt-5 fontsemibold">
            Votre gain potentiel est de :{" "}
            <span className="text-green-500">
              {!montantPotentiel ? 0 : montantPotentiel.toFixed(2)}
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Votre mise
            </Label>
            <Input
              onChange={handleInputChange}
              id="name"
              placeholder="100"
              className="col-span-3 text-slate-900"
              disabled={isActive ? true : undefined}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            content={"Parier"}
            className="py-2 px-2 bg-green-500"
            onClick={handleActive}
          >
            Parier
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
