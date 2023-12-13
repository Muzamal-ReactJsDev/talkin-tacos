import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PaymentCardList.css";
import { useNavigate } from "react-router-dom";
import { FaRegCreditCard } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import PlaceOrder from "./PlaceOrder";
const PaymentCardList = () => {
  const [paymentCards, setPaymentCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }

    axios
      .post(
        "https://cafescale.com/api/v1/customer/paymentmethod/getPaymentCards",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setPaymentCards(response.data);
        console.log(response, "response of list");
        localStorage.setItem("payment_id", response.data[0].payment_id);
        // navigate("/AddAddress");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in the Payment Card List", error);
        setLoading(false);
      });
  }, []);
  const handleLocationClick = (selectedAddress) => {
    console.log(selectedAddress,"hh")
  };

  return (
    <>
      <Container className="card-container">
        <Row>
          <h1 className="mb-3" style={{ color: "white" }}>
            Payment Cards
          </h1>
          {paymentCards.length === 0 ? (
            //
            <p>List is empty</p>
          ) : (
            <>
              {loading ? <p>Loading...</p> : null}

              {paymentCards.map((card) => (
                <Col md={6} xs={12} >
                  <div key={card.id} className="card-main-div"
                  onClick={() => {
                    handleLocationClick(card);
                  }}>
                    <div className="card-style">
                      <FaRegCreditCard className="cardIcon" />
                    </div>
                    <div>
                      <div className="card-style">{card.customer_account}</div>{" "}
                      <div className="card-style">
                        ****{card.card_no}
                      </div>{" "}
                    </div>
                    <div className="card-style">
                      <AiFillDelete className="deleteIcon" />
                    </div>{" "}
                  </div>
                </Col>
              ))}
            </>
          )}
        </Row>
      </Container>
      <div>
        <PlaceOrder />
      </div>
    </>
  );
};

export default PaymentCardList;

// /////////