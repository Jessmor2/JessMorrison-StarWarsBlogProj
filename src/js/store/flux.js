const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			peopleDetails: [],
			planetDetails: [],
			vehicleDetails: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchPeople: async () => {
				fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then(data => {
					console.log(data);
					setStore({ people: data.results });
				})
				
				.catch(error => console.log("Error msg: ", error))
			},
			fetchPeopleDetails: async () => {
				const store = getStore();
				for (let i = 0; i <= 10; i++);
				const response = await fetch("https://www.swapi.tech/api/people/" + 1 );
				let data = await response.json();
				setStore({peopleDetails: [...store.peopleDetails, data.result.properties]})
				console.log(store.peopleDetails)
			},
			fetchPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets")
				let data = await response.json()
				console.log(data)
				setStore({ planets: data.results });
			},
			fetchPlanetDetails: async () => {
				const store = getStore();
				const response = await fetch("https://www.swapi.tech/api/planets/" + 1);
				let data = await response.json();
				setStore({planetDetails: [...store.planetDetails, data.result.properties]})
				console.log(store.planetDetails)
			},
			fetchVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles")
				let data = await response.json()
				console.log(data)
				setStore({ vehicles: data.results });
			},
			fetchVehicleDetails: async () => {
				const store = getStore();
				for (let i = 0; i <= 10; i++);
				const response = await fetch("https://www.swapi.tech/api/vehicles/" + 4);
				let data = await response.json();
				setStore({vehicleDetails: [...store.vehicleDetails, data.result.properties]})
				console.log(store.vehicleDetails)
			},
			initialLoading: () => {
				getActions().fetchPeople()
				getActions().fetchPlanets();
				getActions().fetchVehicles();
				getActions().fetchPeopleDetails();
				getActions().fetchPlanetDetails();
				getActions().fetchVehicleDetails()
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
