import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
const validationSchema = Yup.object().shape({
  // email: Yup.string()
  //   .email("Invalid email address")
  //   .required("email is required"),
  password: Yup.string()
    .min(3, "password must be at least 3 characters")
    .required("password is required"),
});
function useAuthToken() {
  const getToken = () => localStorage.getItem("token");
  const setToken = (token) => localStorage.setItem("token", token);
  const removeToken = () => localStorage.removeItem("token");

  return { getToken, setToken, removeToken };
}
const LogInForm = ({ closeLogin }) => {
  const navigate = useNavigate();
  const [showLogin, setShowLogIn] = useState(true);
  const { getToken, setToken } = useAuthToken(); // Use the custom hook

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
                  {/* <Row className="mb-3">
                    <Col xs={12}>
                      <Form.Group controlId="email">
                        <label htmlFor="email">Email</label>
                        <Field
                          autoComplete="off"
                          type="email"
                          name="email"
                          as={FormControl}
                          placeholder="Enter your email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error-message"
                        />
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row className="mb-3">
                    <Col xs={12}>
                      <Form.Group controlId="email_or_phone">
                        <label htmlFor="phone">Email or Phone</label>
                        <Field
                          autoComplete="off"
                          type="email_or_phone"
                          name="email_or_phone"
                          as={FormControl}
                          maxLength="12"
                          placeholder="Enter your email_or_phone"
                        />
                        <ErrorMessage
                          name="email_or_phone"
                          component="div"
                          className="error-message"
                        />
                      </Form.Group>
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
////
