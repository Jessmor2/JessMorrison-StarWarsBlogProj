import React, { useContext, useEffect } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
    const {store, actions} = useContext(Context);

    if (props.typeofCard === "characters") {
        return (
            <>
                <div className="card" id="starWCard" style={{ width: '16rem', display: 'inline-block'}}>
                    <img 
                        className="card-img-top" alt="Card image cap"
                        src={`https://starwars-visualguide.com/assets/img/characters/${props.srcImg}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}/>
                    <div className="card-body">
                                    <h5 className="card-title text-warning fs-3">{props.name}</h5>
                                    <p className="card-text mb-0">Mass: {props.mass}</p>
                                    <p className="card-text mb-0">Height: {props.height}</p>
                                    <p className="card-text mb-0">Eye Color: {props.eye_color}</p>
                                    <p className="card-text">Hair Color: {props.hair_color}</p>        
                    </div>
                    <div className="card-buttons">
                    <button className="linkButtons"><Link className="text-warning" to={'/profilePerson/' + props.personId}>Profile</Link></button>
                    <button className="favButtons" onClick={() => actions.addFavorite(props.name)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                        </svg>
                    </button>
                    </div>
                </div>
            </>
        )
    }        
        else if ( props.typeofCard === "planets" ) {
            return (
                <>
                    <div className="card" id="starWCard" style={{ width: '16rem', display: 'inline-block'}}>
                        <img 
                            className="card-img-top" alt="Card image cap"
                            src={props.name == "Tatooine" ? 'https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg' : `https://starwars-visualguide.com/assets/img/planets/${props.srcImg}.jpg`} 
                            onError={(e) => {
                                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                            }}/>
                        <div className="card-body">
                            <h5 className="card-title text-warning fs-3">{props.name}</h5>
                            <p className="card-text mb-0">Population: {props.population}</p>
                            <p className="card-text mb-0">Terrain: {props.terrain}</p>
                            <p className="card-text">Climate: {props.climate}</p>
                        </div>
                        <div className="card-buttons">
                            <button className="linkButtons"><Link className="text-warning" to={'/profilePlanet/' + props.planetId}>Profile</Link></button>
                            <button className="favButtons" onClick={() => actions.addFavorite(props.name)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </>
            )
        }

        else if ( props.typeofCard === "vehicles" ) {
            return (
                <>
                    <div className="card" id="starWCard" style={{ width: '16rem', display: 'inline-block'}}>
                        <img 
                            className="card-img-top" alt="Card image cap"
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${props.srcImg}.jpg`} 
                            onError={(e) => {
                                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                            }}/>
                        <div className="card-body">
                            <h5 className="card-title text-warning fs-3">{props.name}</h5>
                            <p className="card-text mb-0">Model: {props.model}</p>
                            <p className="card-text mb-0">Passengers: {props.passengers}</p>
                            <p className="card-text mb-0">Cargo Size: {props.cargo}</p>
                            <p className="card-text">Cost in Credits: {props.costCredits}</p>

                        </div>
                        <div className="card-buttons">
                        <button className="linkButtons"><Link className="text-warning" to={'/profileVehicle/' + props.vehicleId}>Profile</Link></button>
                            <button className="favButtons" onClick={() => actions.addFavorite(props.name)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </>
            )
        }

}

Card.propTypes = {
    name: propTypes.string
}

export default Card;