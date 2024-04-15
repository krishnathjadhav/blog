import logo from "./logo.svg";
import "./App.css";
import { getAxiosInstance } from "./APICalls/AxiosUtil";
import { useEffect, useState } from "react";

function App() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    getAxiosInstance()
      .get("getCarts")
      .then((response) => {
        setCarts(response.data);
      });
  }, []);
  return (
    <div>
      <table className="carttable">
        <tr>
          <th className="tableheader">ID</th>
          <th className="tableheader">User</th>
          <th className="tableheader">Product</th>
          <th className="tableheader">Amount</th>
        </tr>
        {carts.map((cart) => {
          return (
            <tr>
              <td className="tabledata">{cart.id}</td>
              <td className="tabledata">{cart.user}</td>
              <td className="tabledata">{cart.product}</td>
              <td className="tabledata">{cart.ammount}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
