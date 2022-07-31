import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router";

export const Payment = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [card, setcard] = useState(false);
  const [upi, setupi] = useState(false);
  const [Method, setMethod] = useState("");
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios.get("http://localhost:3001/cart").then((res) => {
      setdata(res.data);
      console.log(res.data);
    });
  };
  let sum = 0;
  data.map((e) => {
    sum = sum + e.price;
  });
  let GST = Math.round(sum * 0.18);
  const handlecard = (event) => {
    setMethod(event.target.value);
    if (event.target.value === "cdc") {
      setcard(true);
      setupi(false);
    }
    if (event.target.value === "upi") {
      setupi(true);
      setcard(false);
    }
  };
  return (
    <>
      <h1 className="heading">Payment Page</h1>
      <div className="paydiv">
        <div className="option">
          Select Payment Method<br></br>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Method}
                label="Age"
                onChange={handlecard}
              >
                <MenuItem value={"cdc"}>Credit/Debit Card</MenuItem>
                <MenuItem value={"upi"}>UPI</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div
            style={{
              display: card ? "block" : "none",
              backgroundColor: "wheat",
              borderRadius: "10px",
            }}
          >
            <div>
              <span>Enter Name:</span>
              <input
                type="text"
                className="cardinput"
                placeholder="Enter Cardholder Name"
              ></input>
            </div>
            <div>
              <div className="imgcard">
                <div>
                  <img
                    style={{ width: "100%" }}
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%" }}
                    src="https://w7.pngwing.com/pngs/92/785/png-transparent-mastercard-logo-mastercard-credit-card-payment-visa-nyse-ma-mastercard-logo-text-logo-sign.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%" }}
                    src="https://bfsi.eletsonline.com/wp-content/uploads/2019/09/RuPay-debit-card.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/2560px-Maestro_logo.svg.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <span>Card Number:</span>
              <span>
                <input
                  className="cardinput"
                  placeholder="Enter Card Number"
                  type="text"
                ></input>
              </span>
            </div>
            <div style={{ marginTop: "10px" }}>
              <span>CVV:</span>
              <span>
                <input
                  style={{ width: "10%" }}
                  className="cardinput"
                  placeholder="CVV"
                  type="text"
                ></input>
              </span>
              <span style={{ marginLeft: "10%" }}>Expiry Date:</span>
              <span>
                <input
                  style={{ width: "8%" }}
                  className="cardinput"
                  placeholder="--/--"
                  type="text"
                ></input>
              </span>
            </div>
          </div>
          <div style={{ display: upi ? "block" : "none" }}>
            <div>
              <span>Enter Name:</span>
              <input
                type="text"
                className="cardinput"
                placeholder="Enter full name"
              ></input>
            </div>
            <div>
              <div className="imgcard">
                <div>
                  <img
                    style={{ width: "100%" }}
                    src="https://images.assettype.com/freepressjournal%2F2020-06%2F85479dab-ba32-4f5c-af57-df77c336d2d7%2Fgpay.jpg?rect=0%2C77%2C400%2C225"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%" }}
                    src="https://res.cloudinary.com/http-pixlok-com/image/upload/fl_attachment/Pixlok/Images/PNG/Paytm_Logo_thzrb7.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%" }}
                    src="https://image4.owler.com/logo/phonepe_owler_20190729_204807_original.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%" }}
                    src="https://trak.in/wp-content/uploads/2018/08/UPI-logo.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <span>UPI ID:</span>
              <span>
                <input
                  className="cardinput"
                  placeholder="Enter Valid UPI ID"
                  type="text"
                ></input>
              </span>
            </div>
            <div style={{ marginTop: "10px" }}>
              <span>Mobile Number</span>
              <span>
                <input
                  style={{ width: "40%" }}
                  className="cardinput"
                  placeholder="Enter Mobile Number"
                  type="text"
                ></input>
              </span>
            </div>
          </div>
          <div>
            NOTICE:-
            <ul>
              <li>
                If payment gets failed the amout will redirect in your account
                within 3-4 working days.
              </li>
              <li>If server is down dont make any payment request.</li>
              <li>All payment methods are secure on this website.</li>
              <li>For customer support call 022-1234-5678</li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="ordersum">
          <h1>Order Summary</h1>
          <p>Details</p>
          {data.map((e) => (
            <div key={e.id}>
              <p>
                {e.name}&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;₹{e.price}/-
              </p>
            </div>
          ))}
          <hr></hr>
          <p>Subtotal:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;₹{sum}/-</p>
          <p>
            Tax:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;₹{GST}/-
          </p>
          <hr></hr>
          <h1>Total Bill</h1>
          <h1 style={{ fontSize: "20px" }}>₹{sum + GST}/-</h1>
          <button
            onClick={() => {
              navigate("/thankyou");
            }}
          >
            MAKE A PAYMENT
          </button>
        </div>
      </div>
    </>
  );
};
