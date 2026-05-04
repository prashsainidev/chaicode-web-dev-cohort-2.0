import './App.css';

const shows = [
  {
    id: 1,
    title: 'Dark',
    genre: 'Sci-Fi',
    year: 2017,
    rating: 8.8,
  },
  {
    id: 2,
    title: 'Stranger Things',
    genre: 'Sci-Fi',
    year: 2016,
    rating: 8.7,
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
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>React Arrays Practice</h1>

      {/* ----- TAAREEKA 1: THE MANUAL WAY ----- */}
      <section
        style={{
          backgroundColor: '#f0fdf4',
          padding: '20px',
          marginBottom: '30px',
          border: '2px solid #22c55e',
          borderRadius: '10px',
        }}
      >
        <h2 style={{ color: '#166534' }}>Method 1: Manual Indexing (Beginner Way)</h2>
        <p style={{ color: '#15803d', marginBottom: '20px' }}>
          Is method mein hum array ke har item ko uske index (0, 1, 2) se bula rahe hain. Ye
          samajhne ke liye achha hai, par jab 100 movies hongi toh ye bohot lamba ho jayega.
        </p>

        <div className="grid">
          <div className="show-card">
            <h2>{shows[0].title}</h2>
            <p>Genre: {shows[0].genre}</p>
            <p>Year: {shows[0].year}</p>
            <p>Rating: {shows[0].rating}</p>
          </div>

          <div className="show-card">
            <h2>{shows[1].title}</h2>
            <p>Genre: {shows[1].genre}</p>
            <p>Year: {shows[1].year}</p>
            <p>Rating: {shows[1].rating}</p>
          </div>

          <div className="show-card">
            <h2>{shows[2].title}</h2>
            <p>Genre: {shows[2].genre}</p>
            <p>Year: {shows[2].year}</p>
            <p>Rating: {shows[2].rating}</p>
          </div>
        </div>
      </section>

      {/* ----- TAAREEKA 2: THE LOOP WAY (MAP) ----- */}
      <section
        style={{
          backgroundColor: '#eff6ff',
          padding: '20px',
          border: '2px solid #3b82f6',
          borderRadius: '10px',
        }}
      >
        <h2 style={{ color: '#1e40af' }}>Method 2: Using The .map() Loop (Pro Way)</h2>
        <p style={{ color: '#1d4ed8', marginBottom: '20px' }}>
          React loops use karta hai taaki code repeat na karna pade. <code>map()</code> function
          array ke har element par jata hai aur humare liye ek naya HTML block bana deta hai. <br />
        </p>

        <div className="grid">
          {shows.map(show => (
            <section className="show-card">
              <h2>{show.title}</h2>
              <p>Genre: {show.genre}</p>
              <p>Year: {show.year}</p>
              <p>Rating: {show.rating}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
