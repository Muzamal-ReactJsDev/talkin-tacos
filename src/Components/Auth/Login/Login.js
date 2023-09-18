import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../BaseApi";
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
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import Imglogo from "../../Images/Talkin 2.png";
import { Link } from "react-router-dom";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("email is required"),
  password: Yup.string()
    .min(3, "password must be at least 3 characters")
    .required("password is required"),
});
const LogInForm = () => {
  const navigate = useNavigate();
  const [showpassword, setShowpassword] = useState(false);
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // agar direct api use karian gay to axios.post likhian gay agar api ko alag define karian gay to to wahan jo name likha ha wohii name likhian gay....
    await api
      .post("/auth/login", values)
      .then((response) => {
        console.log(response.data.token);
        alert("Log in Successfully");
        navigate("/navbar");
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
                email: "",
                password: "",
                restaurant_id: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
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
                            maxLength={8}
                            autoComplete="off"
                          />
                          <Button
                            className="buttonEye"
                            onClick={togglepasswordVisibility}
                          >
                            {showpassword ? (
                              <FiEye className="buttonEyeI" />
                            ) : (
                              <FiEyeOff className="buttonEyeI" />
                            )}
                          </Button>
                        </InputGroup>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error-message"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="restaurant_id">
                    <label htmlFor="restaurant_id">Restaurant ID</label>
                    <Field
                      autoComplete="off"
                      type="number"
                      name="restaurant_id"
                      as={FormControl}
                      placeholder="Enter restaurant ID"
                    />
                    <ErrorMessage
                      name="restaurant_id"
                      component="div"
                      className="error-message"
                    />
                  </Form.Group>

                  <Row className="mb-4">
                    <Col
                      className="p-0 d-flex align-items-center justify-content-start"
                      xs={6}
                    >
                      <Form.Group controlId="rememberMe">
                        <Field
                          type="checkbox"
                          name="rememberMe"
                          id="rememberMe"
                          className="form-check-input-style-log"
                        />
                        {/* <Form.Label
                         
                        >
                          Remember me
                        </Form.Label> */}
                        <label
                          htmlFor="rememberMe"
                          className="form-check-label mb-0"
                          style={{ fontSize: "12px" }}
                        >
                          Remember me
                        </label>
                      </Form.Group>
                    </Col>
                    <Col
                      xs={6}
                      className="p-0 d-flex align-items-center justify-content-end"
                    >
                      <Link
                        to="/Forgotpassword"
                        className="anchorforgot1"
                        style={{ fontSize: "12px", textDecoration: "none" }}
                      >
                        Forgot password?
                      </Link>
                    </Col>
                  </Row>
                  <Button
                    style={{ background: "rgb(221, 153, 51)" }}
                    className="LoginSubmitt"
                    type="submit"
                    block
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                  <p className="text-center mt-3">
                    Create an account ?{" "}
                    <Link className="anchorforgot" to="/SignUp">
                      {" "}
                      SignUp
                    </Link>
                    <div>or </div>
                    <Link className="anchorforgot" to="/navbar">
                      Continue as a Guest
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
