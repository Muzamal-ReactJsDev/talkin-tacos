import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../PopularItems/PopularItems.css";
import EntreesImages from "../../Images/Entrees";
import { PiHeart } from "react-icons/pi";
import { BsPlusCircle } from "react-icons/bs";
import {
  useGetAllImageProductsQuery,
  useGetAllPostQuery,
} from "../../Service/Service";
import Modal from "../Modal/Modal";
const Entrees = () => {
  const [modalValue, setModalValue] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAllPostQuery();
  console.log("data of All Posts Entree", data);
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    isFetching: isFetching2,
    isSuccess: isSuccess2,
  } = useGetAllImageProductsQuery();
  console.log(data2?.base_urls?.product_image_url, "Images for the Entree");
  const ModalValue = (items) => {
    setModalValue(true);
    setSelectedItem(items); // Set the selected item dataPopularItems
  };
  const closeModal = () => {
    setModalValue(false);
  };
  return (
    <div id="EntreeSection" className="mt-4">
      <Container className="Products-Container">
        <Row className="Products-Row-1">
          <h2>Entrees</h2>
          {!isLoading && !isLoading2 ? (
            <>
              {data[1].products?.map((dataofEntree, id) => (
                <>
                  <Col
                    className="Products-Col-1"
                    key={id}
                    sm={5}
                    onClick={() => ModalValue(dataofEntree)}
                  >
                    <Row>
                      <Col xs={7}>
                        <div className="p-3 Products-Col-1-div-1">
                          {" "}
                          <h5>{dataofEntree.name}</h5>
                          <p className="Products-descr-para">{dataofEntree.description}</p>
                          <div className="Product-Price">
                            <span>
                              <BsPlusCircle style={{ color: "06B906" }} /> ${" "}
                              {dataofEntree.price}
                            </span>

                            {/* <text className="mx-3">{dataofEntree.Icons}</text> */}
                          </div>
                        </div>
                      </Col>
                      <Col xs={5}>
                        <img
                          className="Products-Images"
                          src={`${data2?.base_urls?.product_image_url}/${dataofEntree.image}`}
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

export default Entrees;
