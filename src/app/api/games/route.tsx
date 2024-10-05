const featuredGameslist = [
  {
    id: 1,
    title: 'The Witcher 3',
    img: 'https://via.placeholder.com/150',
    price: 99.99
  },
  {
    id: 2,
    title: 'The Legend of Zelda',
    img: 'https://via.placeholder.com/150',
    price: 199.99
  },
  {
    id: 3,
    title: 'Grand Theft Auto V',
    img: 'https://via.placeholder.com/150',
    price: 299.99
  }
]

const popularGameslist = [
  {
    id: 1,
    title: 'Total War',
    img: 'https://via.placeholder.com/150',
    price: 199.99
  },
  {
    id: 2,
    title: 'Kings Call',
    img: 'https://via.placeholder.com/150',
    price: 299.99
  },
  {
    id: 3,
    title: 'Graze of Zordan',
    img: 'https://via.placeholder.com/150',
    price: 99.99
  }
]

export async function GET() {
  return Response.json({
    featuredGames: featuredGameslist,
    popularGames: popularGameslist
  })
}