import "./Product.css";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Product = ({ name, img }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <img src="/remedioImg.svg" />
      <p>{name}</p>
      <div className="teste">
        <div className="quantity">
          <button circle="true" onClick={() => setQuantity(quantity + 1)}>
            <AiOutlinePlus />
          </button>
          <p>{quantity}</p>
          <button circle="true" onClick={() => setQuantity(quantity - 1)}>
            <AiOutlineMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
