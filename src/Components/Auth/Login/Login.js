import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../BaseApi";
import { Resturant_id_Globally } from "../../../Resutrant_Id";
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import Imglogo from "../../Images/NepalDos.jpeg";
import { InputMask } from "@react-input/mask";
import SignupForm from "../SignUp/SignUp";
import { RxCross2 } from "react-icons/rx";
const validationSchema = Yup.object().shape({
  // email_or_phone: Yup.string()
  //   .matches(
  //     /^\(\d{3}\) \d{3}-\d{4}$/,
  //     "Invalid phone number. Use the format (123) 456-7890"
  //   )
  //   .required("Phone number is required"),
  password: Yup.string()
    .min(3, "password must be at least 3 characters")
    .required("password is required"),
});
// function useAuthToken() {
//   const getToken = () => localStorage.getItem("token");
//   const setToken = (token) => localStorage.setItem("token", token);
//   const removeToken = () => localStorage.removeItem("token");

//   return { getToken, setToken, removeToken };
// }
const LogInForm = ({ closeLogin, OpenRegistration }) => {
  const [isSignUpOpen, setisSignUpOpen] = useState(false);
  const navigate = useNavigate();
  // const [showLogin, setShowLogIn] = useState(true);
  // const { getToken, setToken } = useAuthToken(); // Use the custom hook

  const [showpassword, setShowpassword] = useState(false);
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    values.restaurant_id = Resturant_id_Globally;

    console.log(values, "Values which i'm Sending");

    // agar direct api use karian gay to axios.post likhian gay agar api ko alag define karian gay to to wahan jo name likha ha wohii name likhian gay....
    await api
      .post("/auth/login", values)
      .then((response) => {
        console.log("Here is Token in Login", response.data.token);
        // setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("f_name", response.data.user.f_name);
        localStorage.setItem("Point", response.data.user.point);
        localStorage.setItem("Phone", response.data.user.phone);
        localStorage.setItem("Email", response.data.user.email);
        alert("Log in Successfully");
        navigate("/Products");
        closeLogin();
      })
      .catch((error) => {
        console.log(error);
        alert("Please Sign-up First");
      });
    resetForm();
    setSubmitting(false);
  };
  const togglepasswordVisibility = () => {
    setShowpassword(!showpassword);
  };
  return (
    <>
      <Container
        fluid
        className="nnn  d-flex align-items-center justify-content-center"
      >
        <Card className="login-card">
          <Card.Img variant="top" src={Imglogo} className="card-image-card" />
          <h3 className="text-center fw-bold">Login</h3>
          <Card.Body>
            <Formik
              initialValues={{
                // email: "",
                email_or_phone: "",
                // email: recieveemailLocally,
                password: "",
                // restaurant_id: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col xs={12}>
                      <div>
                        <Form.Group controlId="email_or_phone">
                          <label htmlFor="phone">Phone</label>
                          <Field
                            autoComplete="off"
                            type="email_or_phone"
                            name="email_or_phone"
                            as={FormControl}
                            maxLength="12"
                            placeholder="Enter your phone number"
                          />
                          {({ field }) => (
                            <InputMask
                              {...field}
                              mask="(999) 999-9999"
                              maskChar=" "
                              className="form-control"
                              placeholder="(123) 456-7890"
                            />
                          )}
                          <ErrorMessage
                            name="email_or_phone"
                            component="div"
                            className="error-message"
                          />
                        </Form.Group>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12}>
                      <Form.Group controlId="password">
                        {/* <Form.Label>password</Form.Label> */}
                        <label htmlFor="password">Password</label>
                        <InputGroup>
                          <Field
                            type={showpassword ? "text" : "password"}
                            name="password"
                            as={FormControl}
                            placeholder="Enter your password"
                            autoComplete="off"
                          />
                        </InputGroup>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error-message"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    style={{ background: "rgb(221, 153, 51)" }}
                    className="LoginSubmitt mt-3"
                    type="submit"
                    block
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                  <p className="text-center mt-3">
                    Don't have an Account ? &nbsp;
                    <Link
                      className="anchorforgot"
                      onClick={() => {
                        closeLogin();
                        OpenRegistration();
                      }}
                    >
                      SignUp
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default LogInForm;
