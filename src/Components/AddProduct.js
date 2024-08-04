import { useContext, useState } from "react";
import { getAxiosInstance } from "../APICalls/AxiosUtil";
import AuthContext from "../Contexts/AuthContext";
function AddProduct() {
  const { authToken } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    category_id: "",
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "price" || name === "category_id"
        ? parseFloat(value) || ""
        : value;
    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Submit ", formData);
    getAxiosInstance(authToken)
      .post("addproduct", formData)
      .then((response) => {
        console.log(response.data);
        if (response.data === true) {
          alert("item added ");
        } else {
          alert("There is some issue");
        }
      });
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <h5>Category ID</h5>
        <input
          type="number"
          id="category_id"
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
        />
        <h5>Product Name</h5>
        <input
          type="name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <h5>Description</h5>
        <input
          type="description"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <h5>Price</h5>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <br /> <br /> <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddProduct;
