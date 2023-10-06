// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PokemonProvider } from "./components/PokemonContext";
import PokemonPage1 from "./components/PokemonPage1";
import PokemonPage2 from "./components/PokemonPage2";
import Button from "./elements/Button";

function App() {
	return (
		<>
			<div className="container">
				<PokemonProvider>
					<div className="content">
						<Router>
							<Routes>
								<Route path="/" element={<PokemonPage1 />} />
								<Route path="/page2" element={<PokemonPage2 />} />
							</Routes>
							<Button />
						</Router>
					</div>
				</PokemonProvider>
			</div>
		</>
	);
}

export default App;
