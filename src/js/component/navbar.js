import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 m-5 mt-0">
			
			 <Link to="/home" className="navbar-brand" href="#">
      		<img src="https://goodlogo.com/images/logos/star_wars_logo_3476.gif" alt="Bootstrap" width="100" height="50" />
   			 </Link>
			<div className="ml-auto">
			<div className="btn-group me-3" role="group">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites 
				</button>
				<ul className="dropdown-menu">
				<li><a className="dropdown-item" href="#">Dropdown link</a></li>
				<li><a className="dropdown-item" href="#">Dropdown link</a></li>
				</ul>
			</div>
			</div>
		</nav>
	);
};
 