import React from 'react'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Ux from './Components/Uxwork.jsx'
import Web from './Components/Web.jsx'
import Contact from './Components/Contact.jsx'
import Pineapple from './Components/Pineapple.jsx'
import LocomotiveScroll from 'locomotive-scroll';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar.jsx';
import ScrollToTop from "./ScrollToTop";


function App() {
	// Initialize locomotive scroll only on non-mobile devices (min-width: 768px)
	const isMobile = window.innerWidth < 768;
	const locomotiveScroll = !isMobile ? new LocomotiveScroll({
		lenisOptions: {
			smooth: true,
			multiplier: 1.1, // Increased to reduce resistance (feels closer to native scroll speed)
			lerp: 0.15,      // Increased to make it less smooth/snappier (less inertia)
		}
	}) : null;

	return (
		<>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Uxwork" element={<Ux />} />
				<Route path="/Web" element={<Web />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/Pineapple" element={<Pineapple />} />
				{/* <Route path="/User" element={<User/>}/>
			<Route path="/About" element={<About/>}/> */}
			</Routes>
		</>
	)
}

export default App