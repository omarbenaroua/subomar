import "./ServicesCard.css";
import ImgCer from "../../../assets/icons/certificate.ico";
import ImgCor from "../../../assets/icons/scholarship.ico";
import ImgAff from "../../../assets/icons/diving.ico";
import ImgGui from "../../../assets/icons/sub.ico";
import { Link } from "react-scroll";
//import {useRef } from "react";

const ServicesCard = () => {
  return (
    <>
      <div className="services-card col-sm-6">
        <Link to="gallery" spy={true} smooth={true} offset={-300} duration={300}>
          <div className="card">
            <div className="card-body text-center">
              <img className="icon" src={ImgCer} alt=" " />
              <h5 className="card-title text-uppercase">Certificazione</h5>
              <p className="card-text text-start">
                Dopo aver completato con successo un corso di immersione, i
                clienti ricevono una certificazione che attesta le loro
                competenze.
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="services-card col-sm-6">
      <Link to="guide" spy={true} smooth={true} offset={-300} duration={300}>
        <div className="card">
          <div className="card-body text-center">
            <img className="icon" src={ImgCor} alt=" " />
            <h5 className="card-title text-uppercase">Corsi di immersione</h5>
            <p className="card-text text-start">
              Le nostra scuola offre una varietà di corsi di immersione, dai
              livelli principianti a quelli avanzati. Questi corsi insegnano
              agli studenti le competenze necessarie per immergersi in modo
              sicuro e divertente.
            </p>
          </div>
        </div>
        </Link>
      </div>
      <div className="services-card col-sm-6">
      <Link to="equipment" spy={true} smooth={true} offset={-300} duration={300}>
        <div className="card">
          <div className="card-body text-center">
            <img className="icon" src={ImgAff} alt=" " />
            <h5 className="card-title text-uppercase">
              Affitto di attrezzatura
            </h5>
            <p className="card-text text-start">
              Forniamo attrezzatura da immersione in affitto per coloro che non
              ne possiedono una propria. Questo include maschere, pinne, mute,
              respiratori e altri accessori necessari per l'immersione.
            </p>
          </div>
        </div>
        </Link>
      </div>
      <div className="services-card col-sm-6">
      <Link to="guide" spy={true} smooth={true} offset={-300} duration={300}>
        <div className="card">
          <div className="card-body text-center">
            <img className="icon" src={ImgGui} alt=" " />
            <h5 className="card-title text-uppercase">Guida alle immersioni</h5>
            <p className="card-text text-start">
              Gli istruttori possono accompagnare i clienti in immersioni in
              luoghi interessanti e sicuri, spesso fornendo informazioni sulla
              vita marina e sulle caratteristiche del sito di immersione.
            </p>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default ServicesCard;
/* export default React.memo(ServicesCard) */
