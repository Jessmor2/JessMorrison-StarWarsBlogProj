import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "./card.js";
import { useParams } from "react-router";

const ProfileVehicle = () => {
    const { store, actions } = useContext(Context);
    let params = useParams();
    let id = parseInt(params.id)
    let item = store.vehicles[id]
    return (
		<>
            <div className="wrapper bg-dark" id="fullPage">
            <div className="profile-top container-fluid">
                    <img 
                        className="profile-image"
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${id + 4}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}
                    />
                    <h1 className="profile-name text-warning">{item.name}</h1>
                    <p className="bio text-white">
                        {item.description}
                    </p>
                </div>
                <div className="row" id="profileStats">
                    <div className="col-3 border border-warning text-warning">
                        <h3>Model</h3>
                        <div className="profile-data text-white fs-3">{item.model}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Manufacturer</h3>
                        <div className="profile-data text-white fs-3">{item.manufacturer}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Class of Vehicle</h3>
                        <div className="profile-data text-white fs-3">{item.vehicle_class}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Number of Passengers</h3>
                        <div className="profile-data text-white fs-3">{item.passengers}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Crew</h3>
                        <div className="profile-data text-white fs-3">{item.crew}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Cost in Credits</h3>
                        <div className="profile-data text-white fs-3">{item.cost_in_credits}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Cargo Capacity</h3>
                        <div className="profile-data text-white fs-3">{item.cargo_capacity}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Max Atmospheric Speed</h3>
                        <div className="profile-data text-white fs-3">{item.max_atmosphering_speed}</div>
                    </div>
                    <div className="col-6 border border-warning text-warning bg-dark fs-3">
                        <h3>Films Appeared in</h3>
                        <div className="profile-data text-white">{item.films}</div>
                    </div>
                    <div className="col-6 border border-warning text-warning bg-dark fs-3">
                        <h3>Verified Pilots</h3>
                        <div className="profile-data text-white">{item.pilots}</div>
                    </div>
                </div>
            
            </div>
        </>
    )
}
export default ProfileVehicle;