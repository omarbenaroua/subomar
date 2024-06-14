import "./Basket.css";
import img from "../../assets/icons/basket-5020897-4183756.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAll, deleteToBasket } from "../../redux/basketReducer";
import {PrimaryButton , SecondaryButton} from "../index" 

const Basket = () => {

  const [basketList, setBasketList] = useState(false);
  const showBasketList = () => {
    basketList ? setBasketList(false) : setBasketList(true);
  };
  const basketStyle = {
    backgroundColor: basketList ? "var(--color-primary)" : "transparent",
    transform: basketList ? "translateX(55px)": "translateX(0px)",
    width: basketList ? "110px" : "60px",
  }
  
  const equipments = useSelector(state => state.basket.equipment);

  const dispatch = useDispatch();

  const total = equipments.map((info) => info.price).reduce((partialSum, a) => partialSum + a ,0)
  console.log(total)
  return (
    <>
      <div className="basket" onClick={showBasketList} style={basketStyle}>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{equipments.length}</span>
        <img src={img} alt="" />
      </div>
      {basketList ? (
        <ol className="basket-card list-group-numbered">
          <div className="basket-title">
          <p>You have {equipments.length} products</p>
          </div>
          {equipments.map((info) => (
            <div className="row g-0" key={info.id}>
              <div className="col-md-4">
                <img
                  src={info.img}
                  className="img-fluid rounded-start"
                  alt=" "
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">{info.title}</h6>
                  <p className="card-text">{info.price}€</p>
                </div>
                <PrimaryButton text={"Delete"}
                  action={() =>
                    dispatch(
                      deleteToBasket({
                        id: info.id,
                        img: info.img,
                        title: info.title,
                        price: info.price,
                      })
                    )
                  }
                >
                  delete
                </PrimaryButton>
              </div>
            </div>
          ))}
          <div className="info-price">
          <PrimaryButton text={"Delete All"} action={() => dispatch(deleteAll({})) }></PrimaryButton>
          <SecondaryButton text={"Ather"}></SecondaryButton>
          <p className="total">Total price:{total}€</p>
          </div>
        </ol>
      ) : (
        " "
      )}
    </>
  );
};

export default Basket;
