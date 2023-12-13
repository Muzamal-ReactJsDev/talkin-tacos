// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { cartDetails } from "../../Service/UserSlice";

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


// time slot....!!!!!!!!!!


import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDetails } from "../../Service/UserSlice";

function PlaceOrder() {

    const [timeSlotsToday, setTimeSlotsToday] = useState([]);
    const [timeSlotsTomorrow, setTimeSlotsTomorrow] = useState([]);

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
//   /////////time slot.....
useEffect(() => {
    // Function to generate time slots at specified intervals
    const generateTimeSlots = (startHour, endHour, interval) => {
      const timeSlots = [];
      for (let h = startHour; h <= endHour; h++) {
        for (let m = 0; m < 60; m += interval) {
          const hourFormat = (`0${h}`).slice(-2);
          const minuteFormat = (`0${m}`).slice(-2);
          const timeSlot = `${hourFormat}:${minuteFormat}`;
          timeSlots.push(timeSlot);
        }
      }
      return timeSlots;
    };

    // Generate time slots for today (if delivery is today)
    const today = new Date();
    const deliveryDate = new Date(formData.delivery_date);
    if (
      deliveryDate.getDate() === today.getDate() &&
      deliveryDate.getMonth() === today.getMonth() &&
      deliveryDate.getFullYear() === today.getFullYear()
    ) {
      const currentTime = today.getHours();
      const timeSlots = generateTimeSlots(
        currentTime + 1, // Start generating slots from the next hour
        23, // Assuming delivery hours end at 11 PM
        3 // Change the interval (in minutes) as needed
      );
      setTimeSlotsToday(timeSlots);
    }

    // Generate time slots for tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const timeSlotsTomorrow = generateTimeSlots(0, 23, 3); // Change interval if needed
    setTimeSlotsTomorrow(timeSlotsTomorrow);
  }, [formData.delivery_date]);
//////////////

  return (
    <div>
      <h2 className="form-placeOrder text-center" style={{ color: "white" }}>
        Place an Order
      </h2>
      <form className="custom-order-form" onSubmit={handleSubmit}>

      <div>
        <label>Select Delivery Time for Today:</label>
        <select
          name="delivery_time_today"
          value={formData.delivery_time_today}
          onChange={handleChange}
          required
        >
          <option value="">Select a time for today</option>
          {formData.delivery_date === new Date().toISOString().split('T')[0] &&
            timeSlotsToday.map((slot, index) => (
              <option key={`today-${index}`} value={slot}>
                {slot}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label>Select Delivery Time for Tomorrow:</label>
        <select
          name="delivery_time_tomorrow"
          value={formData.delivery_time_tomorrow}
          onChange={handleChange}
          required
        >
          <option value="">Select a time for tomorrow</option>
          {formData.delivery_date !== new Date().toISOString().split('T')[0] &&
            timeSlotsTomorrow.map((slot, index) => (
              <option key={`tomorrow-${index}`} value={slot}>
                {slot}
              </option>
            ))}
        </select>
      </div>
        <div>
          <label>Delivery Date:</label>
          <input
            type="date"
            name="delivery_date"
            value={formData.delivery_date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button disabled={isLoading} type="submit">
            {isLoading
              ? "Order is Placing"
              : `Place Order - $${totalPrice.toFixed(2)}`}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
