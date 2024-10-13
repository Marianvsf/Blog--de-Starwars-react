import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(fas);


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 m-5 mt-0">
			 <Link to="/home" className="navbar-brand" href="#">
      		<img src="https://goodlogo.com/images/logos/star_wars_logo_3476.gif" alt="Bootstrap" width="100" height="50" />
   			 </Link>
				<ul className="btn btn-primary" role="button">
					<li className="nav-item dropdown">
			<a className="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                Favorites <span className="badge text-bg-secondary">{store.favorites.length}</span>
            </a>
				<ul className="dropdown-menu">
				{store.favorites.map(favorite => (
                        <li className="dropdown-item" key={`${favorite.uid}-${favorite.name}`}>
                            {favorite.name}
                                <button 
                                className="btn btn-link" 
                                onClick={() => actions.removeFavorite(favorite)}     >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </li>
               ))}
				</ul>
			
			</li>
			</ul>
		</nav>
	);
};
 