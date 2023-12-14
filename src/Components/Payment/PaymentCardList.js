// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import "./PaymentCardList.css";
// import { useNavigate } from "react-router-dom";
// import { FaCheck, FaRegCreditCard } from "react-icons/fa";
// import { AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai"; // Import the check circle icon
// import PlaceOrder from "./PlaceOrder";

// const PaymentCardList = () => {
//   const [paymentCards, setPaymentCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card
//   const navigate = useNavigate();

//   useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("Token not available. Please authenticate.");
//           return;
//         }

//         axios
//           .post(
//             "https://cafescale.com/api/v1/customer/paymentmethod/getPaymentCards",
//             {},
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           )
//           .then((response) => {
//             setPaymentCards(response.data);
//             console.log(response, "response of list");
//             localStorage.setItem("payment_id", response.data[0].payment_id);
//             // navigate("/AddAddress");
//             setLoading(false);
//           })
//           .catch((error) => {
//             console.error("Error in the Payment Card List", error);
//             setLoading(false);
//           });
//       }, []);

//   const handleLocationClick = (selectedAddress) => {
//     console.log(selectedAddress.payment_id, "Payment_id");

//     // Call API to set the selected card as default
//     const token = localStorage.getItem("token");
//     axios
//       .post(
//         "https://cafescale.com/api/v1/customer/paymentmethod/setDefaultPaymentCard",
//         { payment_id: selectedAddress.payment_id },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         console.log("Default card set successfully.", response);
//         setSelectedCard(selectedAddress.payment_id); // Update the selected card state
//         localStorage.setItem("payment_id", selectedAddress.payment_id);
//       })
//       .catch((error) => {
//         console.error("Error setting default card.", error);
//       });
//   };

//   return (
//     <>
//       <Container className="card-container">
//         <Row>
//           <h1 className="mb-3" style={{ color: "white" }}>
//             Payment Cards
//           </h1>
//           {paymentCards.length === 0 ? (
//             <p>List is empty</p>
//           ) : (
//             <>
//               {loading ? <p>Loading...</p> : null}
//               {paymentCards.map((card) => (
//                 <Col md={6} xs={12} key={card.id}>
//                   <div
//                     className={`card-main-div ${
//                       card.payment_id === selectedCard ? "selected-card" : ""
//                     }`}
//                     onClick={() => {
//                       handleLocationClick(card);
//                     }}
//                   >
//                     <div className="card-style">
//                       <FaRegCreditCard className="cardIcon" />
//                     </div>
//                     <div>
//                       <div className="card-style">{card.customer_account}</div>{" "}
//                       <div className="card-style">****{card.card_no}</div>{" "}
//                     </div>
//                     <div className="card-style">
//                       <AiFillDelete className="deleteIcon" />
//                     </div>{" "}
//                     {card.payment_id === selectedCard && ( // Render tick sign for selected card
//                       <div className="tick-icon">
// <FaCheck />
//                       </div>
//                     )}
//                   </div>
//                 </Col>
//               ))}
//             </>
//           )}
//         </Row>
//       </Container>
      // <div>
      //   <PlaceOrder />
      // </div>
//     </>
//   );
// };

// export default PaymentCardList;

// // /////////

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PaymentCardList.css";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaRegCreditCard } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import PlaceOrder from "./PlaceOrder";

const PaymentCardList = () => {
  const [paymentCards, setPaymentCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [defaultCardId, setDefaultCardId] = useState(null);
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
        if (response.data.length > 0 && defaultCardId === null) {
          setDefaultCardId(response.data[0].payment_id); // Set the first card as default if defaultCardId is null
          localStorage.setItem("payment_id", response.data[0].payment_id);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in the Payment Card List", error);
        setLoading(false);
      });
  }, [defaultCardId]);

  const handleLocationClick = (selectedCard) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }

    axios
      .post(
        "https://cafescale.com/api/v1/customer/paymentmethod/setDefaultPaymentCard",
        {
          payment_id: selectedCard.payment_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
       
        console.log("Selected card set as default:", selectedCard.payment_id);
        setDefaultCardId(selectedCard.payment_id);
        localStorage.setItem("payment_id", selectedCard.payment_id);
        // Update UI or perform further actions based on the response if needed
      })
      .catch((error) => {
        console.error("Error setting default card:", error);
      });
  };

  return (
    <>
      <Container className="card-container">
        <Row>
          <h1 className="mb-3" style={{ color: "white" }}>
            Payment Cards
          </h1>
          {paymentCards.length === 0 ? (
            <p>List is empty</p>
          ) : (
            <>
              {loading ? <p>Loading...</p> : null}

              {paymentCards.map((card) => (
                <Col md={6} xs={12} key={card.id}>
                  <div
                    className={`card-main-div ${
                      card.payment_id === defaultCardId ? "default-card" : ""
                    }`}
                    onClick={() => {
                      handleLocationClick(card);
                    }}
                  >
                    <div className="card-style">
                      <FaRegCreditCard className="cardIcon" />
                    </div>
                    <div>
                      <div className="card-style">{card.customer_account}</div>
                      <div className="card-style">****{card.card_no}</div>
                    </div>
                    <div className="card-style">
                      <AiFillDelete className="deleteIcon" />
                    </div>
                    {card.payment_id === defaultCardId && (
                      <div className="tick-sign">
                        {" "}
                        <FaCheck />
                      </div>
                    )}
                  </div>
                </Col>
              ))}
            </>
          )}
        </Row>
        <PlaceOrder/>
      </Container>

    </>
  );
};

export default PaymentCardList;
