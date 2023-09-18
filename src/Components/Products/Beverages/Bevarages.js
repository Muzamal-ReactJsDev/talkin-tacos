import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../PopularItems/PopularItems.css";
import BeveragesImages from "../../Images/Beverages";
import { PiHeart } from "react-icons/pi";
import { BsPlusCircle } from "react-icons/bs";
import Modal from "../Modal/Modal";
import {
  useGetAllImageProductsQuery,
  useGetAllPostQuery,
} from "../../Service/Service";
const Beverages = () => {
  const [modalValue, setModalValue] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAllPostQuery();
  console.log("data of All Posts Sides", data);
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    isFetching: isFetching2,
    isSuccess: isSuccess2,
  } = useGetAllImageProductsQuery();
  console.log(data2?.base_urls?.product_image_url, "Images for the Light Menu");
  const ModalValue = (items) => {
    setModalValue(true);
    setSelectedItem(items); // Set the selected item dataPopularItems
  };
  const closeModal = () => {
    setModalValue(false);
  };
  return (
    <div id="BeveragesSection" className="mt-4">
      <Container className="Products-Container">
        <Row className="Products-Row-1">
          <h2>Beverages</h2>
          {!isLoading && !isLoading2 ? (
            <>
              {data[4]?.products?.map((dataofBeverages, id) => (
                <>
                  <Col
                    className="Products-Col-1"
                    key={id}
                    sm={5}
                    onClick={() => ModalValue(dataofBeverages)}
                  >
                    <Row>
                      <Col xs={7}>
                        <div className="p-3 Products-Col-1-div-1">
                          {" "}
                          <h5>{dataofBeverages.name}</h5>
                          <p className="Products-descr-para">{dataofBeverages.description}</p>
                          <div className="Product-Price">
                            <span>
                              <BsPlusCircle style={{ color: "06B906" }} /> ${" "}
                              {dataofBeverages.price}
                            </span>

                            {/* <text className="mx-3">{Data.Icons}</text> */}
                          </div>
                        </div>
                      </Col>
                      <Col xs={5}>
                        <img
                          className="Products-Images"
                          src={`${data2?.base_urls?.product_image_url}/${dataofBeverages.image}`}
                          alt="Products"
                        />
                      </Col>
                    </Row>
                  </Col>
                </>
              ))}
            </>
          ) : (
            <h6>Loading....... Please Wait</h6>
          )}
        </Row>
      </Container>
      {modalValue && (
        <Modal
          show={modalValue}
          handleOpen={ModalValue}
          handleClose={closeModal}
          modalImage={`${data2?.base_urls?.product_image_url}/${selectedItem.image}`}
          modalData={selectedItem} // Pass the selected item dataPopularItems to the modal
        />
      )}
    </div>
  );
};

export default Beverages;
