import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import CoursesPage from "./pages/CoursesPage";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import TeachersPage from "./pages/TeachersPage";
import ContactPage from "./pages/ContactPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetails from "./pages/CategoryDetails";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  // const isUserLogged = () => {
  //   const token = localStorage.getItem("token");
  //   const loggedUser = localStorage.getItem("loggedUser");

  //   if (token && loggedUser) return true;
  //   else return false;
  // };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          {isUserLogged ? (
            <>
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories/:id" element={<CategoryDetails />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/error" replace />} />
          )}

          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
