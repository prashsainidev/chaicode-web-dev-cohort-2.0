const shows = [
  {
    id: 1,
    title: 'The Office',
    genre: 'Comedy',
    year: 2005,
    rating: 9.0,
  },
  {
    id: 2,
    title: 'Friends',
    genre: 'Comedy',
    year: 1994,
    rating: 8.9,
  },
  {
    id: 3,
    title: 'Breaking Bad',
    genre: 'Drama',
    year: 2008,
    rating: 9.5,
  },
];

function App() {
  return (
    <>
      <h1>Hello from project 2</h1>
      <section className="grid">
        {shows.map((show) => )}
      </section>
    </>
  );
}

export default App;
