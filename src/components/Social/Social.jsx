import "./Social.css";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <>
      <div className="social">
        <Link to="" target="_blank" className="location">
          <i className="fa-brands fa-youtube"></i>
        </Link>

        <Link
          to="https://www.facebook.com/omar.benarua.92/?locale=it_IT"
          target="_blank"
          className="location"
        >
          <i className="fa-brands fa-facebook"></i>
        </Link>

        <Link to="" target="_blank" className="location">
          <i className="fa-brands fa-instagram"></i>
        </Link>

        <Link to="" target="_blank" className="location">
          <i className="fa-brands fa-tiktok"></i>
        </Link>
      </div>
    </>
  );
};

export default Social;
