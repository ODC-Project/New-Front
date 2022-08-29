import React, { useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Cookies from "universal-cookie";
//import Navbar from './Navbar';
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const cookies = new Cookies();
  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    alert("Submited");
    // set configurations
    const configuration = {
      method: "POST",
      url: "http://localhost:5000/api/users/login",
      data: {
        email,
        password,
      },
     
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setLogin(true);
        
       // set the cookie
       cookies.set("TOKEN", result.data.token, {
        path: "/",
       
      });
        // redirect user to the auth page
        window.location.href = "/auth";})
    
      .catch((error) => {
        error = new Error();
      });
  }
    return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={6}>
      <Form onSubmit={(e)=>handleSubmit(e)}>
     
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </Form.Group>

      {/* password */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="pass"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Form.Group>

      {/* submit button */}
      <Button
        variant="primary"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Login
      </Button>
       {/* display success message */}
       {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
     </Form>  </Col></Row>
  )}

export default Login;
