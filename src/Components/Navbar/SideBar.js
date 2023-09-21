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

// ya wala opening or closing ma map lagay begair ha.........

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
//   const isBranchOpen = (openingTime, closingTime) => {
//     const now = new Date();
//     const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

//     return currentTime >= openingTime && currentTime <= closingTime;
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
//                         <BiTime className="SideBar-Icon" />&nbsp;
//                         <text>
//                           {isBranchOpen(
//                             dataBranchesLocation.opening_time,
//                             dataBranchesLocation.closing_time
//                           )
//                             ? "Open until " + dataBranchesLocation.closing_time
//                             : "Closed"}
//                         </text>
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

// ya wala map laga k or time wali funtionality laga k ha....!!

// import React, { useEffect, useState } from "react";
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

//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date()); // Update current time every second
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const isLocationOpen = (openingTime, closingTime) => {
//     const currentHour = currentTime.getHours();
//     const currentMinute = currentTime.getMinutes();

//     const [openingHour, openingMinute] = openingTime.split(":").map(Number);
//     const [closingHour, closingMinute] = closingTime.split(":").map(Number);

//     if (
//       currentHour > openingHour ||
//       (currentHour === openingHour && currentMinute >= openingMinute)
//     ) {
//       // Current time is after opening time
//       if (
//         currentHour < closingHour ||
//         (currentHour === closingHour && currentMinute <= closingMinute)
//       ) {
//         // Current time is before closing time
//         return true; // Location is open
//       }
//     }

//     return false; // Location is closed
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
//                   <Row className="p-2" key={id}>
//                     <Col onClick={closeSidebar}>
//                       <div className="sidebar-button-div">
//                         <h5>{dataBranchesLocation.name}</h5>
//                         <Button className="SideBar-button-1">Order</Button>
//                       </div>
//                       <div>
//                         {data?.restaurant_schedule_time[id]?.map(
//                           (dataoftime, id) => (
//                             <>
//                               <br />
//                               {/* <text>
//                             Closing time: {dataoftime.closing_time}
//                           </text>
//                           <br />
//                           <text>
//                             Opening Time: {dataoftime.opening_time}
//                           </text> */}
//                               <BiTime className="SideBar-Icon" />

//                               <text>
//                                 {isLocationOpen(
//                                   dataoftime.opening_time,
//                                   dataoftime.closing_time
//                                 )
//                                   ? "Open until " + dataoftime.closing_time
//                                   : "Closed"}
//                               </text>

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
const SideBar = () => {
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetAllBranchesLocationQuery();
  console.log("data of Branches Location", data);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Products`;
    navigate(path);
  };
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
    <div>
      <Container
        // className={`SideBar-main-Container ${sidebarOpen ? "open" : "closed"}`}
        className="SideBar-main-Container"
        onClick={routeChange}
        style={{ lineHeight: "45px" }}
      >
        {/* <Link className="Products-links" to="/Products"> */}
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
                <Row className="p-2" key={id}>
                  <Col>
                    <div className="sidebar-button-div">
                      <h5>{dataBranchesLocation.name}</h5>
                      <Button className="SideBar-button-1">Order</Button>
                    </div>

                    {/* Display time only once per outer map iteration */}

                    {data?.restaurant_schedule_time?.length > 0 && (
                      <>
                        <BiTime className="SideBar-Icon" />
                        &nbsp;
                        <text>
                          {isLocationOpen(
                            data?.restaurant_schedule_time[0].opening_time,
                            data?.restaurant_schedule_time[0].closing_time
                          )
                            ? "Open until " +
                              data?.restaurant_schedule_time[0].closing_time
                            : "Closed"}
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
        {/* </Link> */}
      </Container>
    </div>
  );
};
export default SideBar;
