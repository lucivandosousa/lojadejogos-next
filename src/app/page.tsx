import Footer from "./components/Footer/Footer";
import GameCard from "./components/GameCard/GameCard";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>

        {/* <!-- Jogos em destaque --> */}

        <section className="py-8 px-0 max-w-7xl mx-auto">
          <h2 className="text-center my-8 mx-0 text-4xl">Jogos em destaque</h2>
          <div className="flex flex-wrap justify-around gap-4">
            <GameCard title="Cyberpunk 2077" price="299,90" img="http://via.placeholder.com/150" />
            <GameCard title="The Witcher 3" price="99,90" img="http://via.placeholder.com/150" />
            <GameCard title="FIFA 23" price="199,90" img="http://via.placeholder.com/150" />
          </div>
        </section>

        {/* <!-- Jogos populares --> */}

        <section className="py-8 px-0 max-w-7xl mx-auto">
          <h2 className="text-center my-8 mx-0 text-4xl">Jogos populares</h2>
          <div className="flex flex-wrap justify-around gap-4">
            <GameCard title="Minecraft" price="299,90" img="http://via.placeholder.com/150" />
            <GameCard title="Red Dead Redemption 2" price="99,90" img="http://via.placeholder.com/150" />
            <GameCard title="Grand Theft Auto V" price="199,90" img="http://via.placeholder.com/150" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
