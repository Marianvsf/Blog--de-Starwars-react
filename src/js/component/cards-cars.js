import React  from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(fas);


function CardsCars({cars}) {
  console.log(cars.data)
  function imageError(e) {
    e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"
  }
    return (
      <div className="overflow-x-auto" >

        <div className="d-flex">
        {cars.map(car => (
          <div key={car.uid} className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${car.uid}.jpg`} onError={imageError} className="card-img-top" alt="..." />
            <h5 className="card-title">{car.name}</h5>
            <p className="card-text">Model: {car.model}</p>
            <p className="card-text">Cost in credits: {car.cost_in_credits}</p>
            <div className="d-flex justify-content-between">
            <Link to={`/learnMoreCardCars/${car.uid}`} className="btn btn-primary">Learn more...</Link>
            <Link to={car.url} className="btn btn-outline-warning justify-content-end"><FontAwesomeIcon icon={faHeart} /></Link>
            </div>
          </div>
        </div>
        ))}
        
      </div>
        </div>
    );
  }
  export default CardsCars;
  