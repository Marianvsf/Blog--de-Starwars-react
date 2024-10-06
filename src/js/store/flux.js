const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [], 
			cars: [],
		},
		actions: {
			
			getCharacter: async () => {
				const store = getStore();
				const setError = (errorMessage) => setStore({ error: errorMessage });
				try {
					const responses = await Promise.all(
						[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(uid =>
							fetch(`https://www.swapi.tech/api/people/${uid}`)
						)
					);
					const characters = await Promise.all(
						responses.map(response => {
							if (response.ok) {
								return response.json().then(data => ({
									...data.result.properties,
									uid: data.result.uid
								}));
							}
							return null; // Manejo de errores
						})
					);
					setStore({ characters: characters.filter(character => character !== null) });
				} catch (error) {
					console.error('Error fetching data:', error);
					setError('Error al conectar con la API.');
				}
			},
		getPlanets: async (uid)=>{
			let resp = await fetch(`https://www.swapi.tech/api/planets/${uid}`, {
			  method: "GET",
			  headers: {
				"Content-Type":"aplication/json",
			  }
			});	
			if (resp.status === 404) {
				console.log("No se puede encontrar el planeta ")
			}
			if (resp.status === 200) {
				let data = await resp.json();
				console.log({ data: data.result });
				setStore({planets: data.result });
			}
			}
		}
	};
};

export default getState;
