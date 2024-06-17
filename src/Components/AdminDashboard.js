import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function AdminDashboard() {
  const location = useLocation();
  const id = location.state;
  console.log("id is", id);
  return (
    <div>
      <br />
      <br />
      <br />
      <button style={{ marginRight: "40px" }}>
        <Link to="/main" state={{ id: id }}>
          All Products
        </Link>
      </button>

      <button>
        <Link to="/addproduct">Add product</Link>
      </button>
    </div>
  );
}

export default AdminDashboard;
