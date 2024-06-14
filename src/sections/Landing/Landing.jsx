import "./Landing.css";
import {PageTitle}from "../../components/index";
import Img from "../../assets/images/IMG_1449 - Copia.JPG";
import {Services} from "../index"

const Landing = () => {
  return (
    <>
      <div className="landing">
        <img src={Img} className="img-fluid" alt=""/>
        <PageTitle/>
        <Services/>
      </div>
    </>
  );
};

export default Landing;
