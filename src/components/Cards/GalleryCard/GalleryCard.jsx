import "./GalleryCard.css";
import location from "../../../assets/icons/beach-location-1984196-1676926.png"

const GalleryCard = (props) => {

  return (
    <>
      <div className="box">
        <img src={props.img} alt=""/>
        <div className="caption">
          <h4>
            <img className="location-icon" src={location} alt=""/>
            {props.title}
          </h4>
        </div>
      </div>
    </>
  );
};

export default GalleryCard
