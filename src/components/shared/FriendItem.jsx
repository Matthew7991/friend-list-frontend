import React from "react"
import { Link } from "react-router-dom"

function FriendItem({ friend, index }) {
  return (
    <article className="flex-1 min-w-fit">
      <h2>
        <Link
          className="font-bold underline"
          to={`/friends/${index}`}>
          {friend.firstname} {friend.lastname}
        </Link>
      </h2>
      <p>
        Phone:{" "}
        <a
          className="font-semibold opacity-60"
          href={`tel:${friend.phone}`}>
          {friend.phone}
        </a>
      </p>
      <p>
        Verdienst: <span className="font-semibold">{friend.verdienst} €</span>
      </p>
      <p>
        Worked with:{" "}
        <span className="font-semibold">{friend.workedwith.toString()}</span>
      </p>
    </article>
  )
}

export default FriendItem
