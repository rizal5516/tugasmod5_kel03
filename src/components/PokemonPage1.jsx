import { useEffect, useState } from "react";
import axios from "axios";

function PokemonList() {
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
				setPokemonList(response.data.results);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1 className="judul">Pokemon Page 1</h1>
			<ul className="data">
				{pokemonList.slice(0, 10).map((pokemon, index) => (
					<li key={index}>{pokemon.name}</li>
				))}
			</ul>
		</div>
	);
}

export default PokemonList;
