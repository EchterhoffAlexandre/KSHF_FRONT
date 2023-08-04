// Import react
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"

// Import de style
import './header.css'

// Import actions
import { toggleHeader } from "../../actions/headerAction";
import { deleteUserInfo } from "../../actions/userAction";

// Imports d'icônes
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import EmailIcon from '@mui/icons-material/Email';
import SavingsIcon from '@mui/icons-material/Savings';
import LogoutIcon from '@mui/icons-material/Logout';
import { fetchBudgets, fetchDailyData, fetchExpenses, fetchMonthlyData, fetchWeeklyData, fetchYearlyData } from "../../actions/fetchDataActions";

const Header = () => {
    const { isHidden } = useSelector(state => state.utils)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(toggleHeader())
    }

    const handleFetch = () => {
        dispatch(fetchBudgets())
        dispatch(fetchExpenses())
    }

    const handleHomePageFetch = () => {
        dispatch(fetchDailyData());
        dispatch(fetchWeeklyData());
        dispatch(fetchMonthlyData());
        dispatch(fetchYearlyData());
    }

    const handleLogout = () => {
        dispatch(deleteUserInfo())
        dispatch(logout())
    }

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/app/homepage" className="nav__logo logo__img"></a>

                <div className={!isHidden ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <NavLink onClick={handleHomePageFetch} to="/app/homepage" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><HomeIcon /></div>Accueil</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink onClick={handleFetch} to="/budget" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><SavingsIcon /></div>Budget</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="/app/quests" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><NewspaperIcon /></div>Quêtes</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="/app/shop" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><MonetizationOnIcon /></div>Magasin</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="/app/guilde" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><GroupWorkIcon /></div>Guilde</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="/app/friends" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><Diversity2Icon /></div>Amis</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="/app/profil/1" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><PersonOutlineIcon /></div>Profil</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink to="/app/contact" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><EmailIcon /></div>Contact</NavLink>
                        </li>

                        <li className="nav__item">
                            <NavLink onClick={handleLogout} to="/" className={({ isActive }) => isActive ? "nav__link nav__link-active" : "nav__link"}><div className="nav__icon"><LogoutIcon /></div>Logout</NavLink>
                        </li>
                    </ul>

                    <i className="nav__close" onClick={handleClick}>
                        <CloseIcon />
                    </i>
                </div>

                <div className="nav__toggle" onClick={handleClick}>
                    <MenuRoundedIcon />
                </div>
            </nav>
        </header>
    )
}

export default Header