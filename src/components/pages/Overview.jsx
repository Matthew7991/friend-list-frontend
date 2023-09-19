import React, { useState, useEffect } from "react"
import FriendItem from "../shared/FriendItem"

function Overview() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER_URL + "/api/friends")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setFriends(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <main>
      <section>
        <h1 className="text-2xl font-bold text-red-600">
          People i can ask for money
        </h1>
        <div className="flex flex-wrap gap-4">
          {friends.map((friend, index) => (
            <FriendItem
              key={index}
              friend={friend}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Overview
