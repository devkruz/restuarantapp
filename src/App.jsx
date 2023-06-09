import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreatContainer, Header, MainContainer } from "./components";

function App() {
	return (
		<AnimatePresence>
			<div className="w-screan h-screen bg-primary flex">
				<Header></Header>
				<main className="mt-24 p-8 w-full">
					<Routes>
						<Route path="/" element={<MainContainer />}></Route>
						<Route path="/createItem" element={<CreatContainer />}></Route>
					</Routes>
				</main>
			</div>
		</AnimatePresence>
	);
}

export default App;
