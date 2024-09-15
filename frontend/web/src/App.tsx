import logo from "../src/assets/in-orbit-logo.svg";
import illustration from "../src/assets/lets-start-illustration.svg";
import { Plus } from "lucide-react";
export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit logo" />
      <img src={illustration} alt="start illustration" />
      <p className="text-center text-zinc-300 leading-relaxed max-w-80">
        Você ainda não cadastrou nenhuma meta,
        <br /> que tal <u className="text-zinc-300">cadastrar uma</u> agora
        mesmo?
      </p>
      <button className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 text-sm font-medium tracking-tight hover:bg-violet-600">
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </div>
  );
}
