import React from "react"
import { Link, useLocation } from "react-router-dom"

function Navmain() {
  const location = useLocation().pathname
  console.log(location)

  return (
    <header>
      <nav>
        {location === "/" ? (
          <Link to={"/friends/add"}>Add Friend</Link>
        ) : (
          <Link to={"/"}>Home</Link>
        )}
      </nav>
    </header>
  )
}

export default Navmain
