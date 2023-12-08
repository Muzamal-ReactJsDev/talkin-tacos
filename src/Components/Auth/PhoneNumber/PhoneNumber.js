import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../SignUp/SignUp.css";
import { Link, json, useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import api from "../BaseApi";
import { Resturant_id_Globally } from "../../../Resutrant_Id";
import InputMask from "react-input-mask";
import { RxCross2 } from "react-icons/rx";
import LogInForm from "../Login/Login";
import VerifyPhoneNumber from "../VerifyPhoneNumber/VerifyPhoneNumber";
const PhoneNumber = ({ closeRegistration }) => {
  const navigate = useNavigate();
  const [isOTPOpen, setIsOTPOpen] = useState(false);
  const initialValues = {
    phone: "",
    // restaurant_id: Resturant_id_Globally,
  };
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^\(\d{3}\) \d{3}-\d{4}$/,
        "Invalid phone number. Use the format (123) 456-7890"
      ),
  });

  const handleClosePhoneNumber = () => {
    setIsOTPOpen(false);
  };
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // Remove spaces and special characters from the phone number
    const formattedPhoneNumber = values.phone.replace(/[^\d]/g, "");
  
    // Add the +1 country code to the phone number
    const phoneNumberWithCountryCode = `+1${formattedPhoneNumber}`;
  
    const requestData = {
      phone: phoneNumberWithCountryCode,
      restaurant_id: Resturant_id_Globally, // Include restaurant_id from global variable
    };
    try {
      const response = await api.post("/auth/check-phone", requestData);
      console.log(response, "OTP has been sent successfully❤😎");
      const PhoneNumberOTP = JSON.parse(response.config.data);
      localStorage.setItem("PhoneNumberOTP", PhoneNumberOTP.phone);
      alert("An OTP has been sent successfully❤😎");
      closeRegistration();
      setIsOTPOpen(true);
    } catch (error) {
      console.log(error);
      alert("There is an error in the data");
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
            <h3 className="text-center fw-bold">Check Phone Number</h3>
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

      <div className={isOTPOpen ? "sidebar open" : "sidebar"}>
        <button
          className="close-sidebar-Login"
          onClick={() => {
            setIsOTPOpen(false);
            closeRegistration();
          }}
        >
          <RxCross2 style={{ color: "white" }} />
        </button>
        <VerifyPhoneNumber closeOTP={handleClosePhoneNumber} />
      </div>
    </>
  );
};
export default PhoneNumber;
