"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/button/Button";
import { useState } from "react";

type BetType = {
  random: number;
  leagueName: string;
  color: string;
};

export default function Bet({ random, leagueName, color }: BetType) {
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleActive = () => {
    if (inputValue) {
      setIsActive(true);
    }
  };
  const montantPotentiel = parseInt(inputValue) * random;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          content={random.toFixed(2)}
          additionalClass={`py-2 px-4 mt-4 ${color}`}
        />
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
              {!montantPotentiel ? 0 : montantPotentiel}
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
            additionalClass="py-2 px-2 bg-green-500"
            onClick={handleActive}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
