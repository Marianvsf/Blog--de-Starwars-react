import React  from "react";


function CardsLearnMoreCar({cars }) {
    function imageError(e) {
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"    
    }
    return ( 
    <div>
        {cars.map(car => (
            <div key={car.uid} className="card mb-3" style={{maxWidth: "810px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${car.uid}.jpg`} onError={imageError} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{car.name}</h5>
                        <p className="card-text">{car.description}</p>
                    </div>
                </div>
                <ul className="list-group list-group-horizontal">
                   <ul> <h6>Name</h6>
                        <li>{car.name}</li>
                   </ul>
                   <ul> <h6>Cost in credits</h6>
                        <li>{car.cost_in_credits}</li>
                   </ul>
                   <ul> <h6>Max atmosphering speed</h6>
                        <li>{car.max_atmosphering_speed}</li>
                   </ul>
                   <ul> <h6>Manufacturer</h6>
                        <li>{car.manufacturer}</li>
                   </ul>
                   <ul> <h6>Consumables</h6>
                        <li>{car.consumables}</li>
                   </ul>
                   <ul> <h6>Passengers</h6>
                        <li>{car.passengers}</li>
                   </ul>
                    
                </ul>
            </div>
        </div>
            ))}
    </div>
    );
}

export default CardsLearnMoreCar;
