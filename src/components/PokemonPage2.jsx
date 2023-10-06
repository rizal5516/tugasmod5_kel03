import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";

function PokemonPage() {
	const { pokemonList } = useContext(PokemonContext);

	return (
		<div className="content2">
			<h1 className="judul">Pokemon Page 2</h1>
			<ul className="data">
				{pokemonList.slice(10, 20).map((pokemon, index) => (
					<li key={index}>{pokemon.name}</li>
				))}
			</ul>
		</div>
	);
}

export default PokemonPage;
