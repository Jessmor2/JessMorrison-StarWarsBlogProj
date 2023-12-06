import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const ProfilePerson = () => {
    const { store, actions } = useContext(Context);
    let params = useParams();
    let id = parseInt(params.id)
    let item = store.people[id]
    return (
		<>
            <div className="wrapper bg-dark" id="fullPage">
            <div className="profile-top container-fluid">
                    <img 
                        className="profile-image"
                        src={`https://starwars-visualguide.com/assets/img/characters/${id + 1}.jpg`}
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
                    <div className="col-3 border border-warning text-warning fs-3">
                        <h3>Birth Year</h3>
                        <div className="profile-data text-white">{item.birth_year}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning fs-3">
                        <h3>Gender</h3>
                        <div className="profile-data text-white">{item.gender}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning fs-3">
                        <h3>Height</h3>
                        <div className="profile-data text-white">{item.height}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning fs-3">
                        <h3>Mass</h3>
                        <div className="profile-data text-white">{item.mass}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning fs-3">
                        <h3>Eye Color</h3>
                        <div className="profile-data text-white">{item.eye_color}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning fs-3">
                        <h3>Hair Color</h3>
                        <div className="profile-data text-white">{item.hair_color}</div>
                    </div>
                    <div className="col-6 border border-warning text-warning bg-dark fs-3">
                        <h3>Films Character Appeared In</h3>
                        <div className="profile-data text-white">{item.films}</div>
                    </div>
                    <div className="col-6 border border-warning text-warning bg-dark fs-3">
                        <h3>Vehicles Character has Driven</h3>
                        <div className="profile-data text-white">{item.vehicles}</div>
                    </div>
                </div>
            
            </div>
        </>
    )
}
export default ProfilePerson;