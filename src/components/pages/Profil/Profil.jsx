import { useSelector } from "react-redux";
import { Chip } from "@mui/material";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ProgressBar from "../../ProgressBar/ProgressBar";
import pince from "../../../assets/profil/pince-transformed.png";

import "./profil.css";

const Profil = () => {
  const {
    family,
    email,
    firstname,
    lastname,
    level,
    wallet,
    budget,
    friends,
    quests,
    items,
  } = useSelector((state) => state.user);
  // const expenses =
  //   operations.reduce(
  //     (accumulator, operations) => accumulator + operations.operation,
  //     0
  //   ) || 0;
  // console.log(expenses);
  // const progressRate = (wallet * expenses) / 100 || 100;
  const progressRate = 100

  return (
    <div className="profil-page-container">
      <Header />
      <div className="profil-container">
        <div className="profil-display-container">
          <div className="profil-header">
            <div className="profil-picture">
              <img src={pince} alt="pince" />
            </div>
            <p>Famille : {family?.name}</p>
          </div>

          <div className="profil profil-modifiable firstname">
            <p className="modifiable">Prénom : {firstname}</p>
            <form className="hidden">
              <input type="text" className="midify-profil-firstame" />
            </form>
          </div>

          <div className="profil profil-modifiable lastname">
            <p className="modifiable">Nom : {lastname}</p>
            <form className="hidden">
              <input type="text" className="modify-profil-firstname" />
            </form>
          </div>

          <div className="profil email">
            <p>email : {email}</p>
          </div>
          <div className="profil level">
            <p>Level : {level}</p>
          </div>

          <div className="profil friends-container">
            {friends &&
              friends.map((friend) => {
                <Chip key={friend.id} label={friend.firstname} variant="outlined" />;
              })}
          </div>
          <div className="wallet-container">
            <p>Porte-Feuille : {wallet}</p>
            <ProgressBar progress={progressRate} />
          </div>
         
            Collection :{" "}
            {items &&
              items.map((item) => (
                <Chip key={item.id} label={item.description} variant="outlined" />
              ))}{" "}
            <div className="quests">
              Quêtes :{ quests && quests.map( quest => <Chip label={quest.description} variant="outlined" />)} 

            </div> 
        </div>
        <div className="profil-modify-container"></div>
      </div>
    </div>
  );
};

export default Profil;
