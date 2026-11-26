import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
function SearchBuses() {
  const location = useLocation();
  const [userdata, setUserdata] = useState();
  function displaydata() {
  setUserdata(location.state)
  console.log(location.state)
}
  return (
    <>
   <button onClick={displaydata}>button</button>
   </>
  )
}
export default SearchBuses