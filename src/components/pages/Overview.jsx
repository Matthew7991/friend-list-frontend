import React, { useState, useEffect } from "react"
import FriendItem from "../shared/FriendItem"
import Title from "../shared/Title"

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
        <Title>People i can ask for money</Title>
        {/* <div className="flex flex-wrap gap-4"> */}
        <div className="grid grid-cols-4 gap-4">
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
