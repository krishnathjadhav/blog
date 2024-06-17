import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

const CartItems = () => {
  //never do this it is less efficiant
  // const store=useSelector((store)=>store);
  // const cartItems=store.cart.items

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">Cart</h1>

      <button
        style={{
          padding: "0.5rem",
          margin: "0.5rem",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 && (
        <h1>cart is empty . Add Items into the cart!!</h1>
      )}
      <table className="carttable">
        <thead>
          <tr>
            <th className="tableheader">Product</th>
            <th className="tableheader">Description</th>
            <th className="tableheader">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => {
            return (
              <tr>
                <td className="tabledata">{cartItem.name}</td>
                <td className="tabledata">{cartItem.description}</td>
                <td className="tabledata">{cartItem.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartItems;
