import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Details() {
  const id = useParams().id
  const [friend, setFriend] = useState(null)

  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER_URL + `/api/friends/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setFriend(data)
      })
      .catch((err) => console.log(err))
  }, [])

  if (!friend) return
  return (
    <section>
      <h2>
        {friend.firstname}
        {friend.lastname}
      </h2>
      <p>
        Geburtstag {new Date(friend.birthday).toLocaleDateString(undefined)}
      </p>
      <p>
        Phone: <a href={`tel:${friend.phone}`}>{friend.phone}</a>
      </p>
      <p>Beruf: {friend.job}</p>
      <p>Selbstständig: {friend.selfemployed.toString()}</p>
      <p>Verdienst: {friend.verdienst} €</p>
      <p>Worked with: {friend.workedwith.toString()}</p>
    </section>
  )
}

export default Details
