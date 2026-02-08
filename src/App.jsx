import React from 'react'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Ux from './Components/Uxwork.jsx'
import Web from './Components/Web.jsx'
import Contact from './Components/Contact.jsx'
import LocomotiveScroll from 'locomotive-scroll';
import {Routes,Route,Link } from "react-router-dom";
import Navbar from './Components/Navbar.jsx';


function App() {
  const locomotiveScroll = new LocomotiveScroll()
  return (
    <>
    <Navbar/>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/About" element={<About/>}/>
			<Route path="/Uxwork" element={<Ux/>}/>
			<Route path="/Web" element={<Web/>}/>
			<Route path="/Contact" element={<Contact/>}/>
			{/* <Route path="/User" element={<User/>}/>
			<Route path="/About" element={<About/>}/> */}
		</Routes>
    </>
  )
}

export default App