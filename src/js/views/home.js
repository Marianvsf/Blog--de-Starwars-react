import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Cards from "../component/cards";
import CardsPlanets from "../component/cards-planets";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacter();
		actions.getPlanet();
	}, []);
	

	return (
	<div>
		<div className="container">
			<h1>Characters</h1>
			<Cards characters={store.characters}  />
		</div>
		<div className="container">
			<h1>Planets</h1>
			<CardsPlanets planets={store.planets}  />
		</div>	
	</div>
)
};
