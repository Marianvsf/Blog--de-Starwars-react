import React  from "react";


function CardsLearnMore({characters}) {
    function imageError(e) {
        e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"    
    }
    return ( 
    <div>
        {characters.map(character => (
            <div key={character.uid} className="card mb-3" style={{maxWidth: "680px"}}>
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
            ))}
    </div>
    );
}

export default CardsLearnMore;

/* "properties": {
"height": "172",
"mass": "77",
"hair_color": "blond",
"skin_color": "fair",
"eye_color": "blue",
"birth_year": "19BBY",
"gender": "male",
"created": "2024-10-06T18:57:58.527Z",
"edited": "2024-10-06T18:57:58.527Z",
"name": "Luke Skywalker",
"homeworld": "https://www.swapi.tech/api/planets/1",
"url": "https://www.swapi.tech/api/people/1"*/