import { Form } from "react-router-dom";

// Import de librairie(s)
import {UserPlusIcon} from "@heroicons/react/24/solid";

// Import d'un asset
import illustration from '../../../../assets/budget/Denver.png';

const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Prends le contrôle de ton <span className="accent">Trésor</span>
                </h1>
                <p>
                    Maîtriser ton trésor de guerre, c'est être libre! Commence maintenant !
                </p>
                <Form method="post" >
                    <input type="text"
                           name="userName"
                           required placeholder="Quel est ton prénom?"
                           aria-label="Your Name"
                           autoComplete="given-name"
                    />
                    <input type="hidden" name="_action" value="newUser"
                    />
                    <button type="submit" className="btn btn--dark">
                        <span>Créer un compte</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
            <img src={illustration} alt="Denver le dernier dinausore" width={650}/>
        </div>
    )
}
export default Intro;