import React, { useState } from "react";
import axios from "axios";

function PlaceOrder() {
  const [orderData, setOrderData] = useState({
    name: "",
    quantity: 0,
    price: 0,
  });

  const OrderPlacement = () => {
    axios
      .post("your-api-endpoint-url", orderData)
      .then((response) => {
        // Handle a successful response here
        console.log("Order placed successfully:", response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error placing order:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={orderData.name}
        onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={orderData.quantity}
        onChange={(e) =>
          setOrderData({ ...orderData, quantity: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={orderData.price}
        onChange={(e) => setOrderData({ ...orderData, price: e.target.value })}
      />

      <button onClick={OrderPlacement}>Place Order</button>
    </div>
  );
}

export default PlaceOrder;
