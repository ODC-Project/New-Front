import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import axios from "axios";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "/",
    protected: false,
  },
  {
    display: "About",
    url: "/about",
    protected: false,
  },
  {
    display: "Categories",
    url: "/categories",
    protected: true,
  },
  {
    display: "Courses",
    url: "/courses",
    protected: true,
  },

  {
    display: "Contact",
    url: "/contact",
    protected: false,
  },
  {
    display: "My Space",
    url: "/my-space",
    protected: true,
  },
];

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const [openLoginModal, setLoginOpenModal] = useState(false);
  const [openRegisterModal, setRegisterOpenModal] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  const toggleLogin = () => setLoginOpenModal(!openLoginModal);
  const cancelLogin = () => {
    setLoginOpenModal(!openLoginModal);
    setLoginError(false);
  };
  const toggleRegister = () => setRegisterOpenModal(!openRegisterModal);

  const handleLoginForm = async (e) => {
    e.preventDefault();
    // call api login
    // if sucess implement login logic  and close modal
    // else display error message and do not close modal
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post("http://localhost:5000/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        setLoginError(false);
        localStorage.setItem("token", res.data.token); // save the token in browser memory
        localStorage.setItem("loggedUser", JSON.stringify(res.data.user));
        toggleLogin();
      }) // do some logic indise then call back
      .catch((err) => setLoginError(true)); // do some login
    // if (!response) alert("password or email incorrect");
    // console.log(response.data);
  };

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const lastName = e.target.lastName.value;

    axios
      .post("http://localhost:5000/api/users/register", {
        name,
        lastName,
        email,
        password,
      })
      .then((res) => {
        setRegisterError(false);
        localStorage.setItem("token", res.data.token); // save the token in browser memory
        localStorage.setItem("loggedUser", JSON.stringify(res.data.user));
        toggleRegister();
      })
      .catch((err) => {
        setRegisterError(true);
      });
  };

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload(); // refresh the browser
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-book-open-line"></i> E-learning.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => {
                  if (item.protected) {
                    if (
                      localStorage.getItem("token") &&
                      localStorage.getItem("loggedUser")
                    )
                      return (
                        <li key={index} className="nav__item">
                          <Link to={item.url}>{item.display}</Link>
                          {/* <a href={item.url}>{item.display}</a> */}
                        </li>
                      );
                  } else
                    return (
                      <li key={index} className="nav__item">
                        <Link to={item.url}>{item.display}</Link>
                        {/* <a href={item.url}>{item.display}</a> */}
                      </li>
                    );
                })}

                {!localStorage.getItem("token") &&
                !localStorage.getItem("loggedUser") ? (
                  <li
                    className="nav__item"
                    onClick={toggleRegister}
                    style={{ marginLeft: 20 }}
                  >
                    <Link to="#">Register</Link>
                  </li>
                ) : null}

                {localStorage.getItem("token") &&
                localStorage.getItem("loggedUser") ? (
                  <li className="nav__item" onClick={handleLogOut}>
                    <Link to="#">logout</Link>
                  </li>
                ) : (
                  <li className="nav__item" onClick={toggleLogin}>
                    <Link to="#" className="danger">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <Modal isOpen={openLoginModal} toggle={toggleLogin}>
              <ModalHeader toggle={cancelLogin}>Login to E-leaning</ModalHeader>
              <ModalBody>
                <Form onSubmit={handleLoginForm}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                  {/* if there is an login error  */}
                  {loginError && (
                    <Alert color="danger">Please check your creedatial</Alert>
                  )}
                  <Button
                    style={{ backgroundColor: "#1795bf" }}
                    onClick={cancelLogin}
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{ backgroundColor: "#1795bf" }}
                    type="submit"
                    // onClick={toggleLogin}
                  >
                    Login
                  </Button>{" "}
                </Form>
              </ModalBody>
            </Modal>

            <Modal isOpen={openRegisterModal} toggle={toggleRegister}>
              <ModalHeader toggle={toggleRegister}>
                Create new Account
              </ModalHeader>

              <ModalBody>
                <Form onSubmit={handleRegisterForm}>
                  <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your lastName"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                  {/* if there is an login error  */}
                  {registerError && (
                    <Alert color="danger">Please try again</Alert>
                  )}
                  <Button
                    style={{ backgroundColor: "#1795bf" }}
                    onClick={cancelLogin}
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{ backgroundColor: "#1795bf" }}
                    type="submit"
                    // onClick={toggleLogin}
                  >
                    Register
                  </Button>{" "}
                </Form>
              </ModalBody>
            </Modal>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
