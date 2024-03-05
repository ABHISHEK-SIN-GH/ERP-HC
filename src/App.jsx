import { Outlet } from "react-router-dom"
import Auth from "./pages/Auth"
import "./styles/mobile.css"
import "./styles/tablet.css"
import "./styles/smallLaptop.css"
import "./styles/laptop.css"
import "./styles/desktop.css"

function App() {

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
