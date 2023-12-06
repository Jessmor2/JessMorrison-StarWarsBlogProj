import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import  Blog  from "./views/Blog.js";
import injectContext from "./store/appContext";
import ProfilePerson from "./views/ProfilePerson";
import ProfilePlanet from "./views/ProfilePlanet";
import ProfileVehicle from "./views/ProfileVehicle";
import ProfileFilm from "./views/ProfileFilm";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Blog />} />
						<Route path="/profilePerson/:id" element={<ProfilePerson />} />
						<Route path="/profilePlanet/:id" element={<ProfilePlanet />} />
						<Route path="/profileVehicle/:id" element={<ProfileVehicle />} />
						<Route path="/profilefilm/:id" element={<ProfileFilm />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
