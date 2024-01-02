import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import styles from "../assets/css/Calculator.module.css";

const Calculator = () => {
  //Variable to store input
  let [input, setInput] = useState("0");

  //Function to handle calculator button presess
  const handleClick = (e) => {
    if (input.length >= 16) {
      setInput("Input too long!");
      let timeout = setTimeout(() => {
        setInput("0");
        clearTimeout(timeout);
      }, 1000);
      return;
    }
    if (input.charAt(0) === "0") {
      input = input.slice(1, input.length);
    }
    setInput(input.concat(e.target.name));
  };

  //Function to clear input and set to 0
  const clearForm = () => {
    setInput("0");
  };

  //Function to clear last input
  const backSpace = () => {
    setInput(input.slice(0, input.length - 1));
  };

  //Function to equate the input and get input
  const equate = () => {
    try {
      input = eval(input).toString();
      if (input.includes(".")) {
        input = +eval(input);
        input = input.toFixed(4).toString();
        setInput(input);
      } else {
        setInput(eval(input).toString());
      }
    } catch (err) {
      setInput("ERROR!");
      let timeout = setTimeout(() => {
        setInput("0");
        clearTimeout(timeout);
      }, 1000);
    }
  };
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="p-0"></Col>
          <Col className="justify-content-center p-0">
            <h2
              style={{
                textAlign: "center",
                borderBottom: "2px solid whitesmoke",
              }}
            >
              CALCULATOR
            </h2>
            <div
              style={{
                backgroundColor: " #908a88",
                borderRadius: "10px",
                border: "2px solid  #908a88",
              }}
            >
              <Row>
                <span
                  className="ms-3 my-2"
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    width: "1px",
                    height: "25px",
                  }}
                ></span>
                <span
                  className="ms-2 my-2"
                  style={{
                    backgroundColor: "orange",
                    borderRadius: "50%",
                    width: "1px",
                    height: "25px",
                  }}
                ></span>
                <span
                  className="ms-2 my-2"
                  style={{
                    backgroundColor: "green",
                    borderRadius: "50%",
                    width: "1px",
                    height: "25px",
                  }}
                ></span>
              </Row>
              <Form action="" className="rtl">
                <Form.Control
                  disabled
                  type="text"
                  value={input}
                  style={{
                    color: "lightgray",
                    border: "none",
                    backgroundColor: " #908a88",
                    height: "150px",
                    fontSize: "50px",
                  }}
                />
              </Form>
              <Row className="px-3">
                <Col xs={6} className="p-0">
                  {" "}
                  <Button
                    name="clear"
                    onClick={clearForm}
                    className={styles.calbutton}
                    style={{ backgroundColor: "darkred" }}
                  >
                    C
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="back"
                    onClick={backSpace}
                    className={styles.calbutton}
                  >
                    Back
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="/"
                    onClick={handleClick}
                    className={styles.calbutton}
                    style={{ backgroundColor: "orange" }}
                  >
                    {" "}
                    /{" "}
                  </Button>
                </Col>
              </Row>
              <Row className="px-3">
                <Col className="p-0">
                  {" "}
                  <Button
                    name="1"
                    onClick={handleClick}
                    className={styles.calbutton}
                  >
                    {" "}
                    1{" "}
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="2"
                    onClick={handleClick}
                    className={styles.calbutton}
                  >
                    {" "}
                    2{" "}
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="3"
                    onClick={handleClick}
                    className={styles.calbutton}
                  >
                    {" "}
                    3{" "}
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    className={styles.calbutton}
                    name="*"
                    onClick={handleClick}
                    style={{ backgroundColor: "orange" }}
                  >
                    {" "}
                    *{" "}
                  </Button>
                </Col>
              </Row>
              <Row className="px-3">
                <Col className="p-0">
                  {" "}
                  <Button
                    name="4"
                    onClick={handleClick}
                    className={styles.calbutton}
                  >
                    {" "}
                    4{" "}
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="5"
                    onClick={handleClick}
                    className={styles.calbutton}
                  >
                    {" "}
                    5{" "}
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="6"
                    onClick={handleClick}
                    className={styles.calbutton}
                  >
                    {" "}
                    6{" "}
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="-"
                    onClick={handleClick}
                    className={styles.calbutton}
                    style={{ backgroundColor: "orange" }}
                  >
                    {" "}
                    -{" "}
                  </Button>
                </Col>
              </Row>
              <Row className="px-3">
                <Col className="p-0">
                  {" "}
                  <Button
                    name="7"
                    onClick={handleClick}
                    className={styles.calbutton}
                  >
                    {" "}
                    7{" "}
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="8"
                    onClick={handleClick}
                    className={styles.calbutton}
                  >
                    {" "}
                    8{" "}
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="9"
                    onClick={handleClick}
                    className={styles.calbutton}
                  >
                    {" "}
                    9{" "}
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="+"
                    onClick={handleClick}
                    className={styles.calbutton}
                    style={{ backgroundColor: "orange" }}
                  >
                    {" "}
                    +{" "}
                  </Button>
                </Col>
              </Row>
              <Row className="px-3 pb-1">
                <Col xs={6} className="p-0">
                  {" "}
                  <Button
                    name="0"
                    onClick={handleClick}
                    className={styles.calbutton}
                  >
                    0
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="."
                    onClick={handleClick}
                    className={styles.calbutton}
                  >
                    .
                  </Button>
                </Col>
                <Col className="p-0">
                  {" "}
                  <Button
                    name="="
                    onClick={equate}
                    className={styles.calbutton}
                    style={{ backgroundColor: "green" }}
                  >
                    {" "}
                    ={" "}
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Calculator;
