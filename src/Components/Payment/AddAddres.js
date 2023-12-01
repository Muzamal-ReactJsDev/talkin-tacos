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

import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../Auth/BaseApi";

function AddAddress() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [cardInfo, setCardInfo] = useState({
    contact_person_name: "",
    address_type: "",
    contact_person_number: "",
    address: "",
  });
  const [editable, setEditable] = useState(true);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not available. Please authenticate.");
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

        // Create the addressData object with updated latitude and longitude
        const addressData = updatedCardInfo;

        console.log("Updated Address Data:", addressData);

        const addressResponse = await fetch(
          "https://cafescale.com/api/v1/customer/address/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(addressData),
          }
        );

        if (addressResponse.ok) {
          console.log("Address Added successfully", addressResponse);
          localStorage.setItem("deliverytype", addressData.address_type);
          localStorage.setItem("latitude_2", addressData.latitude);
          localStorage.setItem("longitude_2", addressData.longitude
          );
          alert("Address Added successfully");
          navigate("/ShowAddAddress");
        } else {
          console.error("Error Adding Address");
          alert("Error Adding Address");
          setIsLoading(false);
        }
      } else {
        console.error("Unable to fetch coordinates for the provided address");
        alert("Unable to fetch coordinates for the provided address");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="payment-form-container">
        <h1>Add Address</h1>

        <form onSubmit={handleSubmit}>
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
          </div>
          <div>
            <label>Address Type</label>
            <input
              type="text"
              className="input-field input-field-payment"
              name="address_type"
              value={cardInfo.address_type}
              onChange={handleChange}
              required
            />
          </div>
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
          <div>
            <label>Address</label>
            <input
              type="text"
              className="input-field input-field-payment"
              name="address"
              value={cardInfo.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Submitting...." : " Add Address"}
          </button>
        </form>
      </div>
    </>
  );
}

export default AddAddress;

