import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


function CardsLearnMorePlanet() {
    const { uid } = useParams();
    const { store, actions } = useContext(Context);
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        // Buscar el personaje usando el uid
        const foundPlanet = store.planets.find(planet => planet.uid === uid);
        if (foundPlanet) {
            setPlanet(foundPlanet);
        } else {
            // Si no se encuentra, podrías hacer una llamada API aquí si es necesario
            actions.getPlanet(); // Puedes llamar a la función para obtener los personajes
        }
    }, [uid, store.planets, actions]);

    if (!planet) {
        return  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
    }

    function imageError(e) {
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"    
    }
    return ( 
    <div>
            <div className="cardDetails mb-3" style={{maxWidth: "750px"}}>
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
                <hr className="my-2" style={{color: "red"}} />
                <ul className="list-group list-group-horizontal">
                   <ul> <h6>Name</h6>
                        <li>{planet.name}</li>
                   </ul>
                   <ul> <h6>Climate</h6>
                        <li>{planet.climate}</li>
                   </ul>
                   <ul> <h6>Population</h6>
                        <li>{planet.population}</li>
                   </ul>
                   <ul> <h6>Orbital Period</h6>
                        <li>{planet.orbital_period}</li>
                   </ul>
                   <ul> <h6>Rotation Period</h6>
                        <li>{planet.rotation_period}</li>
                   </ul>
                   <ul> <h6>Diameter</h6>
                        <li>{planet.diameter}</li>
                   </ul>
                    
                </ul>
            </div>
        </div>
    </div>
    );
}

export default CardsLearnMorePlanet;
