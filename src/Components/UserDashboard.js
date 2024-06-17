import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function UserDashboard() {
  const location = useLocation();
  const id = location.state;
  console.log("id is", id);
  return (
    <div>
      <br />
      <br />
      <br />
      <button>
        <Link to="/main" state={{ id: id }}>
          All Products
        </Link>
      </button>
    </div>
  );
}
export default UserDashboard;
