import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../PopularItems/PopularItems.css";
import LightMenuImages from "../../Images/LightMenu";
import { PiHeart } from "react-icons/pi";
import { BsPlusCircle } from "react-icons/bs";
import Modal from "../Modal/Modal";
import {
  useGetAllImageProductsQuery,
  useGetAllPostQuery,
} from "../../Service/Service";
const LightMenu = () => {
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
    <div className="mt-4" id="lightMenuSection">
      <Container className="Products-Container">
        <Row className="Products-Row-1">
          <h2>Light Menu</h2>
          {!isLoading && !isLoading2 ? (
            <>
              {data[3]?.products?.map((dataofLightMenu, id) => (
                <>
                  <Col
                    className="Products-Col-1"
                    key={id}
                    onClick={() => ModalValue(dataofLightMenu)}
                    sm={5}
                  >
                    <Row>
                      <Col xs={7}>
                        <div className="p-3 Products-Col-1-div-1">
                          {" "}
                          <h5>{dataofLightMenu.name}</h5>
                          <p className="Products-descr-para">{dataofLightMenu.description}</p>
                          <div className="Product-Price">
                            <span>
                              <BsPlusCircle style={{ color: "06B906" }} /> ${" "}
                              {dataofLightMenu.price}
                            </span>

                            {/* <text className="mx-3">{Data.Icons}</text> */}
                          </div>
                        </div>
                      </Col>
                      <Col xs={5}>
                        <img
                          className="Products-Images"
                          // src={dataofLightMenu.Image}
                          src={`${data2?.base_urls?.product_image_url}/${dataofLightMenu.image}`}
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

export default LightMenu;
