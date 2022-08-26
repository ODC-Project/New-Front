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
/*import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName:"",
    email: "",
    password: "",
    password2:"",
   
  });

  const { name, lastName, email, password ,password2} = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      // console.log(formData);
      const newUser = {
        name,
        lastName,
        email,
        password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post("http://localhost:5000/api/users/registre", body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)} />
        <div className='form-group'>
          <input
            onChange={onChange}
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            required
          />
        </div>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='text'
            placeholder='lastName'
            name='lastName'
            value={lastName}
            required
          />
        </div>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            maxLength='20'
            value={password}
          />
        </div>
        <div className='form-group'>
          <input
            onChange={onChange}
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
            value={password2}
          />
        </div>
        <input
          onChange={onChange}
          type='submit'
          className='btn btn-primary'
          value='Register'
        />
      </form></Col></Row>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

export default SignUp;*/