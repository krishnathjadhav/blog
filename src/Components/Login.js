import React, { useContext } from "react";
import { getAxiosInstance } from "../APICalls/AxiosUtil";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthContext from "../Contexts/AuthContext";

const Login = () => {
  const { authToken, setAuthToken } = useContext(AuthContext);

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    getAxiosInstance()
      .post("login", { name, password })
      .then((response) => {
        if (response.status === 200) {
          const id = 1;
          const role = response.data.role;
          const authToken = response.data.token;
          setAuthToken(authToken);
          if (role === "ROLE_admin") {
            navigate("/admindashboard", { state: id });
          }
          if (role === "ROLE_user") {
            navigate("main", { state: { id, role } });
          }
        } else {
          alert("Invalid user");
        }
        /**console.log("login response: ", response);
        const role = response.data[0];
        const id = response.data[1];
        console.log(id);
        if (response.data[0] === "admin") {
          console.log("hit");
          // navigate("/admindashboard", { state: id });
          navigate("main", { state: { id, role, nameOfUser: name } });
        } else if (response.data[0] === "user") {
          // navigate("/userdashboard", { state: id });
          navigate("main", { state: { id, role } });
        } **/
      })
      .catch(() => {
        alert("Invalid user");
      })
      .finally(() => {
        //setSubmitting(false);
      });
  };
  return (
    <div>
      Name:{" "}
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      Password:{" "}
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

/**const Login = () => {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // useEffect(() => {
  //   handleOnSubmit();
  // }, []);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleOnSubmit = (formData, { setSubmitting }) => {
    // if (!formData.username || !formData.password) {
    //   alert("all fields are required");
    // }
    // console.log(formData);

    const nameOfUser = formData.name;
    // getAxiosInstance()
    //   .get("getLogin")
    //   .then((response) => {
    //     console.log("data :", response.data);
    //   });

    getAxiosInstance()
      .post("/rest/auth/login", formData)
      .then((response) => {
        const role = response.data[0];
        const id = response.data[1];
        console.log(id);
        if (response.data[0] === "admin") {
          console.log("hit");
          // navigate("/admindashboard", { state: id });
          navigate("main", { state: { id, role, nameOfUser } });
        } else if (response.data[0] === "user") {
          // navigate("/userdashboard", { state: id });
          navigate("main", { state: { id, role } });
        } else {
          alert("Invalid user");
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <div>
   <form onSubmit={handleOnSubmit}> 
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h4>
              Name : {"\t"} {"\t"}
              {/* <input
            type="username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          /> 
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </h4>
            <h4>
              Password : {"\t"} {"\t"}
              {/* <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          /> 
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </h4>
            <h3>
              Haven't register yet ? <Link to="/register">register</Link>
            </h3>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
            {/* </form> 
          </Form>
        )}
      </Formik>
      <style jsx="true">{`
        .error {
          color: red;
        }
      `}</style>
    </div>
  );
};**/

export default Login;
