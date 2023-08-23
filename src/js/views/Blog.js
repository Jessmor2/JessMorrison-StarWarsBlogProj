import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";

const Blog = () => {
    const { store, actions } = useContext(Context);
    const typeofCard = ["characters", "planets", "vehicles"]
    
    return (
		<>
            <div className="fullPage">
                <div className="container">
                    <div className="row text-white"><h2>People</h2></div>
                    <div className="row">
                        <div className="d-flex justify-content-between overflow-scroll">
                            {store.peopleDetails.map((person, index) => 
                                <Card
                                    name={person.name}
                                    key={index}
                                    typeofCard={typeofCard[0]}
                                    mass={person.mass}
                                    height={person.height}
                                    eye_color={person.eye_color}
                                    hair_color={person.hair_color}
                                    srcImg={index + 1}
                                />
                            )}
                        </div>
                    </div>
                    <div className="row text-white"><h2>Planets</h2></div>
                    <div className="row">
                        <div className="d-flex justify-content-between overflow-scroll">   
                            {store.planetDetails.map((planet, index) => 
                                <Card
                                    name={planet.name} 
                                    key={index}
                                    population={planet.population}
                                    terrain={planet.terrain}
                                    climate={planet.climate}
                                    srcImg={index + 1}
                                    typeofCard={typeofCard[1]}
                                />
                            )}
                        </div>
                    </div>
                    <div className="row text-white"><h2>Vehicles</h2></div>
                    <div className="row">
                        <div className="d-flex justify-content-between overflow-scroll">
                            {store.vehicles.map(vehicle => 
                                <Card 
                                    name={vehicle.name} 
                                    key={vehicle.uid}
                                    srcImg={vehicle.uid}
                                    typeofCard={typeofCard[2]}
                                    cargo={vehicle.cargo_capacity}
                                    passengers={vehicle.passengers}
                                    model={vehicle.model}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
		</>
);
	}
    
export default Blog;