import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../SignUp/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import api from "../BaseApi";
import { Resturant_id_Globally } from "../../../Resutrant_Id";
import InputMask from "react-input-mask";
import { RxCross2 } from "react-icons/rx";
import LogInForm from "../Login/Login";
import axios from "axios";
import SignupForm from "../SignUp/SignUp";
const VerifyPhoneNumber = ({ closeOTP, closeRegistration }) => {
  const navigate = useNavigate();
  //   const [IsLogInOpen, setIsLogInOpen] = useState(false);
  const [iOpenSignUp, setiOpenSignUp] = useState(false);
  const initialValues = {
    token: "",
  };

  const handleiOpenSignUp = () => {
    setiOpenSignUp(false);
  };
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const phone = localStorage.getItem("PhoneNumberOTP");
    const requestData = {
      token: values.token,
      phone: phone, // Ensure 'PhoneNumberOTP' is set correctly in localStorage
    };
    try {
      const response = await api.post("auth/verify-phone", requestData);
      console.log(response.data, "OTP Verify Successfully❤😎");
      alert("OTP Verify Successfully❤😎");
      closeOTP();
      setiOpenSignUp(true);
    } catch (error) {
      console.error(error);
      alert("There was an error while verifying OTP. Please try again.");
    }

    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <Container>
        <Card className="Signup-card">
          <Card.Body>
            <h3 className="text-center fw-bold">OTP Verification</h3>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <Row>
                    <Col xs={12}>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <Field
                          placeholder="****"
                          type="tel"
                          name="token"
                          id="token"
                          maxLength="4"
                          className={`form-control ${
                            errors.token && touched.token ? "is-invalid" : ""
                          }`}
                        ></Field>
                        <ErrorMessage
                          name="token"
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
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
      <div className={iOpenSignUp ? "sidebar open" : "sidebar"}>
        <button
          className="close-sidebar-Login"
          onClick={() => {
            setiOpenSignUp(false);
            closeRegistration();
          }}
        >
          <RxCross2 style={{ color: "white" }} />
        </button>
        <SignupForm iOpenSignUp={handleiOpenSignUp} />
      </div>
    </>
  );
};
export default VerifyPhoneNumber;
