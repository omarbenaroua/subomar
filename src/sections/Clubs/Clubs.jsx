import "./Clubs.css";
import { ClubsCard, Title } from "../../components/index";
import ClubsData from "../../Data/ClubsData"
import img from "../../assets/icons/rafting.png"


const Clubs = () => {
  const clubsInfo = ClubsData.map((info) =>{
    return <ClubsCard 
    id={info.id}
    key={info.id}
    img={info.img}
    country={info.country}
    city={info.city}
    />
  })

  return (
    <>
      <Title>Clubs position</Title>
      <div className="clubs">
      <img className="rafting" src={img} alt="" />
        <div className="card-group">
          {clubsInfo}
        </div>
      </div>
    </>
  );
};

export default Clubs;
