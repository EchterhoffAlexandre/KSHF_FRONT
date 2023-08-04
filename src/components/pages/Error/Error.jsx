import React from 'react';
import './error.css';
import Pince from "../../../assets/profil/pince-transformed.png"

const Error = () => {
    return (
        <div className="error__content">
            Erreur 404 ma Pince ! <img src={Pince} />
        </div>
    )
}
export default Error;