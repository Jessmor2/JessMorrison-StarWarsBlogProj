import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "./card.js";
import { useParams } from "react-router";

const ProfilePlanet = () => {
    const { store, actions } = useContext(Context);
    let params = useParams();
    let id = parseInt(params.id)
    let item = store.planets[id];

    function getFilms() {
        let domains = item.films;
        console.log(domains);
        let filmIds = domains.map(string => string.slice(-2, -1));
        console.log(filmIds);
        for (let key in filmIds) {
            if (key in filmIds) {
                return <img 
                        className="items-image"
                        src={`https://starwars-visualguide.com/assets/img/films/${filmIds[key]}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}
                    />
                }
            }
        };

    function getResidents() {
        let peopleLinks = item.residents;
        console.log(peopleLinks);
        let peopleIds = peopleLinks.map(string => string.slice(-2, -1));
        console.log(peopleIds);
        for (let  i=0; i<peopleIds.length; i++){
            console.log(peopleIds[i])
            while (i < peopleIds.length){
                return <img 
                            className="items-image"
                            src={`https://starwars-visualguide.com/assets/img/characters/${peopleIds[i]}.jpg`}
                            onError={(e) => {
                                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                            }}
                        />
            // do (let key in peopleIds) {
            //     return <img 
            //             className="items-image"
            //             src={`https://starwars-visualguide.com/assets/img/characters/${peopleIds[key]}.jpg`}
            //             onError={(e) => {
            //                 e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
            //             }}
            //         />
            //     }
            }
        }
        };
        
    
    return (
		<>
            <div className="wrapper bg-dark" id="fullPage">
            <div className="profile-top container-fluid">
                    <img 
                        className="profile-image"
                        src={item.name == "Tatooine" ? 'https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg' : `https://starwars-visualguide.com/assets/img/planets/${id + 1}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}
                    />
                    <h1 className="profile-name text-warning">{item.name}</h1>
                </div>
                <div className="row" id="profileStats">
                    <div className="col-3 border border-warning text-warning">
                        <h3>Population</h3>
                        <div className="profile-data text-white fs-3">{item.population}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Climate</h3>
                        <div className="profile-data text-white fs-3">{item.climate}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Terrain</h3>
                        <div className="profile-data text-white fs-3">{item.terrain}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Gravity Rating</h3>
                        <div className="profile-data text-white fs-3">{item.gravity}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Rotational Period</h3>
                        <div className="profile-data text-white fs-3">{item.rotation_period}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Orbital Period</h3>
                        <div className="profile-data text-white fs-3">{item.orbital_period}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning">
                        <h3>Surface Water Rating</h3>
                        <div className="profile-data text-white fs-3">{item.surface_water}</div>
                    </div>
                    <div className="col-6 border border-warning text-warning fs-3">
                        <h3>Related Films </h3>
                        <div className="profile-data text-white">Films display here{getFilms()}</div>
                            
                    </div>
                    <div className="col-6 border border-warning text-warning bg-dark fs-3">
                        <h3>Known Residents</h3>
                        <div className="profile-data text-white">Residents display here{getResidents()}</div>
                    </div>
                </div>
            
            </div>
        </>
    )
}
export default ProfilePlanet;