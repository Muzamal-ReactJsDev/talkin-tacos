// import React, { useState } from "react";
// import "./SideBar.css";
// import { BiTime } from "react-icons/bi";
// import { MdLocationPin } from "react-icons/md";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { useGetAllBranchesLocationQuery } from "../Service/Service";
// const SideBar = () => {
//   const { data, isLoading, isError, isFetching, isSuccess } =
//     useGetAllBranchesLocationQuery();
//   console.log("data of Branches Location", data);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };
//   let navigate = useNavigate();
//   const routeChange = () => {
//     let path = `/Products`;
//     navigate(path);
//   };

//   return (
//     <div>
//       <Container
//         className={`SideBar-main-Container ${sidebarOpen ? "open" : "closed"}`}
//         onClick={routeChange}
//       >
//         <Link className="Products-links" to="/Products">
//           <Row className="mt-3">
//             <Col>
//               <h3>Select a Location</h3>
//             </Col>
//           </Row>
//           <hr />
//           {!isLoading ? (
//             <>
//               {data?.branches?.map((dataBranchesLocation, id) => (
//                 <>
//                   <Row className="p-2" key={dataBranchesLocation.id}>
//                     <Col onClick={closeSidebar}>
//                       <div className="sidebar-button-div">
//                         <h5>{dataBranchesLocation.name}</h5>
//                         <Button className="SideBar-button-1">Order</Button>
//                       </div>
//                       <div>
//                         <BiTime className="SideBar-Icon" />
//                         {data?.restaurant_schedule_time?.map(
//                           (dataoftime, id) => (
//                             <>

//                               <br />
//                               <text>
//                             Closing time: {dataoftime.closing_time}
//                           </text>
//                           <br />
//                           <text>
//                             Opening Time: {dataoftime.opening_time}
//                           </text>
//                             </>
//                           )
//                         )}
//                       </div>

//                       <div>
//                         <text>
//                           <MdLocationPin className="SideBar-Icon" /> &nbsp;
//                           {dataBranchesLocation.address}
//                         </text>
//                       </div>
//                     </Col>
//                   </Row>
//                   <hr />
//                 </>
//               ))}
//             </>
//           ) : (
//             <h6>Loading....... Please Wait</h6>
//           )}
//         </Link>
//       </Container>
//     </div>
//   );
// };
// export default SideBar;

import React, { useEffect, useState } from "react";
import "./SideBar.css";
import { BiTime } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllBranchesLocationQuery } from "../Service/Service";
import PaymentInfoCard from "../Payment/Payment";
import { addItemToCart } from "../Service/UserSlice";
import { useDispatch } from "react-redux";
import Ordering from "../Products/Ordering/Ordering";

const SideBar = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAllBranchesLocationQuery();
  // console.log(data,"details of Location")
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Products`;
    navigate(path);
  };
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 2000);

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

  const [selectedLocationAddress, setSelectedLocationAddress] = useState("");

  const handleLocationClick = (items) => {
    window.localStorage.setItem("branch_address", items.address);
    window.localStorage.setItem("branch_id", items.id);
    console.log(items,"Data to be send");
    // setSelectedLocationAddress(items);
    // You can also perform any other actions you need when a location is clicked.
  };
  return (
    <div>
      <Container
        className="SideBar-main-Container"
        onClick={routeChange}
        style={{ lineHeight: "45px" }}
      >
        <Row className="mt-3">
          <Col>
            <h3>Select a Location</h3>
          </Col>
        </Row>
        <hr />
        {!isLoading ? (
          <>
            {data?.branches?.map((dataBranchesLocation, id) => (
              <>
                <Row
                  className="p-2"
                  key={id}
                  onClick={() => {
                    handleLocationClick(dataBranchesLocation);
                  }}
                >
                  <Col>
                    <div className="sidebar-button-div">
                      <h5>{dataBranchesLocation.name}</h5>
                      <Button className="SideBar-button-1">Order</Button>
                    </div>

                    {data?.restaurant_schedule_time?.length > 0 && (
                      <>
                        <BiTime className="SideBar-Icon" key={id} />
                        &nbsp;
                        <text>
                          {isLocationOpen(
                            data?.restaurant_schedule_time[0].opening_time,
                            data?.restaurant_schedule_time[0].closing_time
                          )}
                        </text>
                      </>
                    )}

                    <div>
                      <text>
                        <MdLocationPin className="SideBar-Icon" /> &nbsp;
                        {dataBranchesLocation.address}
                      </text>
                    </div>
                  </Col>
                </Row>
                <hr />
              </>
            ))}
          </>
        ) : (
          <h6>Loading....... Please Wait</h6>
        )}
      </Container>
    </div>
  );
};

export default SideBar;
