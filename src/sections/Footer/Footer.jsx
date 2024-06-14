import "./Footer.css";
import { FooterLogo, Social, ClubsCard } from "../../components/index";
import ClubsData from "../../Data/ClubsData";
import man from "../../assets/icons/man-doing-scuba-diving-5511147-4603306.png"

const Footer = () => {
  const clubsInfo = ClubsData.map((info) => {
    return (
      <ClubsCard
        id={info.id}
        key={info.id}
        city={info.city}
        country={info.country}
      />
    );
  });

  return (
    <>
    
    
      <div className="contact">
        <img className="man-diving" src={man} alt="" />
        <div className="info row row-cols-1 row-cols-md-2 g-4">

          <div className="icon">
            <FooterLogo />
          </div>

          <div className="information">{clubsInfo}</div>
          
          <div className="email">
            <h1>
              Contact me here<span>:</span>
            </h1>
            <p>
              benarouaomar<span>@</span>gmail<span>.</span>com
            </p>
          </div>

          <div className="Social-footer">
            <h1>Follow us and contact us<span>:</span></h1>
            <Social />
          </div>
        </div>
      </div>
      <div className="footer">
        &copy;2022 <span>Omar Ben Aroua</span>
      </div>
    </>
  );
};

export default Footer;
