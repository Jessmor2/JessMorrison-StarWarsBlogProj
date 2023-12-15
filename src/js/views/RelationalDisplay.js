import React, { useContext, useEffect } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const RelationalDisplay = (props) => {
    const {store, actions} = useContext(Context);

    if (props.typeofCard === "characters") {
        return (
            <>
                <div className="image-container">
                    <img 
                        className="card-img-top" alt="Card image cap" style={{ width: '6rem', height: '6rem', borderRadius: '50%', display: 'flex',  flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', margin: '8px' }}
                        src={`https://starwars-visualguide.com/assets/img/characters/${props.srcImg}.jpg`} 
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }}/>
                    <h5 className="card-title text-light" style={{ fontSize: '12px', display: 'flex',  flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', margin: '8px' }}>{props.name}</h5>
                </div>
            </>
        )
        }       
        else if ( props.typeofCard === "planets" ) {
            return (
                <>
                    <div className="image-container">
                        <img 
                            className="card-img-top" alt="Card image cap" style={{ width: '6rem', height: '6rem', borderRadius: '50%', display: 'flex',  flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', margin: '8px' }}
                            src={props.name == "Tatooine" ? 'https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg' : `https://starwars-visualguide.com/assets/img/planets/${props.srcImg}.jpg`}
                            onError={(e) => {
                                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}/>
                        <h5 className="card-title text-light" style={{ fontSize: '12px', display: 'flex',  flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', margin: '8px' }}>{props.name}</h5>
                    </div>
                </>
            )
        }

        else if ( props.typeofCard === "vehicles" ) {
            return (
                <>
                    <div className="image-container">
                        <img 
                            className="card-img-top" alt="Card image cap" style={{ width: '6rem', height: '6rem', borderRadius: '50%', display: 'flex',  flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', margin: '8px' }}
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${props.srcImg}.jpg`} 
                            onError={(e) => {
                                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}/>
                        <h5 className="card-title text-light" style={{ fontSize: '12px', display: 'flex',  flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', margin: '8px' }}>{props.name}</h5>
                    </div>
                </>
            )
        }
        
        else if ( props.typeofCard === "films" ) {
            return (
                <>
                <div className="image-container">
                    <img 
                        className="card-img-top" alt="Card image cap" style={{ width: '6rem', height: '6rem', borderRadius: '50%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', margin: '8px' }}
                        src={`https://starwars-visualguide.com/assets/img/films/${props.srcImg}.jpg`} 
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }}/>
                    <h5 className="card-title text-light" style={{ fontSize: '12px', display: 'flex',  flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', margin: '8px' }}>{props.title}</h5>
                </div>
                </>
            )
            }
        }

export default RelationalDisplay;