import { useDispatch, useSelector } from "react-redux";
import {Navigate, NavLink} from "react-router-dom";

import {
    changeEmailField,
    changePasswordField,
} from "../../actions/actions";
import Logo__3 from '../../assets/Logo__3.png'
import Footer from "../Footer/Footer.jsx";

import { submitLogin } from "../../actions/authAction";

import './connectionFormCustom.css'

const ConnectionFormCustom = () => {
    const { email, password, isLogged } = useSelector((state) => state.login);

    const dispatch = useDispatch();
    const handleChange = (event) => {
        switch (event.target.id) {
            case "email":
                return dispatch(changeEmailField(event.target.value));
            case "password":
                return dispatch(changePasswordField(event.target.value));
            default:
        }
    };

    const handleSubmit = (event) =>{
        event.preventDefault()
        return dispatch(submitLogin(email,password))
    };

    return (
        <>
            <div className="connectionForm__container">

                <img className="connectionFormLogo" src={Logo__3} alt="a colorfull game controller" />
                <p className="connection-brand">Keep Score & Have Fun</p>
                <div className="connectionForm__container-animation">
                    {isLogged && <Navigate to={'/app/homepage'} replace={true} />}

                        <div className="box">
                            <span className="borderline"></span>
                            <form method="POST" onSubmit={handleSubmit} className="connectionForm__forms">
                                <h2>Connectez vous</h2>
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        required="required"
                                        onChange={handleChange}
                                        value={email}
                                        id="email"
                                        aria-label="email"
                                    />
                                        <span>Identifiant</span>
                                        <i></i>
                                </div>

                                <div className="inputBox">
                                    <input
                                        type="password"
                                        required="required"
                                        onChange={handleChange}
                                        value={password}
                                        id="password"
                                        label="password"
                                    />
                                        <span>Mot de passe</span>
                                        <i></i>
                                </div>

                                <div className="links">
                                    <NavLink to="/forgottenpswd" className=".ahref">Mot de passe oublié</NavLink>
                                    <NavLink to="/signup" className=".ahref">S'inscrire</NavLink>
                                </div>
                                <input className="connectionForm__btn" type="submit" value="Se connecter"/>
                            </form>
                        </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ConnectionFormCustom;