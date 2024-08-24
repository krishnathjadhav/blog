import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>Something went wrong </h1>
      <h4>
        Go Back to <Link to="/login">Login</Link> page
      </h4>
    </div>
  );
};
export default Error;
