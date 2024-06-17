import React from "react";
import { getAxiosInstance } from "../APICalls/AxiosUtil";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
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

    const nameOfUser = formData.username;
    // getAxiosInstance()
    //   .get("getLogin")
    //   .then((response) => {
    //     console.log("data :", response.data);
    //   });

    getAxiosInstance()
      .post("Login", formData)
      .then((response) => {
        const role = response.data[0];
        const id = response.data[1];
        console.log(id);
        if (response.data[0] === "admin") {
          console.log("hit");
          // navigate("/admindashboard", { state: id });
          navigate("/", { state: { id, role, nameOfUser } });
        } else if (response.data[0] === "user") {
          // navigate("/userdashboard", { state: id });
          navigate("/", { state: { id, role } });
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
      {/* <form onSubmit={handleOnSubmit}> */}
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h4>
              Username : {"\t"} {"\t"}
              {/* <input
            type="username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          /> */}
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </h4>
            <h4>
              Password : {"\t"} {"\t"}
              {/* <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          /> */}
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </h4>
            <h3>
              Haven't register yet ? <Link to="/register">register</Link>
            </h3>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
            {/* </form> */}
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
};

export default Login;
