import "./Equipment.css";
import { Title, EquipmentCard } from "../../components/index";
import EquipmentData from "../../Data/EquipmentData";


const Equipment = () => {

  const infoEquipment = EquipmentData.map((info) => {
    return (
      <EquipmentCard
        key={info.id}
        id={info.id}
        img={info.img}
        title={info.title}
        text={info.text}
        price={info.price}
      />
    );
  });
  return (
    <>
      <Title>Equipment</Title>
      <div className="equipment" id="equipment">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {infoEquipment}
      </div>
      </div>
    </>
  );
};

export default Equipment;
