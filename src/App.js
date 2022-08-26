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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
