import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { getAxiosInstance } from "../APICalls/AxiosUtil";
import { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../Utils/cartSlice";

function Main() {
  const [products, setProducts] = useState([]);
  // const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const { id, role, nameOfUser } = location.state || {};
  // console.log("id is ", id);
  // console.log("role is ", role);

  useEffect(() => {
    getAxiosInstance()
      .get("getproducts")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();

  const handleAddItem = (product) => {
    if (id === undefined) {
      alert("Please Login first");
    } else {
      //dispatch an action
      dispatch(addItems(product));
    }
  };

  const handleAdd = (product, id) => {
    console.log(product);
    console.log(id);
    if (id === undefined) {
      alert("Please Login first");
    } else {
      navigate("/addtocart", { state: { product: product, id: id } });
    }
  };

  const handleCategoryClick = (category) => {
    const filteredProducts = products.filter(
      (product) => product.description.toLowerCase() === category.toLowerCase()
    );
    console.log(filteredProducts);
    navigate("/category", { state: { category, products: filteredProducts } });
  };

  return (
    <div>
      {/* <table className="carttable">
        <tr>
          <th className="tableheader">ID</th>
          <th className="tableheader">User</th>
          <th className="tableheader">Product</th>
          <th className="tableheader">Amount</th>
          <th className="tableheader">Delete</th>
        </tr>
        {carts.map((cart) => {
          return (
            <tr>
              <td className="tabledata">{cart.id}</td>
              <td className="tabledata">{cart.user}</td>
              <td className="tabledata">{cart.product}</td>
              <td className="tabledata">{cart.ammount}</td>
              <td className="tabledata">
                <button onClick={() => handleDelete(cart)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table> */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f8f9fa",
          padding: "20px 30px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {nameOfUser && (
          <h3 style={{ margin: 0, color: "#ff6347" }}>
            Welcome <span>{nameOfUser.toUpperCase()}</span>
          </h3>
        )}

        <div style={{ display: "flex", alignItems: "center" }}>
          {role === "admin" ? (
            <Link
              to="/addproduct"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "bold",
                marginRight: "20px",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#007bff")}
              onMouseOut={(e) => (e.target.style.color = "#333")}
            >
              Add product
            </Link>
          ) : null}
          <Link
            to="/cartitems"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
              marginRight: "20px",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#007bff")}
            onMouseOut={(e) => (e.target.style.color = "#333")}
          >
            Cart ({cartItems.length} items)
          </Link>
          {id === undefined ? (
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "bold",
                marginRight: "50px",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#007bff")}
              onMouseOut={(e) => (e.target.style.color = "#333")}
            >
              Login
            </Link>
          ) : (
            <div
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "bold",
                marginRight: "50px",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#007bff")}
              onMouseOut={(e) => (e.target.style.color = "#333")}
            >
              Logout
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f1f1f1",
          padding: "10px 0",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <span
          onClick={() => handleCategoryClick("vegetable")}
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
            marginRight: "20px",
            cursor: "pointer",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#007bff")}
          onMouseOut={(e) => (e.target.style.color = "#333")}
        >
          Vegetable
        </span>

        <span
          onClick={() => handleCategoryClick("green")}
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
            marginRight: "20px",
            cursor: "pointer",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#007bff")}
          onMouseOut={(e) => (e.target.style.color = "#333")}
        >
          Green
        </span>

        <span
          onClick={() => handleCategoryClick("fruit")}
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
            marginRight: "20px",
            cursor: "pointer",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#007bff")}
          onMouseOut={(e) => (e.target.style.color = "#333")}
        >
          Fruit
        </span>

        <span
          onClick={() => handleCategoryClick("green veg")}
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
            marginRight: "20px",
            cursor: "pointer",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.color = "#007bff")}
          onMouseOut={(e) => (e.target.style.color = "#333")}
        >
          Green Veg
        </span>
      </div>
      <br />
      <br />
      <br />

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <TailSpin radius={"8px"} />
        </div>
      ) : (
        <div>
          <table className="carttable">
            <thead>
              <tr>
                <th className="tableheader">Product</th>
                <th className="tableheader">Description</th>
                <th className="tableheader">Price</th>
                <th className="tableheader">Add to Cart</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr>
                    <td className="tabledata">{product.name}</td>
                    <td className="tabledata">{product.description}</td>
                    <td className="tabledata">{product.price}</td>
                    <td className="tabledata">
                      <button
                        style={{ marginRight: "30px" }}
                        onClick={() => handleAdd(product, id)}
                      >
                        ADD
                      </button>

                      <button
                        // onClick={handleAddItem}
                        // onClick={()=>handleAddItem(items)}
                        // onClick={handleAddItem(items)}

                        onClick={() => handleAddItem(product)}
                      >
                        ADD to cart
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Main;
