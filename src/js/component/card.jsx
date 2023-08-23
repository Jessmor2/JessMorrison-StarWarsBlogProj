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
                                    <h5 className="card-title text-black">{props.name}</h5>
                                    <p className="card-text mb-0">Mass: {props.mass}</p>
                                    <p className="card-text mb-0">Height: {props.height}</p>
                                    <p className="card-text mb-0">Eye Color: {props.eye_color}</p>
                                    <p className="card-text">Hair Color: {props.hair_color}</p>        
                    </div>
                    <div className="card-buttons">
                        <Link to={'profile/' + props.index} className="btn btn-primary">Profile</Link>
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
                            <h5 className="card-title text-black">{props.name}</h5>
                            <p className="card-text mb-0">Population: {props.population}</p>
                            <p className="card-text mb-0">Terrain: {props.terrain}</p>
                            <p className="card-text">Climate: {props.climate}</p>
                        </div>
                        <div className="card-buttons">
                            <Link to={'profile/' + props.index} className="btn btn-primary">Profile</Link>
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
                            <h5 className="card-title text-black">{props.name}</h5>
                            <p className="card-text mb-0">Model: {props.model}</p>
                            <p className="card-text mb-0">Passengers: {props.passengers}</p>
                            <p className="card-text">Cargo Size: {props.cargo}</p>
                        </div>
                        <div className="card-buttons">
                            <Link to={'profile/' + props.index} className="btn btn-primary">Profile</Link>
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