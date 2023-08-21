import React, { useContext, useEffect } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
    const {store, actions} = useContext(Context);

    if (props.typeofCard === "characters") {
        return (
            <>
                <div className="card" id="starWCard" style={{ width: '18rem', display: 'inline-block'}}>
                    <img 
                        className="card-img-top" alt="Card image cap"
                        src={`https://starwars-visualguide.com/assets/img/characters/${props.srcImg}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}/>
                    <div className="card-body">
                        <h5 className="card-title text-black">{props.name}</h5>
                        <p className="card-text mb-0">Mass: {store.peopleDetails[0].mass}</p>
                        <p className="card-text mb-0">Eye Color: {store.peopleDetails[0].eye_color}</p>
                        <p className="card-text">Hair Color: {store.peopleDetails[0].hair_color}</p>
                    </div>
                    <div className="card-buttons">
                        <Link to={'profile/'} className="btn btn-primary">Learn More!</Link>
                    </div>
                </div>
            </>
        )
    }        
        else if ( props.typeofCard === "planets" ) {
            return (
                <>
                    <div className="card" id="starWCard" style={{ width: '18rem', display: 'inline-block'}}>
                        <img 
                            className="card-img-top" alt="Card image cap"
                            src={props.name == "Tatooine" ? 'https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg' : `https://starwars-visualguide.com/assets/img/planets/${props.srcImg}.jpg`} 
                            onError={(e) => {
                                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                            }}/>
                        <div className="card-body">
                            <h5 className="card-title text-black">{props.name}</h5>
                            <p className="card-text mb-0">Population: {store.planetDetails[0].population}</p>
                            <p className="card-text mb-0">Terrain: {store.planetDetails[0].terrain}</p>
                            <p className="card-text">Climate: {store.planetDetails[0].climate}</p>
                        </div>
                        <div className="card-buttons">
                            <Link to={'profile/' + props.index} className="btn btn-primary">Learn More!</Link>
                        </div>
                    </div>
                </>
            )
        }

        else if ( props.typeofCard === "vehicles" ) {
            return (
                <>
                    <div className="card" id="starWCard" style={{ width: '18rem', display: 'inline-block'}}>
                        <img 
                            className="card-img-top" alt="Card image cap"
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${props.srcImg}.jpg`} 
                            onError={(e) => {
                                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                            }}/>
                        <div className="card-body">
                            <h5 className="card-title text-black">{props.name}</h5>
                            <p className="card-text mb-0">Model: {store.vehicleDetails[0].model}</p>
                            <p className="card-text mb-0">Passengers: {store.vehicleDetails[0].passengers}</p>
                            <p className="card-text">Cargo Size: {store.vehicleDetails[0].cargo_capacity}</p>
                        </div>
                        <div className="card-buttons">
                            <Link to={'profile/' + props.index} className="btn btn-primary">Learn More!</Link>
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