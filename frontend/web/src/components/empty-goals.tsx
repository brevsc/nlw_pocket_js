import { Plus } from "lucide-react";
import logo from "../../src/assets/in-orbit-logo.svg";
import illustration from "../../src/assets/lets-start-illustration.svg";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit logo" />
      <img src={illustration} alt="start illustration" />
      <p className="text-center text-zinc-300 leading-relaxed max-w-80">
        Você ainda não cadastrou nenhuma meta,
        <br /> que tal <u>cadastrar uma</u> agora mesmo?
      </p>
      <DialogTrigger asChild>
        <Button type="button">
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
