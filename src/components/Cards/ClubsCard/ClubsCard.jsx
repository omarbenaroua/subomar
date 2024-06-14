import "./ClubsCard.css";
import location from "../../../assets/icons/beach-location-1984196-1676926.png";
const ClubsCard = (info) => {
  return (
    <>
      <div className="clubs-card card">
        <img src={info.img} className="card-img-top" alt="" />
        <div className="card-body">
        <p className="clubs-text">{info.city}</p>
          <h5 className="clubs-title">
            <img className="location-icon" src={location} alt=" " />
            {info.country}
          </h5>
        </div>
      </div>
    </>
  );
};

export default ClubsCard;
