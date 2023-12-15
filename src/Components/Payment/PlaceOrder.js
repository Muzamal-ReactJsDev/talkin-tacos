// import React, { useState } from "react";
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

//   // Get the Order Amount from localStorage
//   const OrderPrice = localStorage.getItem("Order_Amount");

//   // Get the Delivery Address ID from localStorage
//   const DeliveryAddressId = localStorage.getItem("Delivery_Address_Id");

//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");

//     if (!token) {
//       console.error("Token not available. Please authenticate.");
//       return;
//     }

//     setIsLoading(true);

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
//         // Order placed successfully
//         console.log("Order placed successfully");
//         alert("Order placed successfully");
//       } else {
//         // Handle error
//         console.error("Error placing the order");
//         alert("Error placing the order");
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error: " + error.message);
//       setIsLoading(false);
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
//           <div>{OrderPrice}</div>
//         </div>
//         <div>
//           <label>Delivery Address ID:</label>
//           <div>{DeliveryAddressId}</div>
//         </div>
//         <div>
//           <label>Order Type:</label>
//           <select
//             name="order_type"
//             value={formData.order_type}
//             onChange={handleChange}
//             required
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
//             required
//           />
//         </div>
//         <div>
//           <label>Delivery Time:</label>
//           <input
//             type="text"
//             name="delivery_time"
//             value={formData.delivery_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Delivery Date:</label>
//           <input
//             type="date"
//             name="delivery_date"
//             value={formData.delivery_date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Distance:</label>
//           <input
//             type="number"
//             name="distance"
//             value={formData.distance}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Payment Method:</label>
//           <select
//             name="payment_method"
//             value={formData.payment_method}
//             onChange={handleChange}
//             required
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
//             required
//           />
//         </div>
//         <div>
//           <button disabled={isLoading} type="submit">
//             {isLoading ? "Order is Placing" : "Place Order"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default PlaceOrder;

// some of changes.....

// import React, { useState } from "react";
// import "./PlaceOrder.css";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { cartDetails } from "../Service/UserSlice";

// function PlaceOrder() {
//   const [formData, setFormData] = useState({
//     order_amount: 0,
//     delivery_address_id: "",
//     order_type: "",
//     branch_id: "", //set it default 10 if necessary like in Kabshah
//     delivery_time: "",
//     delivery_date: "",
//     distance: 0,
//     payment_method: "credit_card", // Default value set to 'Stripe'
//     payment_id: "",
//   });

//   const dispatch = useDispatch();
//   const cartData = useSelector(cartDetails);
//   console.log(cartData, "Data of the cart to get the id");
//   const [editable, setEditable] = useState(false); // Add editable state

//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = (lat2 - lat1) * (Math.PI / 180);
//     const dLon = (lon2 - lon1) * (Math.PI / 180);
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(lat1 * (Math.PI / 180)) *
//         Math.cos(lat2 * (Math.PI / 180)) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in kilometers
//     return distance;
//   };
//   const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price

//   // Retrieve total price from localStorage and set it to state
//   useEffect(() => {
//     // const TotalPrice = localStorage.getItem("totalPrice");
//     const TotalPrice = localStorage.getItem("totalPriceAfterTax");
//     if (TotalPrice) {
//       setTotalPrice(parseFloat(TotalPrice));
//       setFormData({ ...formData, order_amount: parseFloat(TotalPrice) });
//     }

//     // Fetch and update latitude and longitude values here from localStorage if needed
//   }, []); // Empty dependency array to run the effect only once
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");

//     if (!token) {
//       console.error("Token not available. Please authenticate.");
//       return;
//     }

//     const lat1 = parseFloat(localStorage.getItem("latitude_1"));
//     const lon1 = parseFloat(localStorage.getItem("longitude_1"));
//     const lat2 = parseFloat(localStorage.getItem("latitude_2"));
//     const lon2 = parseFloat(localStorage.getItem("longitude_2"));

//     if (isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) {
//       console.error("Invalid latitude or longitude values.");
//       return;
//     }
//     const distance = calculateDistance(lat1, lon1, lat2, lon2);

//     setIsLoading(true);

//     try {
//       const productIds = cartData?.cart?.map((item) => ({
//         product_id: item.id,
//         quantity: item.quantity,
//       }));

//       const formDataToSend = {
//         ...formData,
//         distance: distance,
//         payment_id: localStorage.getItem("payment_id"),
//         order_type: localStorage.getItem("deliverytype"),
//         delivery_address_id: localStorage.getItem("Delivery_Address_Id"),
//         branch_id: localStorage.getItem("branch_id"),
//         cart: productIds || [],
//       };

//       // Log the data being sent before making the API request
//       console.log("Data being sent:", formDataToSend);

//       const response = await fetch(
//         "https://cafescale.com/api/v1/customer/order/place",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(formDataToSend),
//         }
//       );

//       if (response.ok) {
//         console.log("Order placed successfully", response);
//         alert("Order placed successfully");
//         setIsLoading(false);
//       } else {
//         console.error("Error placing the order");
//         alert("Error placing the order");
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error: " + error.message);

//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {/* <br />
//       <br />
//       <br />
//       <br /> */}
//       <h2 className="form-placeOrder text-center" style={{ color: "white" }}>
//         Place an Order
//       </h2>
//       <form className="custom-order-form" onSubmit={handleSubmit}>
//         <div>
//           <label>Delivery Time:</label>
//           <input
//             type="time"
//             name="delivery_time"
//             value={formData.delivery_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Delivery Date:</label>
//           <input
//             type="date"
//             name="delivery_date"
//             value={formData.delivery_date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <button disabled={isLoading} type="submit">
//             {isLoading
//               ? "Order is Placing"
//               : `Place Order - $${totalPrice.toFixed(2)}`}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default PlaceOrder;
// 

// time slot issue....    
import React, { useState } from "react";
import "./PlaceOrder.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDetails } from "../Service/UserSlice";

function PlaceOrder() {
  const [formData, setFormData] = useState({
    order_amount: 0,
    delivery_address_id: "",
    order_type: "",
    branch_id: "", //set it default 10 if necessary like in Kabshah
    delivery_time: "",
    delivery_date: "",
    distance: 0,
    payment_method: "credit_card", // Default value set to 'Stripe'
    payment_id: "",
  });
// //////////////
const [selectedTab, setSelectedTab] = useState("today");
  const [selectedDate, setSelectedDate] = useState(""); // State to store selected date
  const [selectedTime, setSelectedTime] = useState(""); // State to store selected time
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  // Function to handle tab selection
  const handleTabChange = (tab) => {
    setSelectedTab(tab);

    // Get today's date
    const currentDate = new Date();

    // Calculate the date based on the selected tab
    let selectedDate;
    if (tab === "today") {
      selectedDate = currentDate.toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    } else if (tab === "tomorrow") {
      const tomorrow = new Date(currentDate);
      tomorrow.setDate(currentDate.getDate() + 1); // Get tomorrow's date
      selectedDate = tomorrow.toISOString().split("T")[0]; // Get tomorrow's date in YYYY-MM-DD format
    }

    setSelectedDate(selectedDate);
    setSelectedTime(""); // Reset selected time when date changes
  };

  // Function to handle date selection
  const handleDateSelection = (date) => {
    console.log("Selected date:", date);
    setSelectedDate(date);
    setSelectedTime(""); // Reset selected time when date changes
  };
  
  const handleTimeSelection = (time) => {
    console.log("Selected time:", time);
    setSelectedTime(time);
  };

  // Generate time slots with a 3-minute interval for a specific date
  const generateTimeSlots = (date) => {
    const timeSlots = [];
    const currentDate = new Date();
    const selectedDateTime = new Date(date);

    if (selectedDateTime.getDate() === currentDate.getDate()) {
      // If selected date is today
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      const roundedMinute = Math.ceil(currentMinute / 3) * 3; // Round up to nearest multiple of 3
      let hour = currentHour;
      let minute = roundedMinute;

      while (hour < 24) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        const time = `${formattedHour}:${formattedMinute}`;
        timeSlots.push(time);

        minute += 3;
        if (minute >= 60) {
          hour++;
          minute = 0;
        }
      }
    } else {
      // For tomorrow or future dates, generate full day time slots
      for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j += 3) {
          const formattedHour = i.toString().padStart(2, "0");
          const formattedMinute = j.toString().padStart(2, "0");
          const time = `${formattedHour}:${formattedMinute}`;
          timeSlots.push(time);
        }
      }
    }

    return timeSlots;
  };

  // Fetch available time slots based on selected date
  useEffect(() => {
    if (selectedDate) {
      const timeSlots = generateTimeSlots(selectedDate);
      setAvailableTimeSlots(timeSlots);
    }
  }, [selectedDate]);

  // Group time slots into intervals for tabs
  const groupTimeSlots = (timeSlots) => {
    const groupedTimeSlots = [];
    let startIdx = 0;

    while (startIdx < timeSlots.length) {
      const endIdx = Math.min(startIdx + 2, timeSlots.length - 1);
      groupedTimeSlots.push(timeSlots[startIdx] + "-" + timeSlots[endIdx]);
      startIdx = endIdx + 1;
    }

    return groupedTimeSlots;
  };

  const groupedSlots = groupTimeSlots(availableTimeSlots);






// //////////
  const dispatch = useDispatch();
  const cartData = useSelector(cartDetails);
  console.log(cartData, "Data of the cart to get the id");
  const [editable, setEditable] = useState(false); // Add editable state

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };
  const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price

  // Retrieve total price from localStorage and set it to state
  useEffect(() => {
    // const TotalPrice = localStorage.getItem("totalPrice");
    const TotalPrice = localStorage.getItem("totalPriceAfterTax");
    if (TotalPrice) {
      setTotalPrice(parseFloat(TotalPrice));
      setFormData({ ...formData, order_amount: parseFloat(TotalPrice) });
    }

    // Fetch and update latitude and longitude values here from localStorage if needed
  }, []); // Empty dependency array to run the effect only once
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }

    const lat1 = parseFloat(localStorage.getItem("latitude_1"));
    const lon1 = parseFloat(localStorage.getItem("longitude_1"));
    const lat2 = parseFloat(localStorage.getItem("latitude_2"));
    const lon2 = parseFloat(localStorage.getItem("longitude_2"));

    if (isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2)) {
      console.error("Invalid latitude or longitude values.");
      return;
    }
    const distance = calculateDistance(lat1, lon1, lat2, lon2);

    setIsLoading(true);

    try {
      const productIds = cartData?.cart?.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      }));

      const formDataToSend = {
  ...formData,
  distance: distance,
  payment_id: localStorage.getItem("payment_id"),
  order_type: localStorage.getItem("deliverytype"),
  delivery_address_id: localStorage.getItem("Delivery_Address_Id"),
  branch_id: localStorage.getItem("branch_id"),
  cart: productIds || [],
  delivery_date: selectedDate,
  delivery_time: selectedTime,
};


      // Log the data being sent before making the API request
      console.log("Data being sent:", formDataToSend);

      const response = await fetch(
        "https://cafescale.com/api/v1/customer/order/place",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formDataToSend),
        }
      );

      if (response.ok) {
        console.log("Order placed successfully", response);
        alert("Order placed successfully");
        setIsLoading(false);
      } else {
        console.error("Error placing the order");
        alert("Error placing the order");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error: " + error.message);

      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* <br />
      <br />
      <br />
      <br /> */}
      {/* <h2 className="form-placeOrder text-center" style={{ color: "white" }}>
        Place an Order
      </h2> */}
      <form className="custom-order-form" onSubmit={handleSubmit}>
        {/*  */}
        <h5>Preference Time</h5>
        <div className="tab-container">
          <div
            className={`tab ${selectedTab === "today" ? "active" : ""}`}
            onClick={() => handleTabChange("today")}
          >
            Today
          </div>
          <div
            className={`tab ${selectedTab === "tomorrow" ? "active" : ""}`}
            onClick={() => handleTabChange("tomorrow")}
          >
            Tomorrow
          </div>
        </div>

        <div className="time-slots-container">
          {groupedSlots.map((slot, index) => (
            <div
              key={index}
              className={`time-slot ${
                selectedTime === slot ? "selected" : ""
              }`}
              onClick={() => handleTimeSelection(slot)}
            >
              {slot}
            </div>
          ))}
        </div>
{/* ///////// */}
        <div>
          <button disabled={isLoading} type="submit">
            {isLoading
              ? "Order is Placing"
              : `Confirm Order`}
          </button>
          {/* <button disabled={isLoading} type="submit">
            {isLoading
              ? "Order is Placing"
              : `Confirm Order - $${totalPrice.toFixed(2)}`}
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;