import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
/*   const getTours = async () => {
    const response = await fetch(url)
    const tours = await response.json()
    return tours;
  } */

  const [tours, setTours] = useState([]);

  const updateInterests = function(id) {
    setTours(prevState => {
      return prevState.filter(tour => tour.id !== id)
    })
  }

  useEffect(() => {
    //getTours(); id, image, info, name price
    fetch(url)
      .then(response => response.json())
      .then(arr => setTours(arr))
      .catch(err => console.error(err));
  }, [])

  return (
    <main>
      <h2 className="title">Our Tours</h2>
      <Tours tours={tours} update={updateInterests}/>
    </main>
  )
}

export default App
