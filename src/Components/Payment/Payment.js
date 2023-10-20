import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
function PaymentMethodForm() {
  const navigate = useNavigate();
  const [cardInfo, setCardInfo] = useState({
    card_no: "",
    exp_month: "",
    exp_year: "",
    cvc: "",
    card_holder_name: "",
  });

  // const [token, setToken] = useState(null);

  // useEffect(() => {

  //   // Retrieve the token from local storage on component mount
  //   const storedToken = localStorage.getItem('authToken');
  //   console.log(storedToken)
  //   // if (token) {
  //   //   setToken(token);
  //   // }
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    console.log("Token in Payment.js:", token);
    e.preventDefault();
    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }
    try {
      const response = await fetch(
        "https://cafescale.com/api/v1/customer/paymentmethod/createPaymentMethod",
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
        console.log("Payment method created successfully");
        alert("Payment method created successfully");
        navigate("/PaymentCardList");
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
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="payment-form-container">
        <h1>Create Payment Method</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Card Number</label>
            <input
              type="text"
              name="card_no"
              className="input-field input-field-payment"
              value={cardInfo.card_no}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Expiration Month</label>
            <input
              type="text"
              className="input-field input-field-payment"
              name="exp_month"
              value={cardInfo.exp_month}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Expiration Year</label>
            <input
              type="text"
              name="exp_year"
              className="input-field input-field-payment"
              value={cardInfo.exp_year}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>CVC</label>
            <input
              type="text"
              className="input-field input-field-payment"
              name="cvc"
              value={cardInfo.cvc}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Card Holder Name</label>
            <input
              type="text"
              name="card_holder_name"
              className="input-field input-field-payment"
              value={cardInfo.card_holder_name}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Create Payment Method
          </button>
        </form>
      </div>
    </>
  );
}

export default PaymentMethodForm;