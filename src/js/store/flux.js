const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
			initialLoading: () => {
				getActions().fetchPeople()
				getActions().fetchPlanets();
				getActions().fetchVehicles();
			},
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
