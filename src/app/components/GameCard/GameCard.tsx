interface GameCardProps {
  title: string;
  price: number;
  img: string;
}

export default function GameCard({ title, price, img }: GameCardProps) {
  return (
    <div className="bg-zinc-800 p-4 rounded w-64 text-center shadow-neutral-950 shadow-md">
      <img
        className="w-full object-cover rounded"
        src={img}
        alt=""
      />
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-nowrap">{title}</h3>
        <p className="text-amber-500 font-bold">R$ {price}</p>
        <button
          className="bg-amber-500 p-2 rounded font-bold text-zinc-800 hover:bg-amber-700 transition-colors duration-300 ease-in-out"
        >
          Comprar
        </button>
      </div>
    </div>
  )
}
