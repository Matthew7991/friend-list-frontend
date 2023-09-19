import React from "react"

function AddContact() {
  const addFriend = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.has("selfemployed") || formData.set("selfemployed", false)
    formData.has("workedwith") || formData.set("workedwith", false)

    fetch(import.meta.env.VITE_SERVER_URL + "/api/friends", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        console.log(res)
        event.target.reset()
      })
      .catch((err) => console.log(err))
  }

  return (
    <main>
      <section>
        <form onSubmit={addFriend}>
          <h1>Add Friend</h1>
          <div>
            <label htmlFor="firstname">First name:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
            />
          </div>
          <div>
            <label htmlFor="lastname">Last name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
            />
          </div>
          <div>
            <label htmlFor="birthday">Birthday:</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
            />
          </div>
          <div>
            <label htmlFor="job">Job:</label>
            <input
              type="text"
              id="job"
              name="job"
            />
          </div>
          <div>
            <label htmlFor="verdienst">Verdienst:</label>
            <input
              type="number"
              id="verdienst"
              name="verdienst"
            />
          </div>
          <div>
            <label htmlFor="selfemployed">Self employed:</label>
            <input
              type="checkbox"
              id="selfemployed"
              name="selfemployed"
              defaultValue={true}
            />
          </div>
          <div>
            <label htmlFor="workedwith">Worked with:</label>
            <input
              type="checkbox"
              id="workedwith"
              name="workedwith"
              defaultValue={true}
            />
          </div>
          <button
            className="p-2 rounded-full bg-slate-300"
            type="submit">
            Hinzufügen
          </button>
        </form>
      </section>
    </main>
  )
}

export default AddContact
