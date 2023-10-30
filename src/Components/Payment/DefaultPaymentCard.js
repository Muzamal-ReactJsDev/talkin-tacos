import React, { useState } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function DefaultPaymentCard() {
  const navigate = useNavigate();
  const [cardInfo, setCardInfo] = useState({
    payment_id: "",
  });
  const [isLoading, setIsLoading] = useState(false); // New state variable

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log("Token in DefaultPaymentCard:", token);
    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }

    setIsLoading(true); // Set loading state

    try {
      const response = await fetch(
        "https://cafescale.com/api/v1/customer/paymentmethod/setDefaultPaymentCard",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(cardInfo),
        }
      );

      if (response.ok) {
        console.log(
          "Default Payment Card method created successfully",
          response
        );
        alert("Default Payment Card method created successfully");
        navigate("/PlaceOrder");
      } else {
        console.error("Error creating Default payment method");
        alert("Error creating Default payment method");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error:", error);
    } finally {
      setIsLoading(false); // Reset loading state
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
              autoComplete="off"
              name="payment_id"
              className="input-field input-field-payment"
              value={cardInfo.payment_id}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Submitting...." : "Set Default Card"}
          </button>
        </form>
      </div>
    </>
  );
}

export default DefaultPaymentCard;
