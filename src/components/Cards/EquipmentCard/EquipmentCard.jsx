import "./EquipmentCard.css";
import { useDispatch } from 'react-redux'
import { addToBasket } from "../../../redux/basketReducer";
import PrimaryButton from "../../Buttons/Buttons";

const EquipmentCard = (props) => {

  const dispatch = useDispatch()
  return (
    <>
    <div class="col">
      <div className="equipment-card card" key={props.id}>
        <img src={props.img} className="card-img-top " alt=""/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <div className="price-box">
          <p className="price">{props.price}€</p>
          <PrimaryButton text={"add to basket"} action={()=>dispatch(addToBasket({
            id: props.id,
            img: props.img,
            title: props.title,
            price: props.price,
          }))}/>
        </div>
        </div>
      </div></div>
    </>
  );
};

export default EquipmentCard;
