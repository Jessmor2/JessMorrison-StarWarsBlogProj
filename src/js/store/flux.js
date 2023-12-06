const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			films: [],
			favorites: []
		},
		actions: {
			addFavorite: (name) => {
				let storeFavorites = getStore().favorites
				storeFavorites.push(name)
				setStore({favorites: storeFavorites})
			},
			removeFavorite: (index) => {
				let storeFavorites = getStore().favorites
				let filteredFavorites = storeFavorites.filter((item, idx) => idx !== index)
				setStore({favorites: filteredFavorites})
			},
			fetchPeople: async () => {
				fetch("https://swapi.dev/api/people")
				.then(response => response.json())
				.then(data => {
					console.log(data);
					setStore({ people: data.results });
				})
				
				.catch(error => console.log("Error msg: ", error))
			},
			fetchPlanets: async () => {
				const response = await fetch("https://swapi.dev/api/planets")
				let data = await response.json()
				console.log(data)
				setStore({ planets: data.results });
			},
			fetchVehicles: async () => {
				const response = await fetch("https://swapi.dev/api/vehicles");
				let data = await response.json();
				console.log(data);
				setStore({vehicles:data.results})
			},
			fetchFilms: async () => {
				const response = await fetch("https://swapi.dev/api/films");
				let data = await response.json();
				console.log(data);
				setStore({films:data.results})
			},
			initialLoading: () => {
				getActions().fetchPeople()
				getActions().fetchPlanets();
				getActions().fetchVehicles();
				getActions().fetchFilms();
			}
		}
	};
};

export default getState;
