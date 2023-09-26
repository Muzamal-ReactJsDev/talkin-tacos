import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Payment.css";
const PaymentInfoCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleSecurityCodeChange = (e) => {
    setSecurityCode(e.target.value);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <Container className="mt-2">
        <Row className="d-flex align-items-center justify-content-start">
          <Col md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Payment Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Card Number"
                      variant="outlined"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Expiry Date"
                      variant="outlined"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Security Code"
                      variant="outlined"
                      value={securityCode}
                      onChange={handleSecurityCodeChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <p className="payment-text" style={{ color: "white" }}>
              Secure payment powered by Stripe
            </p>
            <Button className="Payment-button">Pay for Pickup</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentInfoCard;
