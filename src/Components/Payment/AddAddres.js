// import React, { useState, useEffect } from "react";
// import "./Payment.css";
// import { useNavigate } from "react-router-dom";
// function AddAddress() {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoaing] = useState(false);

//   const [cardInfo, setCardInfo] = useState({
//     contact_person_name: "",
//     address_type: "",
//     contact_person_number: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCardInfo({
//       ...cardInfo,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     const token = localStorage.getItem("token");
//     console.log("Token in Add_Address:", token);
//     e.preventDefault();
//     if (!token) {
//       console.error("Token not available. Please authenticate.");
//       return;
//     }
//     setIsLoaing(true);
//     try {
//       const response = await fetch(
//         "https://cafescale.com/api/v1/customer/address/add",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             // Use the saved token for authorization
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(cardInfo),
//         }
//       );

//       if (response.ok) {
//         // Payment method created successfully
//         console.log("Address Added successfully", response);
//         alert("Address Added successfully");
//         navigate("/ShowAddAddress");
//       } else {
//         // Handle error
//         console.error("Error Adding Address");
//         alert("Error Adding Address");
//         setIsLoaing(false);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error:", error);
//       setIsLoaing(false);
//     }
//   };

//   return (
//     <>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//       <div className="payment-form-container">
//         <h1>Add Address</h1>

//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Contact Person Name</label>
//             <input
//               type="text"
//               name="contact_person_name"
//               className="input-field input-field-payment"
//               value={cardInfo.contact_person_name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Address Type</label>
//             <input
//               type="text"
//               className="input-field input-field-payment"
//               name="address_type"
//               value={cardInfo.address_type}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Contact Person Number</label>
//             <input
//               type="text"
//               name="contact_person_number"
//               className="input-field input-field-payment"
//               value={cardInfo.contact_person_number}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label>Address</label>
//             <input
//               type="text"
//               className="input-field input-field-payment"
//               name="address"
//               value={cardInfo.address}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="submit-button" disabled={isLoading}>
//             {isLoading ? "Submitting...." : " Add Address"}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default AddAddress;

// here is the map api .......!!!!!!!

// import React, { useState, useEffect } from "react";
// import "./Payment.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import api from "../Auth/BaseApi";
// import { Col, Container, Row } from "react-bootstrap";
// import MapComponents from "./MapCoponents";

// function AddAddress() {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [cardInfo, setCardInfo] = useState({
//     contact_person_name: "",
//     address_type: "",
//     contact_person_number: "",
//     address: "",
//   });
//   const [editable, setEditable] = useState(true);
//   useEffect(() => {
//     const fullName = localStorage.getItem("f_name");
//     const phoneNumber = localStorage.getItem("Phone");
//     if (fullName && phoneNumber) {
//       setCardInfo({
//         ...cardInfo,
//         contact_person_name: fullName,
//         contact_person_number: phoneNumber,
//       });
//       setEditable(true);
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCardInfo({
//       ...cardInfo,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("Token not available. Please authenticate.");
//         return;
//       }
//       setIsLoading(true);

//       const response = await axios.get(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${cardInfo.address}&key=AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E`
//       );

//       if (response.data.results.length > 0) {
//         const location = response.data.results[0].geometry.location;
//         const updatedCardInfo = {
//           ...cardInfo,
//           latitude: location.lat,
//           longitude: location.lng,
//         };

//         // Create the addressData object with updated latitude and longitude
//         const addressData = updatedCardInfo;

//         console.log("Updated Address Data:", addressData);

//         const addressResponse = await fetch(
//           "https://cafescale.com/api/v1/customer/address/add",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify(addressData),
//           }
//         );

//         if (addressResponse.ok) {
//           console.log("Address Added successfully", addressResponse);
//           localStorage.setItem("deliverytype", addressData.address_type);
//           localStorage.setItem("latitude_2", addressData.latitude);
//           localStorage.setItem("longitude_2", addressData.longitude);
//           alert("Address Added successfully");
//           navigate("/ShowAddAddress");
//         } else {
//           console.error("Error Adding Address");
//           alert("Error Adding Address");
//           setIsLoading(false);
//         }
//       } else {
//         console.error("Unable to fetch coordinates for the provided address");
//         alert("Unable to fetch coordinates for the provided address");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error:", error);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <br />
//       <br />
//       <br />
//       <br />
//       <Container>
//         <Row>
//           <Col md={7} xs={12}>
//             <MapComponents />
//           </Col>
//           <Col md={5} xs={12}>
//             <div className="payment-form-container">
//               <h1>Add Address</h1>

//               <form onSubmit={handleSubmit}>
//                 <div>
//                   <label>Contact Person Name</label>
//                   <input
//                     type="text"
//                     name="contact_person_name"
//                     className="input-field input-field-payment"
//                     value={cardInfo.contact_person_name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Address Type</label>
//                   <input
//                     type="text"
//                     className="input-field input-field-payment"
//                     name="address_type"
//                     value={cardInfo.address_type}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Contact Person Number</label>
//                   <input
//                     type="text"
//                     name="contact_person_number"
//                     className="input-field input-field-payment"
//                     value={cardInfo.contact_person_number}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label>Address</label>
//                   <input
//                     type="text"
//                     className="input-field input-field-payment"
//                     name="address"
//                     value={cardInfo.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="submit-button"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Submitting...." : " Add Address"}
//                 </button>
//               </form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default AddAddress;

// using the kabshah Method....

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Payment.css";
import { Col, Container, Row } from "react-bootstrap";
import MapComponents from "./MapCoponents";
import { useNavigate, useParams } from "react-router-dom";

function AddAddress() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    contact_person_name: "",
    address_type: "",
    contact_person_number: "",
    address: "",
  });
  const [mapCoordinates, setMapCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [editable, setEditable] = useState(true);
  const { addressId } = useParams();

  useEffect(() => {
    const fullName = localStorage.getItem("f_name");
    const phoneNumber = localStorage.getItem("Phone");
    if (fullName && phoneNumber) {
      setCardInfo({
        ...cardInfo,
        contact_person_name: fullName,
        contact_person_number: phoneNumber,
      });
      setEditable(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  const handleRequestError = (error) => {
    console.error("Error:", error);

    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      alert(
        `Error status: ${error.response.status}\nError data: ${JSON.stringify(
          error.response.data
        )}`
      );
    } else if (error.request) {
      console.error("Request:", error.request);
      alert("No response received. Check your network connection.");
    } else {
      console.error("Error message:", error.message);
      alert("Error occurred while processing the request.");
    }

    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not available. Please authenticate.");
        alert("Token not available. Please authenticate.");
        return;
      }
      setIsLoading(true);

      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${cardInfo.address}&key=AIzaSyDfhaVxzlkVqMGcbu5FQuoi7rhQJBWqo5E`
      );

      if (response.data.results.length > 0) {
        const location = response.data.results[0].geometry.location;
        const updatedCardInfo = {
          ...cardInfo,
          latitude: location.lat,
          longitude: location.lng,
        };
        // console.log(updatedCardInfo, "kkkkkkkkkkkk");

        const apiUrl = addressId
          ? `https://cafescale.com/api/v1/customer/address/update/${addressId}`
          : "https://cafescale.com/api/v1/customer/address/add";

        const addressResponse = await axios.post(apiUrl, updatedCardInfo, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (addressResponse.status === 200) {
          const message = addressId
            ? "Address Updated successfully"
            : "Address Added successfully";
          console.log(message, addressResponse);
          const data = JSON.parse(addressResponse.config.data);
          localStorage.setItem("deliverytype", data.address_type);
          localStorage.setItem("latitude_2", data.latitude);
          localStorage.setItem("longitude_2", data.longitude);
          alert(message);

          setMapCoordinates({
            latitude: updatedCardInfo.latitude,
            longitude: updatedCardInfo.longitude,
          });
          navigate("/ShowAddAddress");
          // navigate("/Payment");
        } else {
          const errorMessage = addressId
            ? "Error Updating Address"
            : "Error Adding Address";
          console.error(errorMessage);
          alert(errorMessage);
        }
      } else {
        console.error("Unable to fetch coordinates for the provided address");
        alert("Unable to fetch coordinates for the provided address");
      }
    } catch (error) {
      handleRequestError(error);
    }
  };

  const handleLocationSelect = (locationDetails) => {
    setCardInfo({
      ...cardInfo,
      address: locationDetails.address,
    });
    console.log(locationDetails, "Selected Location Details"); // Access other location details if needed
  };

  return (
    <>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col md={8}>
            <div>
              <MapComponents onLocationSelect={handleLocationSelect} />
            </div>
          </Col>
          <Col md={4}>
            <div className="payment-form-container">
              <h1>Delivery Address</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Address Line</label>
                  {/* <input
                    type="text"
                    className="input-field input-field-payment"
                    name="address"
                    value={cardInfo.address}
                    onChange={handleChange}
                    required
                  /> */}
                  <input
                    className="input-field input-field-payment"
                    type="text"
                    required
                    value={cardInfo.address}
                    onChange={(e) =>
                      setCardInfo({ ...cardInfo, address: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>Address Type</label>
                  <select
                    type="text"
                    className="input-field input-field-payment"
                    name="address_type"
                    value={cardInfo.address_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Order Type</option>
                    <option value="Pick up">Pick up</option>
                    <option value="Delivery">Delivery</option>
                  </select>
                </div>
                <div>
                  <label>Contact Person Name</label>
                  <input
                    type="text"
                    name="contact_person_name"
                    className="input-field input-field-payment"
                    value={cardInfo.contact_person_name}
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <label>Contact Person Number</label>
                    <input
                      type="text"
                      name="contact_person_number"
                      className="input-field input-field-payment"
                      value={cardInfo.contact_person_number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="submit-button">
                  {isLoading ? "Submitting...." : " Save Location"}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddAddress;