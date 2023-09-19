import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import api from "../BaseApi";
import InputMask from "react-input-mask";
const SignupForm = () => {
  const navigate = useNavigate();
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
      })
      .catch((error) => {
        console.log(error);
        alert("There is error in the data");
      });

    resetForm();
    setSubmitting(false);
  };
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center SignupContainer"
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
                  <Link className="anchorforgot" to="/">
                    {" "}
                    Login
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignupForm;

// yahan hum Phone Verify karian gay......

// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
// import * as Yup from "yup";
// import "./SignUp.css";
// import { Link, useNavigate } from "react-router-dom";
// import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import api from "../BaseApi";
// import ReactInputMask from "react-input-mask";
// import axios from "axios";
// const SignupForm = () => {
//   const navigate = useNavigate();
//   const initialValues = {
//     f_name: "",
//     l_name: "",
//     email: "",
//     phone: "",
//     restaurant_id: "",
//     password: "",
//   };
//   const validationSchema = Yup.object().shape({
//     f_name: Yup.string().required("First name is required"),
//     l_name: Yup.string().required("Last name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     phone: Yup.string()
//       .required("Phone number is required")
//       .matches(
//         /^\(\d{3}\) \d{3}-\d{4}$/,
//         "Invalid phone number. Use the format (123) 456-7890"
//       ),
//     restaurant_id: Yup.string()
//       .required("Restaurant ID is required")
//       .nullable(),
//     password: Yup.string().required("Password is required"),
//   });

//   // const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//   //   await api
//   //     .post("/auth/registration", values)
//   //     .then((response) => {
//   //       console.log(response.config.data);
//   //       alert("You are Registered Successfully❤😎");
//   //       // navigate("/");
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //       alert("There is error in the data");
//   //     });

//   //   resetForm();
//   //   setSubmitting(false);
//   // };

//   const [isPhoneValid, setIsPhoneValid] = useState(true);
//   const [isRestaurantIdValid, setIsRestaurantIdValid] = useState(true);

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: async (values) => {
//       if (isPhoneValid && isRestaurantIdValid) {
//         try {
//           const response = await api.post("/auth/registration", values);
//           console.log(response.data);
//           alert("You are Registered Successfully❤😎");
//           // navigate("/");
//         } catch (error) {
//           console.error(error);
//           alert("There is an error in the data");
//         }
//       } else {
//         // Handle the case where either phone number or restaurant ID is not valid.
//         alert("Please correct the invalid fields.");
//       }
//     },
//   });

//   const checkPhoneNumber = async () => {
//     try {
//       const response = await axios.post("/auth/check-phone", {
//         phone: formik.values.phone,

//       });
//       console.log("number phone",response)
//       if (response.data.isValid) {
//         // Phone number is valid
//         setIsPhoneValid(true);
//         checkRestaurantId(); // Check restaurant ID after phone validation
//       } else {
//         setIsPhoneValid(false);
//         formik.setFieldError("phone", "Invalid phone number");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const checkRestaurantId = async () => {
//     // You can implement restaurant ID validation logic here, similar to phone validation
//     // Example:
//     const restaurantId = formik.values.restaurant_id;
//     if (restaurantIdIsValid(restaurantId)) {
//       setIsRestaurantIdValid(true);
//     } else {
//       setIsRestaurantIdValid(false);
//       formik.setFieldError("restaurant_id", "Invalid restaurant ID");
//     }
//   };

//   const restaurantIdIsValid = (restaurantId) => {
//     // Implement your own validation logic for restaurant ID here
//     // For example, check if it's a valid format or exists in a database
//     return /^\d+$/.test(restaurantId); // This is a simple example
//   };

//   return (
//     <Container
//       fluid
//       className="d-flex align-items-center justify-content-center SignupContainer"
//     >
//       <Card className="Signup-card">
//         <Card.Body>
//           <h3 className="text-center fw-bold">Sign Up</h3>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             // onSubmit={handleSubmit}
//           >
//             {({ errors, touched, isSubmitting }) => (
//               <Form>
//                 <Row>
//                   <Col xs={12}>
//                     <div className="form-group">
//                       <label htmlFor="f_name">First Name</label>
//                       <Field
//                         type="text"
//                         name="f_name"
//                         id="f_name"
//                         placeholder="Enter the First Name"
//                         className={`form-control ${
//                           errors.f_name && touched.f_name ? "is-invalid" : ""
//                         }`}
//                       />
//                       <ErrorMessage
//                         name="f_name"
//                         component="div"
//                         className="invalid-feedback"
//                       />
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col xs={12}>
//                     <div className="form-group">
//                       <label htmlFor="l_name">Last Name</label>
//                       <Field
//                         placeholder="Enter the Last Name"
//                         type="text"
//                         name="l_name"
//                         id="l_name"
//                         className={`form-control ${
//                           errors.l_name && touched.l_name ? "is-invalid" : ""
//                         }`}
//                       />
//                       <ErrorMessage
//                         name="l_name"
//                         component="div"
//                         className="invalid-feedback"
//                       />
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col xs={12}>
//                     <div className="form-group">
//                       <label htmlFor="email">Email</label>
//                       <Field
//                         placeholder="Enter the Email"
//                         type="email"
//                         name="email"
//                         id="email"
//                         className={`form-control ${
//                           errors.email && touched.email ? "is-invalid" : ""
//                         }`}
//                       />
//                       <ErrorMessage
//                         name="email"
//                         component="div"
//                         className="invalid-feedback"
//                       />
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col xs={12}>
//                     <div className="form-group">
//                       <label htmlFor="phone">Phone</label>
//                       <Field
//                         placeholder="(123) 456-7890"
//                         type="tel"
//                         name="phone"
//                         id="phone"
//                         className={`form-control ${
//                           errors.phone && touched.phone ? "is-invalid" : ""
//                         }`}
//                       >
//                         {({ field }) => (
//                           <ReactInputMask
//                             {...field}
//                             mask="(999) 999-9999"
//                             maskChar=" "
//                             className="form-control"
//                             placeholder="(123) 456-7890"
//                           />
//                         )}
//                       </Field>
//                       <ErrorMessage
//                         name="phone"
//                         component="div"
//                         className="invalid-feedback"
//                       />
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col xs={12}>
//                     <div className="form-group">
//                       <label htmlFor="restaurant_id">Restaurant ID</label>
//                       <Field
//                         placeholder="Enter the Restaurant ID"
//                         type="number"
//                         name="restaurant_id"
//                         id="restaurant_id"
//                         className={`form-control ${
//                           errors.restaurant_id && touched.restaurant_id
//                             ? "is-invalid"
//                             : ""
//                         }`}
//                       />
//                       <ErrorMessage
//                         name="restaurant_id"
//                         component="div"
//                         className="invalid-feedback"
//                       />
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col xs={12}>
//                     <div className="form-group">
//                       <label htmlFor="password">Password</label>
//                       <Field
//                         placeholder="Enter Your Password"
//                         type="password"
//                         name="password"
//                         id="password"
//                         className={`form-control ${
//                           errors.password && touched.password
//                             ? "is-invalid"
//                             : ""
//                         }`}
//                       />
//                       <ErrorMessage
//                         name="password"
//                         component="div"
//                         className="invalid-feedback"
//                       />
//                     </div>
//                   </Col>
//                 </Row>
//                 <Button
//                   type="submit"
//                   className="SignupBtn"
//                   onClick={checkPhoneNumber}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Continue..." : "Continue"}
//                 </Button>
//                 <p className="text-center mt-3">
//                   Already have an account ?{" "}
//                   <Link className="anchorforgot" to="/">
//                     {" "}
//                     Login
//                   </Link>
//                 </p>
//               </Form>
//             )}
//           </Formik>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default SignupForm;

// Pakistani Number check k listItemSecondaryActionClasses...!!!!
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import "./SignUp.css";
// import { Link, useNavigate } from "react-router-dom";
// import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import api from "../BaseApi";
// import ReactInputMask from "react-input-mask";
// const SignupForm = () => {
//   const navigate = useNavigate();
//   const initialValues = {
//     f_name: "",
//     l_name: "",
//     email: "",
//     phone: "",
//     restaurant_id: "",
//     password: "",
//   };
//   const validationSchema = Yup.object().shape({
//     f_name: Yup.string().required("First name is required"),
//     l_name: Yup.string().required("Last name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     phone: Yup.string()
//     .required("Phone number is required")
//     .matches(
//       /^(03\d{9})$/,
//       "Invalid phone number. Use the format 03XXXXXXXXX "
//     ),
//     restaurant_id: Yup.string()
//       .required("Restaurant ID is required")
//       .nullable(),
//     password: Yup.string()
//       .required("Password is required")
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
//         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
//       ),
//   });

//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     await api
//       .post("/auth/registration", values)
//       .then((response) => {
//         console.log(response.config.data);
//         alert("You are Registered Successfully❤😎");
//         // navigate("/");
//       })
//       .catch((error) => {
//         console.log("error in the data", error);
//         alert("There is error in the data");
//       });
//     console.log("Submitting form with values:", values);

//     resetForm();
//     setSubmitting(false);
//   };
//   return (
//     <>
//       <br />
//       <br />
//       <br />
//       <Container
//         fluid
//         className="d-flex align-items-center justify-content-center SignupContainer "
//       >
//         <Card className="Signup-card">
//           <Card.Body>
//             <h3 className="text-center fw-bold">Sign Up</h3>
//             <Formik
//               initialValues={initialValues}
//               validationSchema={validationSchema}
//               onSubmit={handleSubmit}
//             >
//               {({ errors, touched, isSubmitting }) => (
//                 <Form>
//                   <Row>
//                     <Col xs={12}>
//                       <div className="form-group">
//                         <label htmlFor="f_name">First Name</label>
//                         <Field
//                           type="text"
//                           name="f_name"
//                           id="f_name"
//                           placeholder="Enter the First Name"
//                           className={`form-control ${
//                             errors.f_name && touched.f_name ? "is-invalid" : ""
//                           }`}
//                         />
//                         <ErrorMessage
//                           name="f_name"
//                           component="div"
//                           className="invalid-feedback"
//                         />
//                       </div>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col xs={12}>
//                       <div className="form-group">
//                         <label htmlFor="l_name">Last Name</label>
//                         <Field
//                           placeholder="Enter the Last Name"
//                           type="text"
//                           name="l_name"
//                           id="l_name"
//                           className={`form-control ${
//                             errors.l_name && touched.l_name ? "is-invalid" : ""
//                           }`}
//                         />
//                         <ErrorMessage
//                           name="l_name"
//                           component="div"
//                           className="invalid-feedback"
//                         />
//                       </div>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col xs={12}>
//                       <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <Field
//                           placeholder="Enter the Email"
//                           type="email"
//                           name="email"
//                           id="email"
//                           className={`form-control ${
//                             errors.email && touched.email ? "is-invalid" : ""
//                           }`}
//                         />
//                         <ErrorMessage
//                           name="email"
//                           component="div"
//                           className="invalid-feedback"
//                         />
//                       </div>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col xs={12}>
//                       <div className="form-group">
//                         <label htmlFor="phone">Phone</label>
//                         <Field
//                           placeholder="(03xx) xxx-xxxx"
//                           type="tel"
//                           name="phone"
//                           id="phone"
//                           mask="03999999999"
//                           className={`form-control ${
//                             errors.phone && touched.phone ? "is-invalid" : ""
//                           }`}
//                           maxLength="11"
//                         >
//                         </Field>
//                         <ErrorMessage
//                           name="phone"
//                           component="div"
//                           className="invalid-feedback"
//                         />
//                       </div>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col xs={12}>
//                       <div className="form-group">
//                         <label htmlFor="restaurant_id">Restaurant ID</label>
//                         <Field
//                           placeholder="Enter the Restaurant ID"
//                           type="number"
//                           name="restaurant_id"
//                           id="restaurant_id"
//                           className={`form-control ${
//                             errors.restaurant_id && touched.restaurant_id
//                               ? "is-invalid"
//                               : ""
//                           }`}
//                         />
//                         <ErrorMessage
//                           name="restaurant_id"
//                           component="div"
//                           className="invalid-feedback"
//                         />
//                       </div>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col xs={12}>
//                       <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <Field
//                           placeholder="Enter Your Password"
//                           type="password"
//                           name="password"
//                           id="password"
//                           className={`form-control ${
//                             errors.password && touched.password
//                               ? "is-invalid"
//                               : ""
//                           }`}

//                         />
//                         <ErrorMessage
//                           name="password"
//                           component="div"
//                           className="invalid-feedback"
//                         />
//                       </div>
//                     </Col>
//                   </Row>
//                   <Button
//                     type="submit"
//                     className="SignupBtn"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Continue..." : "Continue"}
//                   </Button>
//                   <p className="text-center mt-3">
//                     Already have an account ?{" "}
//                     <Link className="anchorforgot" to="/">
//                       {" "}
//                       Login
//                     </Link>
//                   </p>
//                 </Form>
//               )}
//             </Formik>
//           </Card.Body>
//         </Card>
//       </Container>
//     </>
//   );
// };

// export default SignupForm;
