import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null);
  console.log(import.meta.env.VITE_APP_NAME);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URL}/all-chai`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
      console.log(data);
  }, [])

  return (
    <>
    <h1>Welcome to RAW react</h1>
    <h2>Data from backend:</h2>
    <p>Data from API: {data ? JSON.stringify(data) : 'Loading...'}</p>
    </>
  )
}

export default App
