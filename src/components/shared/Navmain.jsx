import React from "react"
import { Link, useLocation } from "react-router-dom"

function Navmain() {
  const location = useLocation().pathname
  console.log(location)

  return (
    <header>
      <nav>
        {location === "/" ? (
          <Link
            className="block ml-auto underline w-fit"
            to={"/friends/add"}>
            Add Friend
          </Link>
        ) : (
          <Link
            className="block ml-auto underline w-fit"
            to={"/"}>
            Home
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Navmain
