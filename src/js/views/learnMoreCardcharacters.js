import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


function CardsLearnMore() {
    const { uid } = useParams();
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        // Buscar el personaje usando el uid
        const foundCharacter = store.characters.find(p => p.uid === uid);
        if (foundCharacter) {
            setCharacter(foundCharacter);
        } else {
            // Si no se encuentra, podrías hacer una llamada API aquí si es necesario
            actions.getCharacter(); // Puedes llamar a la función para obtener los personajes
        }
    }, [uid, store.characters, actions]);

    if (!character) {
        return  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
    }

    function imageError(e) {
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"    
    }
    return ( 
    <div>
            <div className="cardDetails mb-3" style={{maxWidth: "680px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} onError={imageError} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">{character.description}</p>
                    </div>
                </div>
                <hr className="my-2" style={{color: "red"}} />
                <ul className="list-group list-group-horizontal">
                   <ul> <h6>Name</h6>
                        <li>{character.name}</li>
                   </ul>
                   <ul> <h6>Birth year</h6>
                        <li>{character.birth_year}</li>
                   </ul>
                   <ul> <h6>Gender</h6>
                        <li>{character.gender}</li>
                   </ul>
                   <ul> <h6>Height</h6>
                        <li>{character.height}</li>
                   </ul>
                   <ul> <h6>Skin color</h6>
                        <li>{character.skin_color}</li>
                   </ul>
                   <ul> <h6>Eye color</h6>
                        <li>{character.eye_color}</li>
                   </ul>
                    
                </ul>
            </div>
        </div>
    </div>
    );
}

export default CardsLearnMore;
