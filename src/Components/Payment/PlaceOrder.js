// import React, { useState } from "react";
// import axios from "axios";
// import "./PlaceOrder.css";
// function PlaceOrder() {
//   const [formData, setFormData] = useState({
//     order_amount: 0,
//     delivery_address_id: "",
//     order_type: "",
//     branch_id: "",
//     delivery_time: "",
//     delivery_date: "",
//     distance: 0,
//     payment_method: "",
//     payment_id: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const token = localStorage.getItem("token");
//   //   console.log("Token in Place Order:", token);
//   //   if (!token) {
//   //     console.error("Token not available. Please authenticate.");
//   //     return;
//   //   }
//   //   // Make a POST request to the API endpoint with the form data
//   //   axios
//   // .post("https://cafescale.com/api/v1/customer/order/place", formData, {
//   //   headers: {
//   //     Authorization: `Bearer ${token}`,
//   //   },
//   // })
//   // .then((response) => {
//   //   // Handle the API response as needed
//   //   console.log("API Response:", response.data);
//   // })
//   // .catch((error) => {
//   //   // Handle any errors that occur during the request
//   //   if (error.response) {
//   //     console.error("API Error - Status:", error.response.status);
//   //     console.error("API Error - Data:", error.response.data);
//   //   } else {
//   //     console.error("Network Error:", error.message);
//   //   }
//   // });
//   // };

//   const handleSubmit = async (e) => {
//     const token = localStorage.getItem("token");
//     console.log("Token in Place Order:", token);
//     e.preventDefault();
//     if (!token) {
//       console.error("Token not available. Please authenticate.");
//       return;
//     }
//     try {
//       const response = await fetch(
//         "https://cafescale.com/api/v1/customer/order/place",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             // Use the saved token for authorization
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         // Payment method created successfully
//         console.log("Payment method created successfully");
//         alert("Payment method created successfully");
//       } else {
//         // Handle error
//         console.error("Error creating payment method");
//         alert("Error creating payment method");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <h2 className="form-placeOrder text-center" style={{ color: "white" }}>
//         Place an Order
//       </h2>
//       <form className="custom-order-form" onSubmit={handleSubmit}>
//         <div>
//           <label>Order Amount:</label>
//           <input
//             type="number"
//             name="order_amount"
//             value={formData.order_amount}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Delivery Address ID:</label>
//           <input
//             type="text"
//             name="delivery_address_id"
//             value={formData.delivery_address_id}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Order Type:</label>
//           <select
//             name="order_type"
//             value={formData.order_type}
//             onChange={handleChange}
//           >
//             <option value="">Select Order Type</option>
//             <option value="type1">Pick up</option>
//             <option value="type2">Delivery</option>
//           </select>
//         </div>
//         <div>
//           <label>Branch ID:</label>
//           <input
//             type="text"
//             name="branch_id"
//             value={formData.branch_id}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Delivery Time:</label>
//           <input
//             type="time"
//             name="delivery_time"
//             value={formData.delivery_time}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Delivery Date:</label>
//           <input
//             type="date"
//             name="delivery_date"
//             value={formData.delivery_date}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Distance:</label>
//           <input
//             type="number"
//             name="distance"
//             value={formData.distance}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>Payment Method:</label>
//           <select
//             name="payment_method"
//             value={formData.payment_method}
//             onChange={handleChange}
//           >
//             <option value="">Select Payment Method</option>
//             <option value="credit_card">Stripe</option>
//             <option value="paypal">PayPal</option>
//           </select>
//         </div>
//         <div>
//           <label>Payment ID:</label>
//           <input
//             type="text"
//             name="payment_id"
//             value={formData.payment_id}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <button type="submit">Place Order</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default PlaceOrder;

import React, { useState } from "react";
import axios from "axios";
import "./PlaceOrder.css";
function PlaceOrder() {
  const [formData, setFormData] = useState({
    order_amount: 0,
    delivery_address_id: "",
    order_type: "",
    branch_id: "",
    delivery_time: "",
    delivery_date: "",
    distance: 0,
    payment_method: "",
    payment_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem("token");
  //   console.log("Token in Place Order:", token);
  //   if (!token) {
  //     console.error("Token not available. Please authenticate.");
  //     return;
  //   }
  //   // Make a POST request to the API endpoint with the form data
  //   axios
  // .post("https://cafescale.com/api/v1/customer/order/place", formData, {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // })
  // .then((response) => {
  //   // Handle the API response as needed
  //   console.log("API Response:", response.data);
  // })
  // .catch((error) => {
  //   // Handle any errors that occur during the request
  //   if (error.response) {
  //     console.error("API Error - Status:", error.response.status);
  //     console.error("API Error - Data:", error.response.data);
  //   } else {
  //     console.error("Network Error:", error.message);
  //   }
  // });
  // };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    console.log("Token in Place Order:", token);
    e.preventDefault();
    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }
    try {
      const response = await fetch(
        "https://cafescale.com/api/v1/customer/order/place",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Use the saved token for authorization
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Payment method created successfully
        console.log("Payment method created successfully");
        alert("Payment method created successfully");
      } else {
        // Handle error
        console.error("Error creating payment method");
        alert("Error creating payment method");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error:", error);
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h2 className="form-placeOrder text-center" style={{ color: "white" }}>
        Place an Order
      </h2>
      <form className="custom-order-form" onSubmit={handleSubmit}>
        <div>
          <label>Order Amount:</label>
          <input
            type="number"
            name="order_amount"
            value={formData.order_amount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Delivery Address ID:</label>
          <input
            type="text"
            name="delivery_address_id"
            value={formData.delivery_address_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Order Type:</label>
          <select
            name="order_type"
            value={formData.order_type}
            onChange={handleChange}
          >
            <option value="">Select Order Type</option>
            <option value="type1">Pick up</option>
            <option value="type2">Delivery</option>
          </select>
        </div>
        <div>
          <label>Branch ID:</label>
          <input
            type="text"
            name="branch_id"
            value={formData.branch_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Delivery Time:</label>
          <input
            type="text"
            name="delivery_time"
            value={formData.delivery_time}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Delivery Date:</label>
          <input
            type="date"
            name="delivery_date"
            value={formData.delivery_date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Distance:</label>
          <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <select
            name="payment_method"
            value={formData.payment_method}
            onChange={handleChange}
          >
            <option value="">Select Payment Method</option>
            <option value="credit_card">Stripe</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <div>
          <label>Payment ID:</label>
          <input
            type="text"
            name="payment_id"
            value={formData.payment_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
