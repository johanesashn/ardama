import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Service from "./components/Service"
import Splash from "./components/Splash"
import { useState, useEffect } from "react"

export default function App(){
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 2000);
  }, [])

  const service = ""
  return (
    <BrowserRouter>
      {load 
        ?
          <Splash/>
        :
        <>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="services/:service" service={service} element={<Service/>}></Route>
          </Routes>
          <Footer/>
        </>
      }
    </BrowserRouter>
  )
}