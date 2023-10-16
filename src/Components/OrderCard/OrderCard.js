import React, { useEffect, useState } from "react";
import "./OrderCard.css"; // Import your CSS file
import { Button, Col, Container, Row } from "react-bootstrap";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail, MdLocationPin } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import SearchBar from "../Search/Search";
import { useGetAllBranchesLocationQuery } from "../Service/Service";
import { Link } from "react-router-dom";
const CardGrid = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAllBranchesLocationQuery();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Update current time every second
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const isLocationOpen = (openingTime, closingTime) => {
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    const [openingHour, openingMinute] = openingTime.split(":").map(Number);
    const [closingHour, closingMinute] = closingTime.split(":").map(Number);

    if (
      currentHour > openingHour ||
      (currentHour === openingHour && currentMinute >= openingMinute)
    ) {
      // Current time is after opening time
      if (
        currentHour < closingHour ||
        (currentHour === closingHour && currentMinute <= closingMinute)
      ) {
        // Current time is before closing time
        return true; // Location is open
      }
    }

    return false; // Location is closed
  };

  return (
    <>
      <SearchBar />
      <Container
        className="cardData-main-container"
        style={{ lineHeight: "43px" }}
      >
        <Row>
          <Col className="p-0">
            <div className="card-grid-Card-Data">
              {!isLoading ? (
                <>
                  {data?.branches?.map((cardbranches, id) => (
                    <div className="card-Card-Data" key={id}>
                      <h2>{cardbranches.name}</h2>
                      <div>
                        {/* {
                        data?.restaurant_phone((bb)=>(
                          <> */}
                        {/* yahan hum na direct data k ander sy resturant_phone ko call kr liya ha...!!!!!! */}
                        <IoMdCall className="cardbranches-icons" />{" "}
                        {data.restaurant_phone}
                        {/* </>
                        ))
                      } */}
                      </div>
                      <p className="mb-0">
                        <MdOutlineEmail className="cardbranches-icons" />{" "}
                        {cardbranches.email}
                      </p>
                      <p className="mb-0">
                        <MdLocationPin className="cardbranches-icons" />{" "}
                        {cardbranches.address}
                      </p>
                      {data?.restaurant_schedule_time?.length > 0 && (
                        <>
                          <div className="orderCard-time-icons-see-more">
                            <div>
                              <BiTime className="cardbranches-icons" />
                              &nbsp;
                              {isLocationOpen(
                                data?.restaurant_schedule_time[0].opening_time,
                                data?.restaurant_schedule_time[0].closing_time
                              )
                                ? "Open until " +
                                  data?.restaurant_schedule_time[0].closing_time
                                : "Closed"}
                            </div>
                            <div
                              className="cardbranches-hours"
                              style={{ color: "#06B906" }}
                            >
                              See Hours&nbsp;
                              <IoIosArrowForward />
                            </div>
                          </div>
                        </>
                      )}
                      <div className="mt-3">
                        {" "}
                        <div>
                          <Button className="OrderCard-button-1">
                            <Link
                              className="OrderCard-button-Links"
                              to="/Products"
                            >
                              Order Now
                            </Link>
                          </Button>
                        </div>
                        <div>
                          <Button className="OrderCard-button-2 mt-2">
                            Make this your Location
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <h6>Loading....... Please Wait</h6>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardGrid;
