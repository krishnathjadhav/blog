import { useLocation } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  const { category, products } = location.state || {};

  return (
    <div>
      <h1>Category</h1>

      <div>
        <h1>{category}</h1>
        <table className="carttable">
          <thead>
            <tr>
              <th className="tableheader">Product</th>
              <th className="tableheader">Description</th>
              <th className="tableheader">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="tabledata">{product.name}</td>
                <td className="tabledata">{product.description}</td>
                <td className="tabledata">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
