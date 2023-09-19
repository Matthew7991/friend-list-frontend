import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Overview from "./components/pages/Overview"
import Details from "./components/pages/Details"
import AddContact from "./components/pages/AddContact"
import Navmain from "./components/shared/Navmain"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navmain />
        <Routes>
          <Route
            path="/"
            element={<Overview />}
          />
          <Route
            path="/friends/:id"
            element={<Details />}
          />
          <Route
            path="/friends/add"
            element={<AddContact />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
