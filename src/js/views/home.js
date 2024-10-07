import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Cards from "../component/cards-characters";
import CardsPlanets from "../component/cards-planets";
import CardsCars from "../component/cards-cars";
import CardsLearnMore from "./learnMoreCardcharacters";
import CardsLearnMorePlanet from "./learnMoreCardplanets";
import CardsLearnMoreCar from "./learnMoreCardCars";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanet();
		actions.getCars();
		actions.getCharacter();
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
		<div className="container">
			<h1>Vehicles</h1>
			<CardsCars cars={store.cars}  />
		</div>	
		<CardsLearnMore characters={store.characters} />
		<CardsLearnMorePlanet planets={store.planets} />
		<CardsLearnMoreCar cars={store.cars} />
	</div>
)
};
