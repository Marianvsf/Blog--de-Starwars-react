import React  from "react";


function CardsLearnMorePlanet({planets }) {
    function imageError(e) {
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"    
    }
    return ( 
    <div>
        {planets.map(planet => (
            <div key={planet.uid} className="card mb-3" style={{maxWidth: "800px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} onError={imageError} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">{planet.description}</p>
                    </div>
                </div>
                <ul className="list-group list-group-horizontal">
                   <ul> Name
                        <li>{planet.name}</li>
                   </ul>
                   <ul> Climate
                        <li>{planet.climate}</li>
                   </ul>
                   <ul> Population
                        <li>{planet.population}</li>
                   </ul>
                   <ul> Orbital Period
                        <li>{planet.orbital_period}</li>
                   </ul>
                   <ul> Rotation Period
                        <li>{planet.rotation_period}</li>
                   </ul>
                   <ul> Diameter
                        <li>{planet.diameter}</li>
                   </ul>
                    
                </ul>
            </div>
        </div>
            ))}
    </div>
    );
}

export default CardsLearnMorePlanet;
