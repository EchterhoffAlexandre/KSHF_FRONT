import React from 'react'
import Footer from "../../Footer/Footer.jsx";
import illustration from "../../../assets/5persons.png"
import './aboutus.css'

const Aboutus = () => {
    return (
        <>
            <div className="aboutus__container">
                <div className="aboutus__container-text">Page a propos de nous, en construction</div>
                <img src={illustration} alt="Denver le dernier dinausore" width={650}/>
            </div>
            <Footer />
        </>
    )
}

export default Aboutus