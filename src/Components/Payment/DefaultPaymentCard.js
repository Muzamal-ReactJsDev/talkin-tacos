import React, { useState, useEffect } from "react";
import "./Payment.css";

function DefaultPaymentCard() {
  const [cardInfo, setCardInfo] = useState({
    payment_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way.
    const token = localStorage.getItem("token");
    console.log("Token in DefaultPaymentCard:", token);
    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }

    try {
      const response = await fetch(
        "https://cafescale.com/api/v1/customer/paymentmethod/setDefaultPaymentCard",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Use the saved token for authorization
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(cardInfo),
        }
      );

      if (response.ok) {
        // Payment method created successfully
        console.log(
          "Default Payment Card method created successfully",
          response
        );
        alert("Default Payment Card method created successfully");
      } else {
        // Handle error
        console.error("Error creating Default payment method");
        alert("Error creating Default payment method");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error:", error);
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="payment-form-container">
        <h1>Default Payment Card</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Payment Id</label>
            <input
              type="text"
              name="payment_id"
              className="input-field input-field-payment"
              value={cardInfo.payment_id}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Set Default Card
          </button>
        </form>
      </div>
    </>
  );
}

export default DefaultPaymentCard;
