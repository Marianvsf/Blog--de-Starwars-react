import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import Cards from "../component/cards";
import {Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacter();
	}, []);
	

	return (
	
		<div className="container">
			<h1>Characters</h1>
			<Cards characters={store.characters}  />
		</div>
	)
};
