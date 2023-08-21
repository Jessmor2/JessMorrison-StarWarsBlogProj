import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";

const Profile = () => {
    const { store, actions } = useContext(Context);
    return (
		<>
            <h1>Profile page</h1>
        </>
    )
}
export default Profile;