import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/button/Button";

type BetType = {
  random: number;
  leagueName: string;
  color: string;
};

export default function Bet({ random, leagueName, color }: BetType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          content={random.toFixed(2)}
          additionalClass={`py-2 px-4 mt-4 ${color}`}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-950">
        <DialogHeader>
          <DialogTitle>Vous pariez sur {leagueName}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Le montant de votre mise
            </Label>
            <Input id="name" placeholder="100" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button content={"Parier"} additionalClass="py-2 px-2 bg-green-500" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
