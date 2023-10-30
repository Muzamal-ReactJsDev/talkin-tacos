import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import api from "../BaseApi";

import InputMask from "react-input-mask";
import { RxCross2 } from "react-icons/rx";
import LogInForm from "../Login/Login";
const SignupForm = ({ closeRegistration }) => {
  const navigate = useNavigate();
  const [IsLogInOpen, setIsLogInOpen] = useState(false);
  const initialValues = {
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    restaurant_id: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    f_name: Yup.string().required("First name is required"),
    l_name: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^\(\d{3}\) \d{3}-\d{4}$/,
        "Invalid phone number. Use the format (123) 456-7890"
      ),
    restaurant_id: Yup.string()
      .required("Restaurant ID is required")
      .nullable(),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    await api
      .post("/auth/registration", values)
      .then((response) => {
        console.log(response.config.data);
        alert("You are Registered Successfully❤😎");
        // navigate("/");
        closeRegistration();
      })
      .catch((error) => {
        console.log(error);
        alert("There is error in the data");
      });

    resetForm();
    setSubmitting(false);
  };
  return (
    <>
      <br />
      <br />
      <br />
      <Container
      // className="d-flex align-items-center justify-content-center SignupContainer"
      >
        <Card className="Signup-card">
          <Card.Body>
            <h3 className="text-center fw-bold">Sign Up</h3>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <Row>
                    <Col xs={12}>
                      <div className="form-group">
                        <label htmlFor="f_name">First Name</label>
                        <Field
                          type="text"
                          name="f_name"
                          id="f_name"
                          placeholder="Enter the First Name"
                          className={`form-control ${
                            errors.f_name && touched.f_name ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          name="f_name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <div className="form-group">
                        <label htmlFor="l_name">Last Name</label>
                        <Field
                          placeholder="Enter the Last Name"
                          type="text"
                          name="l_name"
                          id="l_name"
                          className={`form-control ${
                            errors.l_name && touched.l_name ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          name="l_name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                          placeholder="Enter the Email"
                          type="email"
                          name="email"
                          id="email"
                          className={`form-control ${
                            errors.email && touched.email ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <Field
                          placeholder="(123) 456-7890"
                          type="tel"
                          name="phone"
                          id="phone"
                          className={`form-control ${
                            errors.phone && touched.phone ? "is-invalid" : ""
                          }`}
                        >
                          {({ field }) => (
                            <InputMask
                              {...field}
                              mask="(999) 999-9999"
                              maskChar=" "
                              className="form-control"
                              placeholder="(123) 456-7890"
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <div className="form-group">
                        <label htmlFor="restaurant_id">Restaurant ID</label>
                        <Field
                          placeholder="Enter the Restaurant ID"
                          type="number"
                          name="restaurant_id"
                          id="restaurant_id"
                          className={`form-control ${
                            errors.restaurant_id && touched.restaurant_id
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="restaurant_id"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field
                          placeholder="Enter Your Password"
                          type="password"
                          name="password"
                          id="password"
                          className={`form-control ${
                            errors.password && touched.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Button
                    type="submit"
                    className="SignupBtn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Continue..." : "Continue"}
                  </Button>
                  <p className="text-center mt-3">
                    Already have an account ?{" "}
                    <Link
                      className="anchorforgot"
                      onClick={() => {
                        setIsLogInOpen(true);
                      }}
                    >
                      Login
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
        <div className={IsLogInOpen ? "sidebar open" : "sidebar"}>
          <button
            className="close-sidebar-Login"
            onClick={() => {
              setIsLogInOpen(false);
              closeRegistration();
            }}
          >
            <RxCross2 style={{ color: "white" }} />
          </button>
          <LogInForm />
        </div>
      </Container>
    </>
  );
};

export default SignupForm;
