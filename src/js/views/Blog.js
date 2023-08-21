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
                            {store.people.map(person => 
                                <Card
                                    name={person.name}
                                    key={person.uid}
                                    srcImg={person.uid}
                                    typeofCard={typeofCard[0]}
                                    // eyecolor={store.peopleDetails.eye_color}
                                />
                            )}
                        </div>
                    </div>
                    <div className="row text-white"><h2>Planets</h2></div>
                    <div className="row">
                        <div className="d-flex justify-content-between overflow-scroll">   
                            {store.planets.map(planet => 
                                <Card
                                    name={planet.name} 
                                    key={planet.uid}
                                    srcImg={planet.uid}
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