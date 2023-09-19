import React from "react"
import Title from "../shared/Title"

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
        <Title>Person i will be able to get money from</Title>
        <form
          onSubmit={addFriend}
          className="flex flex-col gap-2 mx-auto w-fit">
          <div className="flex gap-4">
            <label
              className="min-w-[110px]"
              htmlFor="firstname">
              First name:
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
            />
          </div>
          <div className="flex gap-4">
            <label
              className="min-w-[110px]"
              htmlFor="lastname">
              Last name:
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
            />
          </div>
          <div className="flex gap-4">
            <label
              className="min-w-[110px]"
              htmlFor="birthday">
              Birthday:
            </label>
            <input
              className="flex-grow"
              type="date"
              id="birthday"
              name="birthday"
            />
          </div>
          <div className="flex gap-4">
            <label
              className="min-w-[110px]"
              htmlFor="phone">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
            />
          </div>
          <div className="flex gap-4">
            <label
              className="min-w-[110px]"
              htmlFor="job">
              Job:
            </label>
            <input
              type="text"
              id="job"
              name="job"
            />
          </div>
          <div className="flex gap-4">
            <label
              className="min-w-[110px]"
              htmlFor="verdienst">
              Verdienst:
            </label>
            <input
              type="number"
              id="verdienst"
              name="verdienst"
            />
          </div>
          <div className="flex gap-4">
            <label
              className="min-w-[110px]"
              htmlFor="selfemployed">
              Self employed:
            </label>
            <input
              type="checkbox"
              id="selfemployed"
              name="selfemployed"
              defaultValue={true}
            />
          </div>
          <div className="flex gap-4">
            <label
              className="min-w-[110px]"
              htmlFor="workedwith">
              Worked with:
            </label>
            <input
              type="checkbox"
              id="workedwith"
              name="workedwith"
              defaultValue={true}
            />
          </div>
          <button
            className="px-4 py-1 text-white rounded-full bg-blue-950"
            type="submit">
            Hinzufügen
          </button>
        </form>
      </section>
    </main>
  )
}

export default AddContact
