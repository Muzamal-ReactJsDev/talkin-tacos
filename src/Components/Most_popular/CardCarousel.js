import React, { useState } from "react";
import "./CardCarousel.css"; // Create this CSS file for styling
import { FaPlus } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import {
  useGetAllImageProductsQuery,
  useGetAllPopularItemsQuery,
} from "../Service/Service";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import SideBar from "../Navbar/SideBar";
const CardCarousel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="scrollable-cards-container">
            <div className="scrollable-cards-wrapper">
              {!isLoading && !isLoading2 ? (
                <>
                  {data?.products?.map((dataPopularItemsScrollar, id) => (
                    <>
                      <div
                        key={dataPopularItemsScrollar.id}
                        className="CardCarousel"
                      >
                        <img
                          // src={dataPopularItemsScrollar.image}
                          src={`${data2?.base_urls?.product_image_url}/${dataPopularItemsScrollar.image}`}
                          className="CardCarousel-img"
                          alt="ImageScroll"
                        />
                        <div style={{ padding: "15px", color: "white" }}>
                          <text>${dataPopularItemsScrollar.price}</text>
                          <div className="CardCarousel-links-items-div">
                            <Link
                              className=" CardCarousel-links-items-cart"
                              onClick={() => {
                                setIsSidebarOpen(true);
                              }}
                            >
                              {/* {card.cart} */}
                              <text>Add Items</text>
                              <FaPlus className="CardCarousel-plus ms-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              ) : (
                <h6>Loading....... Please Wait</h6>
              )}
            </div>
          </div>
        </Col>

        <div className={isSidebarOpen ? "sidebar open" : "sidebar"}>
          <button
            className="close-sidebar"
            onClick={() => {
              setIsSidebarOpen(false);
            }}
          >
            <RxCross2 style={{ color: "white" }} />
          </button>
          <SideBar />
        </div>
      </Row>
    </Container>
  );
};

export default CardCarousel;
