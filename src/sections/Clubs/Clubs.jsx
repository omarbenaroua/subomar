import "./Clubs.css";
import { ClubsCard, Title } from "../../components/index";
import ClubsData from "../../Data/ClubsData"


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
        <div className="card-group">
          {clubsInfo}
        </div>
      </div>
    </>
  );
};

export default Clubs;
