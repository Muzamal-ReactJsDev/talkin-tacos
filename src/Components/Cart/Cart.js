// import React, { useEffect } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import "./Cart.css";
// import { useDispatch, useSelector } from "react-redux";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { addItemToCart, removeFromCart } from "../Service/UserSlice";
// const Cart = () => {
//   const dispatch = useDispatch();
//   const { cart, totalPrice } = useSelector((state) => state.app);
//   const handleRemoveItem = (item) => {
//     dispatch(removeFromCart(item));
//   };
//   const handleAddItem = (item) => {
//     dispatch(addItemToCart(item));
//   };
//   return (
//     <div>
//       <Container className="Cart-main-Container">
//         <Row className="mt-3">
//           <Col>
//             <h3>Your Order</h3>
//           </Col>
//         </Row>
//         <hr />
//         {cart.map((cartData, id) => {
//           const totalItemPrice = cartData.price * cartData.quantity; // Calculate total price for the item
//           return (
//             <>
//               <Row className="p-2" key={cartData.id}>
//                 <Col>
//                   <div className="Cart-button-div">
//                     <h5>{cartData.name}</h5>
//                   </div>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   {" "}
//                   <div className="cart-prices-items">
//                     <text>Edit</text>
//                     <text>
//                       ${totalItemPrice.toFixed(2)}&nbsp;&nbsp;&nbsp;&nbsp;
//                       <FaMinus
//                         onClick={() => handleRemoveItem(cartData)}
//                       />{" "}
//                       {cartData.quantity}
//                       <FaPlus onClick={() => handleAddItem(cartData)} />{" "}
//                     </text>
//                     {/* <img src={cartData.image} alt="cartimg" /> */}
//                   </div>
//                 </Col>
//               </Row>
//               <hr />
//             </>
//           );
//         })}
//       </Container>
//       <div className="cart-checkout-div">
//         <div>
//           <p style={{ color: "white", fontWeight: "bold" }}>
//             You'll earn{" "}
//             <span style={{ color: "#06b906" }}> {totalPrice.toFixed(2)}</span>{" "}
//             points with this order
//           </p>
//         </div>
//         <div className="w-100">
//           <Button className="cart-checkout-button my-3">
//             Checkout $: {totalPrice.toFixed(2)}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Cart;

// yahan hum Modal sy jo b layian gay jitni quantity b ho gi sb display ho gie sb display ho gie....!!!

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import { addItemToCart, removeFromCart } from "../Service/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import DiscountandCharges from "./DiscountandCharges";
import PaymentCardList from "../Payment/PaymentCardList";
const Cart = ({ closeCart }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { cart, totalPrice } = useSelector((state) => state.app);

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleAddItem = (item) => {
    dispatch(addItemToCart(item));
  };

  // localStorage.setItem("Order_Amount", totalPrice);

  const routeChange = () => {
    let path = `/Payment`;
    navigate(path);
  };

  return (
    <div>
      <Container className="Cart-main-Container">
        <Row className="mt-3">
          <Col>
            <h3>Your Order</h3>
          </Col>
        </Row>
        <hr />
        {cart?.map((cartData, id) => {
          const totalItemPrice = cartData.price * cartData.quantity; // Calculate total price for the item
          return (
            <div key={cartData.id}>
              <Row className="p-2">
                <Col>
                  <div className="Cart-button-div">
                    <h5>{cartData.name}</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="cart-prices-items">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      onClick={closeCart}
                    >
                      Edit
                    </Link>
                    {cartData.quantity > 0 && (
                      <text>
                        ${totalItemPrice.toFixed(2)}&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaMinus
                          onClick={() => handleRemoveItem(cartData)}
                        />{" "}
                        {cartData.quantity}
                        <FaPlus onClick={() => handleAddItem(cartData)} />{" "}
                      </text>
                    )}
                  </div>
                </Col>
              </Row>
              <hr />
            </div>
          );
        })}
      </Container>

      <Container>
        <DiscountandCharges />
      </Container>

      <Button className="cart-checkout-button my-2" onClick={routeChange}>
        Continue CheckOut
      </Button>

      {/* <Container fluid>
        <Row className="p-0">
          <Col className="p-0">
            <div className="cart-checkout-div">
              <div>
                <p style={{ color: "white", fontWeight: "bold" }}>
                  You'll earn{" "}
                  <span style={{ color: "#06b906" }}>
                    {" "}
                    {totalPrice.toFixed(2)}
                  </span>{" "}
                  points with this order
                </p>
              </div>
              <div className="w-100">
                <Button
                  onClick={routeChange}
                  className="cart-checkout-button my-3"
                >
                  Checkout $: {totalPrice.toFixed(2)}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Cart;
