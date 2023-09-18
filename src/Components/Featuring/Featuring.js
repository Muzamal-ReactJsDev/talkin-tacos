import React from "react";
import "./Featuring.css";
import { FaHeart } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
const ProfileCard = () => {
  const ProfileData = [
    {
      Icon: <FaHeart />,
      name: "Catering",
    },
    {
      Icon: <FaHeart />,
      name: "Gluten-Free Options",
    },
    {
      Icon: <FaHeart />,
      name: "Healthy Options",
    },
    {
      Icon: <FaHeart />,
      name: "Easy Parking",
    },
    {
      Icon: <FaHeart />,
      name: "Vegan Options",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          <Col className=" profile-card-heading">
          <h1 className="text-center" style={{color:"white"}}>Featuring</h1>
          <br/>
          <br/>
            <div className="profile-card-container">
               
              {ProfileData.map((data, i) => {
                return (
                  <>
                    <div className="profile-card" style={{ color: "white" }}>
                      <div className="profilr-icons-main">
                        <div className="profile-Icon" style={{color:"#06B906"}}>{data.Icon}</div>
                      </div>
                      <h1 className="name">{data.name}</h1>
                    </div>
                  </>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileCard;
