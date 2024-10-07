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
									...data.result.properties, uid: data.result.uid, 
									description: data.result.description
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
		getPlanet: async ()=>{
			const store = getStore();
				const setError = (errorMessage) => setStore({ error: errorMessage });
				try {
					const responses = await Promise.all(
						[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(uid =>
							fetch(`https://www.swapi.tech/api/planets/${uid}`)
						)
					);
					const planets = await Promise.all(
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
					setStore({ planets: planets.filter(planet => planet !== null) });
				} catch (error) {
					console.error('Error fetching data:', error);
					setError('Error al conectar con la API.');
				}
			},
			getCars: async ()=>{
				const store = getStore();
				const setError = (errorMessage) => setStore({ error: errorMessage });
				try {
					const responses = await Promise.all(
						[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(uid =>
							fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
						)
					);
					const cars = await Promise.all(
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
					setStore({ cars: cars.filter(car => car !== null) });
				} catch (error) {
					console.error('Error fetching data:', error);
					setError('Error al conectar con la API.');
				}
			},
		}
	};
};

export default getState;
