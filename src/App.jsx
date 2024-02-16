import { Outlet } from "react-router-dom"
import Footer from "./Pages/SharedPages/Footer"
import Header from "./Pages/SharedPages/Header"
import './App.css'

function App() {

  return (
    <>
      <Header id="home"/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
