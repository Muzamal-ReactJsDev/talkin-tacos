import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "../Modal/Modal";
import "./PopularItems.css";
import ProductImages from "../../Images/popular";
import { PiHeart } from "react-icons/pi";
import { BsPlusCircle } from "react-icons/bs";
import { useState } from "react";
import {
  useGetAllImageProductsQuery,
  useGetAllPopularItemsQuery,
} from "../../Service/Service";
const PopularItems = () => {
  const [modalValue, setModalValue] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAllPopularItemsQuery();
  console.log("dataPopularItems of PopularItems", data);
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    isFetching: isFetching2,
    isSuccess: isSuccess2,
  } = useGetAllImageProductsQuery();
  console.log(data2?.base_urls?.product_image_url, "Images for the PuparItems");
  const ModalValue = (items) => {
    setModalValue(true);
    setSelectedItem(items); // Set the selected item dataPopularItems
  };
  const closeModal = () => {
    setModalValue(false);
  };
  return (
    <div id="PopularItemsSection">
      <Container className="Products-Container">
        <Row className="Products-Row-1">
          <h2>Popular Items</h2>

          {!isLoading && !isLoading2 ? (
            <>
              {data?.products?.map((dataPopularItems, id) => (
                <>
                  <Col
                    className="Products-Col-1"
                    key={id}
                    sm={5}
                    // onClick={ModalValue}
                    onClick={() => ModalValue(dataPopularItems)}
                  >
                    <Row>
                      <Col xs={7} className="">
                        <div className="p-3 Products-Col-1-div-1">
                          {" "}
                          <h5>{dataPopularItems.name}</h5>
                          <p className="Products-descr-para mb-0">{dataPopularItems.description}</p>
                          <div className="Product-Price">
                            <div>
                              <BsPlusCircle style={{ color: "06B906" }} /> ${" "}
                              {dataPopularItems.price}
                            </div>

                            {/* <text className="mx-3">{dataPopularItems.Icons}</text> */}
                          </div>
                        </div>
                      </Col>
                      <Col xs={5} className="Products-Col-2">
                        <img
                          className="Products-Images"
                          src={`${data2?.base_urls?.product_image_url}/${dataPopularItems.image}`}
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

export default PopularItems;
