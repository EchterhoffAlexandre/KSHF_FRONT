// Importation de react
import React from 'react';

// Importation de Outlet qui permet entre autre d'incruster une interface sur les composants enfants
import { Outlet } from "react-router-dom";

// Importation des composants
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

// Import du css
import '../styles/layout.css'

const Layout = () => {
    return (
        <div>
            <div className="">
                <Header />
                <main className="layout__content-main">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout;