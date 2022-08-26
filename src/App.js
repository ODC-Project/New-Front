import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import CoursesPage from "./pages/CoursesPage";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import TeachersPage from "./pages/TeachersPage";
import ContactPage from "./pages/ContactPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetails from "./pages/CategoryDetails";
import SignUp from "./components/AuthFront/SignUp";
import Login from "./components/AuthFront/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:id" element={<CategoryDetails />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/regiter" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
/*import {Routes } from "react-router-dom";

import { Container, Col, Row } from "react-bootstrap";

import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
//import ProtectedRoutes from "./ProtectedRoutes";
import SignUp from './components/SignUp';
import Login from './components/Login';


    
   

   


function App() {
  return (
    <Container>
           <Row>
        <Col className="text-center">
          <h1>Dashboard User Authentification</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <SignUp />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
        < Login /></Col>
      </Row>
        {/* create routes here */
        /*<Routes>
        <React.Fragment exact path="/" component={Account} />
        <React.Fragment exact path="/free" component={FreeComponent} />
        <React.Fragment path="/auth" component={AuthComponent} />
      </Routes>*/
   
   /* </Container>*/
  /*);
}

export default App;*/