import React from "react"

function Title({ children }) {
  return (
    <h1 className="mb-4 text-2xl font-bold text-center text-red-600">
      {children}
    </h1>
  )
}

export default Title
