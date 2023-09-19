import React from "react"
import { Link } from "react-router-dom"

function FriendItem({ friend, index }) {
  return (
    <article className="flex-1 min-w-fit">
      <h2>
        <Link to={`/friends/${index}`}>
          {friend.firstname} {friend.lastname}
        </Link>
      </h2>
      <p>
        Phone: <a href={`tel:${friend.phone}`}>{friend.phone}</a>
      </p>
      <p>Verdienst: {friend.verdienst} €</p>
      <p>Worked with: {friend.workedwith.toString()}</p>
    </article>
  )
}

export default FriendItem
