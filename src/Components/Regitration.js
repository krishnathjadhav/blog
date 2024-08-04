import React from "react";
import { getAxiosInstance } from "../APICalls/AxiosUtil";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    mobile: "",
    email: "",
    role: "",
    password: "",
  };

  // const [formData, setFormData] = useState({
  //   name: "",
  //   mobile: "",
  //   email: "",
  //   role: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   const parsedValue = name === "mobile" ? parseInt(value) || "" : value;
  //   setFormData({
  //     ...formData,
  //     [name]: parsedValue,
  //   });
  // };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   getAxiosInstance()
  //     .post("register", formData)
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    mobile: Yup.number()
      .typeError("Mobile must be a number")
      .required("Mobile is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleOnSubmit = (formData, { setSubmitting }) => {
    console.log(formData);
    getAxiosInstance()
      .post("register", formData)
      .then((response) => {
        console.log("see registration response: ", response.data);
        navigate("/login");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      {/* <form onSubmit={handleOnSubmit}> */}
      <h1>Regiter</h1>

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
            type="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          /> */}
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </h4>
            <h4>
              mobile : {"\t"} {"\t"}
              {/* <input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          /> */}
              <Field type="number" id="mobile" name="mobile" />
              <ErrorMessage name="mobile" component="div" className="error" />
            </h4>
            <h4>
              Email : {"\t"} {"\t"}
              {/* <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          /> */}
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </h4>
            <h4>
              Role : {"\t"} {"\t"}
              {/* <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select> */}
              <Field as="select" id="role" name="role">
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </Field>
              <ErrorMessage name="role" component="div" className="error" />
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
              Already registered? <Link to="/login">login</Link>
            </h3>
            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
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

export default Register;
