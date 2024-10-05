"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import GameCard from "./components/GameCard/GameCard";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  interface Game {
    id: number;
    title: string;
    price: string;
    img: string;
  }

  const [games, setGames] = useState<{
    featuredGames: Game[],
    popularGames: Game[]
  }>({
    featuredGames: [],
    popularGames: []
  });

  async function fetchGames() {
    const response = await fetch("http://localhost:3000/api/games");
    const data = await response.json();
    setGames(data);
  }

  useEffect(() => {
    fetchGames()
  }, []);

  return (
    <>
      <NavBar />
      <main className="min-h-screen">

        {/* <!-- Jogos em destaque --> */}

        <section className="py-8 px-0 max-w-7xl mx-auto">
          <h2 className="text-center my-8 mx-0 text-4xl">Jogos em destaque</h2>
          <div className="flex flex-col items-center flex-wrap justify-around gap-4 lg:flex-row">
            {
              games.featuredGames.length === 0 ? (
                <p>Carregando...</p>
              ) : (
                games.featuredGames.map((game) => (
                  <GameCard
                    key={game.id}
                    title={game.title}
                    price={game.price}
                    img={game.img}
                  />
                ))
              )
            }
          </div>
        </section>

        {/* <!-- Jogos populares --> */}

        <section className="py-8 px-0 max-w-7xl mx-auto">
          <h2 className="text-center my-8 mx-0 text-4xl">Jogos populares</h2>
          <div className="flex flex-col items-center flex-wrap justify-around gap-4 lg:flex-row">
            {
              games.popularGames.length === 0 ? (
                <p>Carregando...</p>
              ) : (
                games.popularGames.map((game) => (
                  <GameCard
                    key={game.id}
                    title={game.title}
                    price={game.price}
                    img={game.img}
                  />
                ))
              )
            }
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
