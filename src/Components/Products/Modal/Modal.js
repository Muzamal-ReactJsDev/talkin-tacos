// import React, { useState } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import { FaStar, FaHeart } from "react-icons/fa";
// import { RiCloseLine } from "react-icons/ri";
// import Modal from "react-bootstrap/Modal";
// import "./Modal.css";
// import { HiPlusCircle } from "react-icons/hi";
// import { useDispatch } from "react-redux";
// import { addItemToCart } from "../../Service/UserSlice";
// import {
//   useGetAllImageProductsQuery,
//   useGetAllRecomendedProductQuery,
// } from "../../Service/Service";
// function Example({ show, handleOpen, handleClose, modalData, modalImage }) {
//   const [fullscreen, setFullscreen] = useState(true);
//   const dispatch = useDispatch();
//   const handleAddToCart = (item) => {
//     const cartItem = {
//       // image: modalImage,
//       name: item.name,
//       price: item.price,
//     };
//     dispatch(addItemToCart(cartItem)); // Dispatch the addItemToCart action from the CartSlice
//   };
//   // if (loading) {
//   //   return <h5>Data is Loading.......!!</h5>;
//   // }

//   const { data, isLoading, isError, isFetching, isSuccess } =
//     useGetAllRecomendedProductQuery();
//   console.log("data of Sides in the Modal", data);
//   const {
//     data: data2,
//     isLoading: isLoading2,
//     isError: isError2,
//     isFetching: isFetching2,
//     isSuccess: isSuccess2,
//   } = useGetAllImageProductsQuery();
//   console.log(
//     data2?.base_urls?.product_image_url,
//     "Images for the Modal Sides"
//   );
//   return (
//     <>
//       <span className="modal-main-modal">
//         <Modal fullscreen={fullscreen} show={show} onHide={handleClose}>
//           {/* <RiCloseLine className="modal-close-icons-main" onClick={handleClose} /> */}
//           <Modal.Header closeButton></Modal.Header>
//           <Modal.Body className="p-0">
//             <Container fluid>
//               <Row>
//                 <Col md={4} className="modal-main-col-1">
//                   <div className="Modal-div-1">
//                     <div>
//                       <img
//                         className="Modal-Images"
//                         src={
//                           modalImage
//                         } /* Use the actual image prop from modalData */
//                         alt="ModalImg"
//                       />
//                     </div>
//                     <div>
//                       <h1>{modalData.name}</h1>{" "}
//                       {/* Use the actual name prop from modalData */}
//                     </div>
//                     <div>
//                       <p>{modalData.description}</p>{" "}
//                       {/* Use the actual description prop from modalData */}
//                     </div>
//                     <div>
//                       <text>
//                         <FaStar /> 4.8
//                       </text>
//                       <text>
//                         <FaHeart /> 63
//                       </text>
//                     </div>
//                   </div>
//                 </Col>
//                 <Col md={8} className="modal-sides-col-main">
//                   {!isLoading && !isLoading2 ? (
//                     <>
//                       {data?.products?.map((dataModalProducts, id) => (
//                         <>
//                           <Row className="mt-3 modal-sides-map-row" key={id}>
//                             <Col xs={6} className="p-0">
//                               <div>{dataModalProducts.name}</div>
//                               <div className="modal-sides-prices mt-3">
//                                 <text
//                                   onClick={() =>
//                                     handleAddToCart(dataModalProducts)
//                                   }
//                                 >
//                                   <HiPlusCircle className="modal-sides-icon" />
//                                 </text>
//                                 <text className="ms-2">
//                                   . $ {dataModalProducts.price}
//                                 </text>
//                               </div>
//                             </Col>
//                             <Col xs={3} className="p-0">
//                               <img
//                                 className="modal-sides-images"
//                                 src={`${data2?.base_urls?.product_image_url}/${dataModalProducts.image}`}
//                                 alt="ModalImg"
//                               />
//                             </Col>

//                             {/* <hr className="modal-side-hr mt-3" /> */}
//                           </Row>
//                         </>
//                       ))}
//                     </>
//                   ) : (
//                     <h6>Loading....... Please Wait</h6>
//                   )}
//                   <div className="Modal-cart-button-div">
//                     <Button
//                       onClick={() => handleAddToCart(modalData)}
//                       className="Modal-Button-Cart"
//                     >
//                       Add Items . $ {modalData.price}
//                     </Button>
//                   </div>
//                 </Col>
//               </Row>
//             </Container>
//           </Modal.Body>
//         </Modal>
//       </span>
//     </>
//   );
// }
// export default Example;

// import React, { useState } from "react";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import { FaStar, FaHeart, FaMinus, FaPlus } from "react-icons/fa";
// import { RiCloseLine } from "react-icons/ri";
// import Modal from "react-bootstrap/Modal";
// import "./Modal.css";
// import { HiPlusCircle } from "react-icons/hi";
// import { useDispatch } from "react-redux";
// import { addItemToCart, removeFromCart } from "../../Service/UserSlice";
// import {
//   useGetAllImageProductsQuery,
//   useGetAllRecomendedProductQuery,
// } from "../../Service/Service";
// import { useNavigate } from "react-router-dom";
// function Example({ show, handleOpen, handleClose, modalData, modalImage }) {
//   const [fullscreen, setFullscreen] = useState(true);
//   const dispatch = useDispatch();
//   const [showalert, setShowAlert] = useState(false);
//   const handleAddToCart = () => {
// dispatch(addItemToCart(modalData));

// // Show the alert
// setShowAlert(true);
// // Close the modal
// //  handleClose();

// setTimeout(() => {
//   handleClose();
// }, 2000);

// // Hide the alert after 1.5 seconds
// setTimeout(() => {
//   setShowAlert(false);
// }, 1500); // 1500 milliseconds (1.5 seconds)
//   };
//   // this is for the Api which i show in the Modal....////
//   const handleModalAddToCart = (item) => {
//     dispatch(addItemToCart(item)); // Dispatch the addItemToCart action from the CartSlice
//     setShowAlert(true);
//     setTimeout(() => {
//       setShowAlert(false);
//     }, 1500);
//   };
//   // const handleShowAlert=
//   // if (loading) {
//   //   return <h5>Data is Loading.......!!</h5>;
//   // }
//   const { data, isLoading, isError, isFetching, isSuccess } =
//     useGetAllRecomendedProductQuery();
//   console.log("data of Sides in the Modal", data);
//   const {
//     data: data2,
//     isLoading: isLoading2,
//     isError: isError2,
//     isFetching: isFetching2,
//     isSuccess: isSuccess2,
//   } = useGetAllImageProductsQuery();
//   console.log(
//     data2?.base_urls?.product_image_url,
//     "Images for the Modal Sides"
//   );
//   return (
//     <>
//       <Modal
//         fullscreen={fullscreen}
//         show={show}
//         onHide={handleClose}
//         className="custom-modal"
//       >
//         {/* <RiCloseLine className="modal-close-icons-main" onClick={handleClose} /> */}
//         <Modal.Header closeButton></Modal.Header>

//         <Modal.Body className="p-0 mt-3 custom-modal-body">
//           <Container fluid>
//             <Row>
//               <Col md={4} className="modal-main-col-1">
//                 <div className="Modal-div-1">
//                   <div>
//                     <img
//                       className="Modal-Images"
//                       src={
//                         modalImage
//                       } /* Use the actual image prop from modalData */
//                       alt="ModalImg"
//                     />
//                   </div>
//                   <div>
//                     <h1>{modalData.name}</h1>{" "}
//                     {/* Use the actual name prop from modalData */}
//                   </div>
//                   <div>
//                     <p>{modalData.description}</p>{" "}
//                     {/* Use the actual description prop from modalData */}
//                   </div>
//                   <div>
//                     <text>
//                       <FaStar /> 4.8
//                     </text>
//                     <text>
//                       <FaHeart /> 63
//                     </text>
//                   </div>
//                 </div>
//               </Col>

//               {/* this is for the Api in the modal */}

//               <Col md={8} className="modal-sides-col-main">
//                 <div className="quantity-div" style={{ color: "white" }}>
//                   <div>
//                     {" "}
//                     Quantity{" "}
//                     <span>
//                       <FaMinus /> <FaPlus />
//                     </span>
//                   </div>
//                 </div>

//                 {!isLoading && !isLoading2 ? (
//                   <>
//                     {data?.products?.map((dataModalProducts, id) => (
//                       <>
//                         <Row className="mt-3 modal-sides-map-row" key={id}>
//                           <Col xs={6} className="p-0">
//                             <div>{dataModalProducts.name}</div>
//                             <div className="modal-sides-prices mt-3">
//                               <text
//                                 onClick={() =>
//                                   handleModalAddToCart(dataModalProducts)
//                                 }
//                               >
//                                 <HiPlusCircle className="modal-sides-icon" />
//                               </text>
//                               <text className="ms-2">
//                                 . $ {dataModalProducts.price}
//                               </text>
//                             </div>
//                           </Col>
//                           <Col xs={3} className="p-0">
//                             <img
//                               className="modal-sides-images"
//                               src={`${data2?.base_urls?.product_image_url}/${dataModalProducts.image}`}
//                               alt="ModalImg"
//                             />
//                           </Col>

//                           {/* <hr className="modal-side-hr mt-3" /> */}
//                         </Row>
//                       </>
//                     ))}
//                   </>
//                 ) : (
//                   <h6>Loading....... Please Wait</h6>
//                 )}
//                 <div className="Modal-cart-button-div">
//                   <Button
//                     onClick={() => {
//                       handleAddToCart(modalData);

//                       setShowAlert(true);
//                     }}
//                     className="Modal-Button-Cart"
//                   >
//                     Add Items . $ {modalData.price}

//                   </Button>
//                 </div>

//                 {showalert && (
//                   <>
//                     <div className="form-alerts toasts">
//                       <div
//                         role="alert"
//                         className="fade form-warning alert alert-primary alert-dismissible show"
//                       >
//                         <div className="d-flex align-items-center">
//                           <img
//                             alt="noti-icon"
//                             src="https://brand.workingsolutions.com/components/images/ghost.svg"
//                             width="28"
//                             className="me-4"
//                           />
//                           <p>
//                             <b className="d-flex">
//                               Data sent to cart Successfully
//                             </b>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </Col>
//             </Row>
//           </Container>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }
// export default Example;

// yahan hum quantity wala option send karian gay....!!!

import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaStar, FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";
import { HiPlusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Service/UserSlice";
import {
  useGetAllImageProductsQuery,
  useGetAllRecomendedProductQuery,
} from "../../Service/Service";
import { useNavigate } from "react-router-dom";
function Example({ show, handleOpen, handleClose, modalData, modalImage }) {
  const [fullscreen, setFullscreen] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [showalert, setShowAlert] = useState(false);
  useEffect(() => {
    if (!show) {
      // Reset quantity to 1 when modal is closed
      setQuantity(1);
    }
  }, [show]);

  const handleAddToCart = () => {
    // Dispatch the addCartItem action with the selected item and quantity
    dispatch(addItemToCart(modalData));
    // Show the alert
    setShowAlert(true);
    // Close the modal
    //  handleClose();

    setTimeout(() => {
      handleClose();
    }, 2000);

    // Hide the alert after 1.5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 1500); // 1500 milliseconds (1.5 seconds)
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAmount = () => {
    return modalData.price * quantity;
  };

  const addToCartHandler = () => {
    dispatch(
      addItemToCart({
        modalData,
        quantity,
      })
    );
    // handleClose();
  };
const callingBoth=()=>{
  handleAmount()
  addToCartHandler()
}

  
  // this is for the Api which i show in the Modal....////
  const handleModalAddToCart = (item) => {
    dispatch(addItemToCart(item)); // Dispatch the addItemToCart action from the CartSlice
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  // if (loading) {
  //   return <h5>Data is Loading.......!!</h5>;
  // }
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAllRecomendedProductQuery();
  console.log("data of Sides in the Modal", data);
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    isFetching: isFetching2,
    isSuccess: isSuccess2,
  } = useGetAllImageProductsQuery();
  console.log(
    data2?.base_urls?.product_image_url,
    "Images for the Modal Sides"
  );
  return (
    <>
      <Modal
        fullscreen={fullscreen}
        show={show}
        onHide={handleClose}
        className="custom-modal"
      >
        {/* <RiCloseLine className="modal-close-icons-main" onClick={handleClose} /> */}
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body className="p-0 mt-3 custom-modal-body">
          <Container fluid>
            <Row>
              <Col md={4} className="modal-main-col-1">
                <div className="Modal-div-1">
                  <div>
                    <img
                      className="Modal-Images"
                      src={
                        modalImage
                      } /* Use the actual image prop from modalData */
                      alt="ModalImg"
                    />
                  </div>
                  <div>
                    <h1>{modalData.name}</h1>{" "}
                    {/* Use the actual name prop from modalData */}
                  </div>
                  <div>
                    <p>{modalData.description}</p>{" "}
                    {/* Use the actual description prop from modalData */}
                  </div>
                  <div>
                    <p> Price: &nbsp;${modalData.price}</p>{" "}
                    {/* Use the actual description prop from modalData */}
                  </div>
                  <div>
                    <text>
                      <FaStar /> 4.8
                    </text>
                    <text>
                      <FaHeart /> 63
                    </text>
                  </div>
                </div>
              </Col>

              {/* this is for the Api in the modal */}

              <Col md={8} className="modal-sides-col-main">
                <div className="quantity-div" style={{ color: "white" }}>
                  <div>
                    {" "}
                    Quantity{" "}
                    <span>
                      <FaMinus onClick={handleDecreaseQuantity} />
                      {quantity} <FaPlus onClick={handleIncreaseQuantity} />
                    </span>
                  </div>
                </div>

                {!isLoading && !isLoading2 ? (
                  <>
                    {data?.products?.map((dataModalProducts, id) => (
                      <>
                        <Row className="mt-3 modal-sides-map-row" key={id}>
                          <Col xs={6} className="p-0">
                            <div>{dataModalProducts.name}</div>
                            <div className="modal-sides-prices mt-3">
                              <text
                                onClick={() =>
                                  handleModalAddToCart(dataModalProducts)
                                }
                              >
                                <HiPlusCircle className="modal-sides-icon" />
                              </text>
                              <text className="ms-2">
                              . $ {dataModalProducts.price}
                              </text>
                            </div>
                          </Col>
                          <Col xs={3} className="p-0">
                            <img
                              className="modal-sides-images"
                              src={`${data2?.base_urls?.product_image_url}/${dataModalProducts.image}`}
                              alt="ModalImg"
                            />
                          </Col>
                          {/* <hr className="modal-side-hr mt-3" /> */}
                        </Row>
                      </>
                    ))}
                  </>
                ) : (
                  <h6>Loading....... Please Wait</h6>
                )}
                
                <div className="Modal-cart-button-div">
                Total Amount Is . $ {handleAmount()}
               
                  <Button
                    onClick={() => {
                      handleAddToCart(modalData);

                      setShowAlert(true);
                    }}
                    className="Modal-Button-Cart my-3"
                  >
                    {/* ya b  use kr skty hain ya oper wala b...!!
                          Add Items . $ {handleAmount} */}
                    Add Items to cart{addToCartHandler}
              
                  </Button>
                </div>

                {showalert && (
                  <>
                    <div className="form-alerts toasts">
                      <div
                        role="alert"
                        className="fade form-warning alert alert-primary alert-dismissible show"
                      >
                        <div className="d-flex align-items-center">
                          <img
                            alt="noti-icon"
                            src="https://brand.workingsolutions.com/components/images/ghost.svg"
                            width="28"
                            className="me-4"
                          />
                          <p>
                            <b className="d-flex">
                              Data sent to cart Successfully
                            </b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Example;
