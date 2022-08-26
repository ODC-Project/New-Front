
import React, { useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios"
import { Form, Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
//import axios from "../api/axios"
//import Navbar from './Navbar';
const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "POST",
      url: "http://localhost:5000/api/users/registre",
      data: {
        name,
        lastName,
        email,
        password,
      },
    };
       // make the API call
       axios(configuration)
       .then((result) => {
         setRegister(true);
       })
       .catch((error) => {
         error = new Error();
       });
    // make a popup alert showing the "submitted" text
    alert("Submited");
  }
  return(
    <Row>
    <Col xs={12} sm={12} md={6} lg={6}>
    
 
    <Form onSubmit={(e)=>handleSubmit(e)} >
         {/* email */}
    <Form.Group controlId="name">
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="name"
        name="name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your First name"
      />
    </Form.Group>

    {/* email */}
       {/* email */}
       <Form.Group controlId="LastName">
      <Form.Label>LastName</Form.Label>
      <Form.Control
        type="lastName"
        name="lastName"
        value={lastName}
        required
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter your LastName"
      />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
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
      Register
    </Button>
      {/* display success message */}
      {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
  </Form>  </Col></Row>
  )}

export default SignUp;