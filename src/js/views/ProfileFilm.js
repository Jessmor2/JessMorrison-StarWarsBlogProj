import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const ProfileFilm = () => {
    const { store, actions } = useContext(Context);
    let params = useParams();
    let id = parseInt(params.id)
    let item = store.films[id]
    return (
		<>
            <div className="wrapper bg-dark" id="fullPage">
            <div className="profile-top container-fluid">
                    <img 
                        className="profile-image"
                        src={`https://starwars-visualguide.com/assets/img/films/${id + 1}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                        }}
                    />
                    <h1 className="profile-name text-warning">{item.title}</h1>
                    <div className="col-12 border border-warning text-warning bg-dark fs-3">
                        <p className="bio text-white">
                        {item.opening_crawl}
                        </p>
                    </div>
                </div>
                <div className="row" id="profileStats">
                    <div className="col-3 border border-warning text-warning fs-3">
                        <h3>Episode #</h3>
                        <div className="profile-data text-white">{item.episode_id}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning fs-3">
                        <h3>Director</h3>
                        <div className="profile-data text-white">{item.director}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning fs-3">
                        <h3>Producer</h3>
                        <div className="profile-data text-white">{item.producer}</div>
                    </div>
                    <div className="col-3 border border-warning text-warning fs-3">
                        <h3>Film Release Date</h3>
                        <div className="profile-data text-white">{item.release_date}</div>
                    </div>
                </div>
            
            </div>
        </>
    )
}
export default ProfileFilm;