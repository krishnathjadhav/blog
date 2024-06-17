import { useLocation } from "react-router-dom";
import { useState } from "react";
import { getAxiosInstance } from "../APICalls/AxiosUtil";
import Cart from "./Cart";

function AddToCart() {
  const location = useLocation();
  const { product, id } = location.state;
  const userId = id.id;

  const [numItems, setNumItems] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [showCart, setShowCart] = useState(false);

  const calPrice = (e) => {
    const { value } = e.target;
    setNumItems(value);
    setTotalPrice(value * product.price);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const items = parseInt(numItems, 10);
    const cartData = {
      user_id: userId,
      products: product.name,
      noOfItems: items,
      billing_amount: totalPrice,
    };
    console.log("data is", cartData);

    getAxiosInstance()
      .post("addtocart", cartData)
      .then((response) => {
        console.log(response.data);
        if (response.data === true) {
          alert("item added to cart");
        } else {
          alert("There is some issue");
        }
      });
  };

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleHideCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <h5>
        Product Name : {"\t"} {"\t"}
        <input value={product.name} readOnly />
      </h5>
      <h5>
        Description : {"\t"} {"\t"}
        <input value={product.description} readOnly />
      </h5>
      <h5>
        Number of Items : {"\t"} {"\t"}
        <input
          type="number"
          id="price"
          name="price"
          value={numItems}
          onChange={calPrice}
        />
      </h5>
      <h5>
        Price : {"\t"} {"\t"}
        <input value={totalPrice} readOnly />
      </h5>
      <br />
      <button onClick={handleAdd}>Add to Cart </button>
      &nbsp; &nbsp; &nbsp;
      {showCart ? (
        <button onClick={handleHideCart}>Hide Cart </button>
      ) : (
        <button onClick={handleShowCart}>Cart</button>
      )}
      <br />
      <br />
      <br />
      <br />
      {showCart && <Cart id={id} />}
    </div>
  );
}

export default AddToCart;
