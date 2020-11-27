import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);

  const updateInterests = function(id) {
    setTours(prevState => {
      if (prevState.length === 1) {
        setEmpty(true);
      } 
      return prevState.filter(tour => tour.id !== id)
    })
  }

  const refresh = () => {
    setLoading(true);
    setEmpty(false);
  }

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(arr => {
        setTours(arr)
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [loading])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (empty) {
    return (
      <main>
        <header className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={refresh}>Refresh</button>
        </header>
      </main>
    )
  }

  return (
    <main>
      <header className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </header>
      <Tours tours={tours} update={updateInterests}/>
    </main>
  )
}

export default App
