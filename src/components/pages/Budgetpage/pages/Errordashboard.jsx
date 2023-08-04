import { useNavigate, useRouteError } from "react-router-dom";
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Errordashboard = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="error">
            <h1>Un problème est survenu..</h1>
            <p>{error.message || error.statusText}</p>
            <div className="flex-md">
                <button className="btn btn--dark dashboard__btn-error" onClick={() => navigate(-1)}>
                    <ArrowUturnLeftIcon width={20} />
                    <span>Retour</span>
                </button>
                <button className="btn btn--dark dashboard__btn-error" onClick={() => navigate('/budget')}>
                    <HomeIcon width={20} />
                    <span>Accueil</span>
                </button>
            </div>
        </div>
    )
}

export default Errordashboard;
