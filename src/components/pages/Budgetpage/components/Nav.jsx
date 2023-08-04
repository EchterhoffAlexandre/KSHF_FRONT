// Import de react router dom
import {Form, NavLink} from "react-router-dom";

// Librairies
import { TrashIcon } from '@heroicons/react/24/solid'

// Import d'image(s)
import logomark from "../../../../assets/budget/logomark.svg";

import { logoutAction } from "../actions/logout.js"


const Nav = ({ userName }) => {
    return (
        <nav>
            <NavLink
            to="/budget"
            aria-label="Accueil"
            className="dashboard__nav">
            </NavLink>
            {
                userName && (
                    <Form
                        method="post"
                        action="logout"
                        className="dashboard__logout"
                        onSubmit={async (event) => {
                            if (!confirm("Supprimer le compte et toutes les données ?")) {
                                event.preventDefault();
                            } else {
                                event.preventDefault();
                                await logoutAction();
                                window.location.href = "/budget";
                            }
                        }}
                    >
                        <button type="submit" className="btn btn--warning">
                            <span>Supprimer ses données</span>
                            <TrashIcon width={20}/>
                        </button>
                    </Form>
                )
            }
        </nav>
    )
}

export default Nav;