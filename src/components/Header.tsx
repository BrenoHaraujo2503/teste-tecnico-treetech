import { Separator } from "./ui/separator";

export function Header() {
  return (
    <header className="max-w-md mx-auto mt-4 p-3 bg-white shadow-md rounded-md">
      <nav>
        <div />
        <div className="flex items-center justify-between gap-2 text-sm">
          <a href="/">Números romanos</a> <Separator orientation="vertical" className="h-8" />
          <a href="/senha">Gerador de senha</a> <Separator orientation="vertical" className="h-8"/>
          <a href="/elevador">Sistema de elevador</a>
        </div>
        <div />
      </nav>
      <div></div>
    </header>
  )
}