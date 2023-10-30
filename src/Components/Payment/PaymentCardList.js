// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import DefaultPaymentCard from "./DefaultPaymentCard";

// const PaymentCardList = () => {
//   const [paymentCards, setPaymentCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     // Replace 'YOUR_TOKEN' with your actual token
//     const token = localStorage.getItem("token");
//     console.log("Token in Payment Card List:", token);
//     if (!token) {
//       console.error("Token not available. Please authenticate.");
//       return;
//     }

//     axios
//       .post(
//         "https://cafescale.com/api/v1/customer/paymentmethod/getPaymentCards",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         setPaymentCards(response.data);
//         console.log(response.data, "Payment Card List");
//         // alert("Payment Card List created successfully");
//         setLoading(false); // Set loading to false when the data is loaded
//       })
//       .catch((error) => {
//         console.error("Error in the Payment Card List ", error);
//         setLoading(false); // Set loading to false on error as well
//       });
//   }, []); // Empty dependency array to run the effect only once when the component mounts

//   return (
//     <>
//       <Container style={{ color: "white" }}>
//         <Row>
//           <Col>
//             <div className="">
//               <br />
//               <br />
//               <br />
//               <br />
//               <br />
//               <h1>Payment Cards</h1>
//               {loading ? (
//                 <p>Loading...</p>
//               ) : (
//                 <ul>
//                   {paymentCards.map((card) => (
//                     <li key={card.id}>
//                       {/* Render the card details as needed */}
//                       <span className="listfont">Id: </span> {card.id}&nbsp;
//                       &nbsp; &nbsp;
//                       <span className="listfont">User Id : </span>
//                       {card.user_id}
//                       &nbsp; &nbsp; &nbsp;
//                       <span className="listfont">Payment-Id: </span>
//                       {card.payment_id}&nbsp; &nbsp; &nbsp;
//                       <span className="listfont">Payment Type: </span>
//                       {card.payment_type}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <div>
//         <DefaultPaymentCard />
//       </div>
//     </>
//   );
// };

// export default PaymentCardList;

// this is for If List is empty......

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DefaultPaymentCard from "./DefaultPaymentCard";

const PaymentCardList = () => {
  const [paymentCards, setPaymentCards] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in the Payment Card List", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Container style={{ color: "white" }}>
        <Row>
          <Col>
            <div className="">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>Payment Cards</h1>
              {paymentCards.length === 0 ? (
                <p>List is empty</p>
              ) : (
                <>
                  {loading ? <p>Loading...</p> : null}
                  <ul>
                    {paymentCards.map((card) => (
                      <li key={card.id}>
                        {/* Render the card details as needed */}
                        <span className="listfont">Id: </span> {card.id}
                        &nbsp;&nbsp;&nbsp;
                        <span className="listfont">User Id : </span>{" "}
                        {card.user_id}&nbsp;&nbsp;&nbsp;
                        <span className="listfont">Payment-Id: </span>{" "}
                        {card.payment_id}&nbsp;&nbsp;&nbsp;
                        <span className="listfont">Payment Type: </span>{" "}
                        {card.payment_type}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <DefaultPaymentCard />
      </div>
    </>
  );
};

export default PaymentCardList;
