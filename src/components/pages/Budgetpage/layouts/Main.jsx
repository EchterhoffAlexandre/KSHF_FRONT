import React from 'react';

// Import de React Router DOM
import {Outlet, useLoaderData} from "react-router-dom";

// Import des functions helpers
import { fetchData } from "../helpers/helpers.js";

// Import des components
import Header from '../../../Header/Header.jsx'
import Footer from '../../../Footer/Footer.jsx'
import Nav from "../components/Nav.jsx";

// Import des librairies
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Loader
export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData()

    return (
        <div className="budgetpage__content">
            <div className="layout">
                <Header />
                <Nav userName={userName}/>
                <main>
                    <Outlet />
                    <ToastContainer />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Main;