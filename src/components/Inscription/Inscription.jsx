import React, { useEffect } from 'react'; // Importer useEffect
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import Button from '@mui/material/Button';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import  './inscription.css'

import illustration from '../../assets/budget/Denver.png';

import { getInputValue, sendSignup } from '../../actions/signUpAction';
import { useNavigate } from 'react-router-dom';


function Inscription() {
    const navigate = useNavigate();
    const {firstname, lastname, signUpEmailField, signUpPasswordField, confirmPassword, ok} = useSelector(state => state.signup)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(getInputValue(event.target.id, event.target.value))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(sendSignup(firstname,lastname,signUpEmailField,signUpPasswordField,confirmPassword))
    };

    useEffect(() => {
        if (ok) {
            navigate('/signin', { replace: true });
        }
    }, [ok, navigate]);

    return (
        <>
            <Header />
            <h1 className="signupForm__container-h1">Inscription</h1>
            <div className="signupForm__container">
                <div className="signupForm__container-box">
                    <form className="signupForm__container-box-form" onSubmit={handleSubmit}>
                        {/*Champ du nom*/}
                        <div className="input-wrapper">
                            <span>Nom</span>
                            <input
                                type="text"
                                required="required"
                                onChange={handleChange}
                                value={lastname}
                                id="lastname"
                                aria-label="lastname"
                            />
                            <i></i>
                        </div>

                        {/*Champ du prénom*/}
                        <div className="input-wrapper">
                            <span>Prénom</span>
                            <input
                                type="text"
                                required="required"
                                onChange={handleChange}
                                value={firstname}
                                id="firstname"
                                aria-label="firstname"
                            />
                            <i></i>
                        </div>

                        {/*Champ de l'email*/}
                        <div className="input-wrapper">
                            <span>Email</span>
                            <input
                                type="email"
                                required="required"
                                onChange={handleChange}
                                value={signUpEmailField}
                                id="signUpEmailField"
                                aria-label="email"
                            />
                            <i></i>
                        </div>

                        {/*Champ du password*/}
                        <div className="input-wrapper">
                            <span>Mot de passe</span>
                            <input
                                type="password"
                                required="required"
                                onChange={handleChange}
                                value={signUpPasswordField}
                                id="signUpPasswordField"
                                aria-label="Mot de passe"
                            />
                            <i></i>
                        </div>

                        {/*Champ de la confirmation du mot de passe*/}
                        <div className="input-wrapper">
                            <span>Confirmer le mot de passe</span>
                            <input
                                type="password"
                                required="required"
                                onChange={handleChange}
                                value={confirmPassword}
                                id="confirmPassword"
                                aria-label="Confirmer le mot de passe"
                            />
                            <i></i>
                        </div>
                        <input className="signupForm__btn" type="submit" value="Inscription" />
                    </form>
                    <img src={illustration} alt="Denver le dernier dinausore" width={800} className="signupForm__img"/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Inscription;
