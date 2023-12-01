import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Col, Container, Row } from "react-bootstrap";
import "./DiscountandCharges.css";
import { FormControl, FormControlLabel, Radio, TextField } from "@mui/material";
import { FormLabel, RadioGroup } from "@mui/material";
import { useSelector } from "react-redux";
import { cartDetails } from "../Service/UserSlice";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const seventeenPercent = (totalPrice) => (17 / 100) * totalPrice;
const tenPercent = (totalPrice) => (10 / 100) * totalPrice;
const fifteenPercent = (totalPrice) => (15 / 100) * totalPrice;
const twentyPercent = (totalPrice) => (20 / 100) * totalPrice;


export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const { totalPrice } = useSelector(cartDetails);
  const [deliveryCharge, setDeliveryCharge] = useState(null);
  const [serviceFeeEstimatedTax, setServiceFeeEstimatedTax] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState("home");
  const [customTipAmount, setCustomTipAmount] = useState(0);
  const [showStaffTip, setShowStaffTip] = useState(true);

  useEffect(() => {
    axios
      .get("http://cafescale.site/api/v1/config?restaurant_id=8")
      .then((resp) => {
        console.log(resp.data.delivery_charge, "data of the staff tip");
        if (resp.data && resp.data.service_fee_estimated_tax !== null) {
          if (deliveryOption === "home") {
            setDeliveryCharge(resp.data.delivery_charge);
          } else if (deliveryOption === "pickup") {
            setDeliveryCharge("0.00");
          }
          setServiceFeeEstimatedTax(resp.data.service_fee_estimated_tax);
        } else {
          console.error("Invalid API response:", resp.data);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error response data:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });
      
      
  }, [deliveryOption]);

  const seventeenPercentValue = seventeenPercent(totalPrice);
  const tenPercentValue = tenPercent(totalPrice);
  const fifteenPercentValue = fifteenPercent(totalPrice);
  const twentyPercentValue = twentyPercent(totalPrice);

  const calculateStaffTip = () => {
    if (!showStaffTip) {
      return 0; // Set staff tip to zero when "I don't want to pay tip" is selected
    }

    if (value === 0) {
      return tenPercentValue;
    } else if (value === 1) {
      return fifteenPercentValue;
    } else if (value === 2) {
      return twentyPercentValue;
    } else {
      return parseFloat(customTipAmount) || 0;
    }
  };

  const calculateTotalAmount = () => {
    const staffTip = calculateStaffTip();
    const totalAmount =
      totalPrice +
      seventeenPercentValue +
      parseFloat(staffTip) +
      parseFloat(deliveryCharge);
    return totalAmount.toFixed(2);
  };

  const handleChange = (event, newValue) => {
    if (newValue === -1) {
      setShowStaffTip(false);
      setValue(-1);
    } else {
      setShowStaffTip(true);
      setValue(newValue);
    }
  };

  const handleTipOptionChange = (event) => {
    const isTipEnabled = event.target.value === "enabled";
    if (!isTipEnabled) {
      setShowStaffTip(false);
      setValue(-1);
    } else {
      setShowStaffTip(true);
      setValue(0);
    }
  };

  return (
    <>
      <Container className="" style={{color:"white"}}>
        <h4 className="mt-3 mb-3"></h4>
        <Row>
          <Col xs={12}>
            <Box sx={{ width: "100%" }}>
              <Box>
                <Tabs
                  value={showStaffTip ? value : -1}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  
                >
                  <Tab className="cart-label" label="10%" {...a11yProps(0)} />
                  <Tab className="cart-label" label="15%" {...a11yProps(1)} />
                  <Tab className="cart-label" label="20%" {...a11yProps(2)} />
                  <Tab className="cart-label" label="Other" {...a11yProps(3)} />
                </Tabs>
                <br />
                <FormControlLabel
                    value="disabled"
                    control={<Radio />}
                    label="I don't wanna pay tip"
                    checked={!showStaffTip}
                    onChange={handleTipOptionChange}
                    style={{color:"red"}}
                  />
                <TabPanel
                  className="cart-tabpanel-other tab"
                  value={value}
                  index={3}
                >
                  <div className="cart-discoutn1">
                    <label className="">Enter the amount in $ :</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      value={customTipAmount}
                      onChange={(e) => setCustomTipAmount(e.target.value)}
                    />
                  </div>
                </TabPanel>
                <br />
              </Box>
              <br />

              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  className="demo-form-control"
                >
                  Delivery Option
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={deliveryOption}
                  onChange={(e) => setDeliveryOption(e.target.value)}
                >
                  <FormControlLabel
                    value="home"
                    control={<Radio />}
                    label="Home Delivery"
                  />
                  <FormControlLabel
                    value="pickup"
                    control={<Radio />}
                    label="Pickup"
                  />
                
                </RadioGroup>
              </FormControl>

              <br />

              {/* Render "Staff Tip" section only if showStaffTip is true */}
              {/* {showStaffTip && value === 3 && (
                <TabPanel className="cart-tabpanel" value={value} index={3}>
                  <div className="cart-discoutn1">
                    <div className="staff-tip">
                      <div className="cart-fee-estimated-name">Staff Tip</div>
                      <div className="cart-fee-estimated-price">
                        ${calculateStaffTip().toFixed(2)}
                      </div>
                    </div>
                  </div>
                </TabPanel>
              )} */}

              <br />

              <div className="cart-items-price">
                <div className="cart-items-price-name">Items Price</div>
                <div className="cart-items-price-price">
                  $ {totalPrice ?? 0}
                </div>
              </div>
              <br />
              {serviceFeeEstimatedTax !== null && (
                <div className="cart-discoutn1 mt-2">
                  <div className="cart-fee-estimated-name">
                    Fee & Estimated Tax
                  </div>
                  <div className="cart-fee-estimated-price">
                    ${seventeenPercentValue.toFixed(2)}{" "}
                  </div>
                  <br />
                </div>
              )}

              <TabPanel className="cart-tabpanel" value={value} index={0}>
                <div className="cart-discoutn1">
                  <div className="staff-tip">
                    <div className="cart-fee-estimated-name">Staff Tip</div>
                    <div className="cart-fee-estimated-price">
                      ${tenPercentValue.toFixed(2)}
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="cart-tabpanel" value={value} index={1}>
                <div className="cart-discoutn1">
                  <div className="staff-tip">
                    <div className="cart-fee-estimated-name">Staff Tip</div>
                    <div className="cart-fee-estimated-price">
                      ${fifteenPercentValue.toFixed(2)}
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="cart-tabpanel" value={value} index={2}>
                <div className="cart-discoutn1">
                  <div className="staff-tip">
                    <div className="cart-fee-estimated-name">Staff Tip</div>
                    <div className="cart-fee-estimated-price">
                      ${twentyPercentValue.toFixed(2)}{" "}
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="cart-tabpanel" value={value} index={3}>
                <div className="cart-discoutn1">
                  {/* Staff Tip */}
                  <div className="staff-tip">
                    <div className="cart-fee-estimated-name">Staff Tip</div>
                    <div className="cart-fee-estimated-price">
                      ${calculateStaffTip().toFixed(2)}
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col>
            {deliveryCharge !== null && (
              <div className="cart-delivery-fee">
                <div className="delivery-fee-left">Delivery Fee</div>
                <div className="delivery-fee-right">${deliveryCharge}</div>
              </div>
            )}
          </Col>
        </Row>
        <br />

        <div className="cart-hr"></div>
        <div
          className="cart-delivery-fee"
          style={{ color: "rgb(221, 153, 51)" }}
        >
          <h5 className="delivery-fee-left fw-bolder">Total Amount</h5>
          <div className="delivery-fee-right">${calculateTotalAmount()}</div>
        </div>
      </Container>
    </>
  );
}
