import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import RelationalDisplay from "./RelationalDisplay.js";

const typeofCard = ["characters", "planets", "vehicles", "films"];

const ProfilePlanet = () => {
    const { store, actions } = useContext(Context);
    let params = useParams();
    let id = parseInt(params.id)
    let item = store.planets[id];

    function getFilms() {
        console.log("item films",item.films)
        let Links = item.films;
        var i;
        for (i=0; i<Links.length; i++) {
            console.log(Links[i])
            actions.fetchFilmsLinks(Links[i])
            console.log(store.filmsLinks)
        }
        };

    function getResidents() {
        console.log("item people", item.residents)
        let peopleLinks = item.residents;
        console.log("people links", peopleLinks)
        actions.fetchPeopleLinks(peopleLinks);
        console.log("store people", store.peopleLinks)
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
                    <div className="col-6 border border-warning text-warning bg-dark fs-3">
                        <h3>Related Films </h3>
                        <div className="profile-data text-white" style={{ display: 'flex', flexWrap: 'wrap' }}>{getFilms()}
                        {store.filmsLinks.map((film, index) => 
                                <RelationalDisplay
                                    title={film.title} 
                                    typeofCard={typeofCard[3]}
                                    key={index}
                                    srcImg={index + 1}
                                />
                            )}
                        </div>
                            
                    </div>
                    <div className="col-6 border border-warning text-warning bg-dark fs-3">
                        <h3>Known Residents</h3>
                        <div className="profile-data text-white" style={{ display: 'flex', flexWrap: 'wrap' }}>{getResidents()}
                        {store.peopleLinks.map((person, index) => 
                                <RelationalDisplay
                                    name={person.name} 
                                    typeofCard={typeofCard[0]}
                                    key={index}
                                    srcImg={index + 1}
                                />
                            )}
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    )
}
export default ProfilePlanet;