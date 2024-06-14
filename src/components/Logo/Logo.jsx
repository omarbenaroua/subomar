import "./Logo.css";
import LogoB from "../../assets/icons/logo.png";
import LogoW from "../../assets/icons/logo.png";
import LogoF from "../../assets/icons/logo_footer.png";

const BlackLogo = () => {
  return (
    <>
      <img className="logo" src={LogoB} alt=""></img>
    </>
  );
};

const WhiteLogo = () => {
  return (
    <>
      <img className="logo" src={LogoW} alt=""></img>
    </>
  );
};

const FooterLogo = () => {
  return (
    <>
      <img className="logo-footer" src={LogoF} alt=""></img>
    </>
  );
};

export default BlackLogo;
export {WhiteLogo, FooterLogo};
