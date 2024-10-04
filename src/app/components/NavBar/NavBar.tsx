import Input from "../Input/Input";

export default function NavBar() {
  return (
    <header className="flex justify-between items-center p-4 bg-zinc-900 text-white gap-4 shadow-neutral-950 shadow-md">
      <div className="flex items-center gap-4">
        <img src="http://via.placeholder.com/50" alt="logo" />
        <h1 className="text-xl">LojaDeJogos</h1>
      </div>
      <Input
        type="text"
        placeholder="Buscar jogos..."
      />
    </header>
  )
}
