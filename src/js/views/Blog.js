import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "./card.js";

const Blog = () => {
    const { store, actions } = useContext(Context);
    const typeofCard = ["characters", "planets", "vehicles"]
    
    return (
		<>
            <div className="fullPage">
                <div className="container">
                    <div className="row text-warning text-center" ><h2 id="card-titles">Characters</h2></div>
                    <div className="row">
                        <div className="d-flex justify-content-between overflow-scroll mb-3">
                            {store.people.map((person, index) => 
                                <Card
                                    name={person.name}
                                    key={index}
                                    typeofCard={typeofCard[0]}
                                    mass={person.mass}
                                    height={person.height}
                                    eye_color={person.eye_color}
                                    hair_color={person.hair_color}
                                    srcImg={index + 1}
                                    personId={index}
                                />
                            )}
                        </div>
                    </div>
                    <div className="row text-warning text-center"><h2 id="card-titles">Planets</h2></div>
                    <div className="row">
                        <div className="d-flex justify-content-between overflow-scroll mb-3">   
                            {store.planets.map((planet, index) => 
                                <Card
                                    name={planet.name} 
                                    key={index}
                                    population={planet.population}
                                    terrain={planet.terrain}
                                    climate={planet.climate}
                                    srcImg={index + 1}
                                    typeofCard={typeofCard[1]}
                                    planetId={index}
                                />
                            )}
                        </div>
                    </div>
                    <div className="row text-warning text-center"><h2 id="card-titles">Vehicles</h2></div>
                    <div className="row">
                        <div className="d-flex justify-content-between overflow-scroll mb-3">
                            {store.vehicles.map((vehicle, index) => 
                                <Card 
                                    name={vehicle.name} 
                                    key={index}
                                    srcImg={index + 4}
                                    typeofCard={typeofCard[2]}
                                    cargo={vehicle.cargo_capacity}
                                    passengers={vehicle.passengers}
                                    model={vehicle.model}
                                    costCredits={vehicle.cost_in_credits}
                                    vehicleId={index}
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