import "./Services.css";
import { ServicesCard } from "../../components/index";

export const Services = () => {
  return (
    <>
      <div className="services">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <ServicesCard/>
        </div>
      </div>
    </>
  );
};

export default Services;
