import "./Header.css";
import { Link } from "react-router-dom";
import { BlackLogo, NavItem, Search, Basket } from "../../components/index";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <BlackLogo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem>
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/equipment" className="nav-link">
                  Equipment
                </Link>
              </NavItem>
            </ul>
            <Search />
          </div>
        </div>
        <Basket/>
      </nav>
    </>
  );
};

export default Header;
