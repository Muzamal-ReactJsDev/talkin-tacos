// import React from "react";
// import "./OrderCard.css"; // Import your CSS file
// import { Button, Col, Container, Row } from "react-bootstrap";
// import { IoMdCall } from "react-icons/io";
// import { MdOutlineEmail, MdLocationPin } from "react-icons/md";
// import { BiTime } from "react-icons/bi";
// import { IoIosArrowForward } from "react-icons/io";
// import SearchBar from "../Search/Search";
// const CardGrid = () => {
//   const cards = [
//     {
//       id: 1,
//       title: "Brickell",
//       MobileNumber: <span>(305) 381-0211</span>,
//       Email: <span>talkintacosmiami@gmail.com</span>,
//       Address: <span>97 SW 8th St Miami FL 33130</span>,
//       Hours: <span>Open until 6:00 AM</span>,
//     },
//     {
//       id: 2,
//       title: "Brickell",
//       MobileNumber: <span>(305) 381-0211</span>,
//       Email: <span>talkintacosmiami@gmail.com</span>,
//       Address: <span>97 SW 8th St Miami FL 33130</span>,
//       Hours: <span>Open until 6:00 AM</span>,
//     },
//     {
//       id: 3,
//       title: "Brickell",
//       MobileNumber: <span>(305) 381-0211</span>,
//       Email: <span>talkintacosmiami@gmail.com</span>,
//       Address: <span>97 SW 8th St Miami FL 33130</span>,
//       Hours: <span>Open until 6:00 AM</span>,
//     },
//     {
//       id: 4,
//       title: "Brickell",
//       MobileNumber: <span>(305) 381-0211</span>,
//       Email: <span>talkintacosmiami@gmail.com</span>,
//       Address: <span>97 SW 8th St Miami FL 33130</span>,
//       Hours: <span>Open until 6:00 AM</span>,
//     },
//     {
//       id: 5,
//       title: "Brickell",
//       MobileNumber: <span>(305) 381-0211</span>,
//       Email: <span>talkintacosmiami@gmail.com</span>,
//       Address: <span>97 SW 8th St Miami FL 33130</span>,
//       Hours: <span>Open until 6:00 AM</span>,
//     },
//     {
//       id: 6,
//       title: "Brickell",
//       MobileNumber: <span>(305) 381-0211</span>,
//       Email: <span>talkintacosmiami@gmail.com</span>,
//       Address: <span>97 SW 8th St Miami FL 33130</span>,
//       Hours: <span>Open until 6:00 AM</span>,
//     },
//     {
//       id: 7,
//       title: "Brickell",
//       MobileNumber: <span>(305) 381-0211</span>,
//       Email: <span>talkintacosmiami@gmail.com</span>,
//       Address: <span>97 SW 8th St Miami FL 33130</span>,
//       Hours: <span>Open until 6:00 AM</span>,
//     },
//   ];

//   return (
//     <>
//       <SearchBar />
//       <Container className="cardData-main-container">
//         <Row>
//           <Col>
//             <div className="card-grid-Card-Data">
//               {cards.map((card) => (
//                 <div className="card-Card-Data" key={card.id}>
//                   <h2>{card.title}</h2>
//                   <p>
//                     <IoMdCall /> &nbsp; {card.MobileNumber}
//                   </p>
//                   <p>
//                     <MdOutlineEmail /> &nbsp; {card.Email}
//                   </p>
//                   <p>
//                     <MdLocationPin /> &nbsp; {card.Address}
//                   </p>
//                   <p>
//                     <BiTime /> &nbsp; {card.Hours}{" "}
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; See More{" "}
//                     <IoIosArrowForward />
//                   </p>
//                   <div>
//                     <Button className="OrderCard-button-1">Order Now</Button>
//                   </div>
//                   <div>
//                     <Button className="OrderCard-button-2 mt-2">
//                       Make this your Location
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default CardGrid;

//  yahan ab hum api use kr rhy hain....!!!!/////

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
  // console.log("data of Card-Branches Location", data); time update honay ki waja sy ya hamain bar bar console ma data show krwa rha tha....
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Update current time every second
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTimeToUSATimeZone = (timeString) => {
    const timeParts = timeString.split(":").map(Number);
    const hours = timeParts[0];
    const minutes = timeParts[1];
    const time = new Date();
    time.setHours(hours, minutes);
    return time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Use 12-hour time format
    });
  };

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
        return `Open until ${formatTimeToUSATimeZone(closingTime)}`;
      }
    } else {
      // Calculate the time difference in minutes
      const timeDifferenceMinutes =
        (openingHour - currentHour) * 60 + (openingMinute - currentMinute);

      if (timeDifferenceMinutes <= 10) {
        // Location is opening in less than or equal to 10 minutes
        return `Opening in ${timeDifferenceMinutes} minutes`;
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
                              }
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
