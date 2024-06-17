import { useLocation } from "react-router-dom";
import { getAxiosInstance } from "../APICalls/AxiosUtil";
import { useEffect, useState } from "react";

function Cart(id) {
  const location = useLocation();
  // const { user_id } = location.state;
  const user_id = id.id;
  console.log("id is in int", user_id);

  const [products, setProducts] = useState();

  useEffect(() => {
    console.log("apicalled");
    getAxiosInstance()
      .get(`carts/${user_id}`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      });
  }, []);

  const handleRemove = (productId) => {
    getAxiosInstance()
      .post(`delete/${productId}`)
      .then((response) => {
        console.log(response.data);
        if (response.data === true) {
          alert("deleted successfully");
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div>
      <table className="carttable">
        <tr>
          <th className="tableheader">Product Name</th>
          <th className="tableheader">Items </th>
          <th className="tableheader">Price</th>
          <th className="tableheader">Remove</th>
        </tr>
        {products &&
          products.map((product) => {
            return (
              <tr>
                <th className="tabledata">{product.products}</th>
                <th className="tabledata">{product.noOfItems}</th>
                <th className="tabledata">{product.billing_amount}</th>
                <th className="tabledata">
                  <button onClick={() => handleRemove(product.id)}>
                    Remove
                  </button>
                </th>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
export default Cart;
