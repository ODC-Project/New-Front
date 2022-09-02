import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import CoursesPage from "./pages/CoursesPage";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";

import ContactPage from "./pages/ContactPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetails from "./pages/CategoryDetails";
import ErrorPage from "./pages/ErrorPage";
import ChapterPage from "./pages/ChaptersPage";

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  useEffect(() => {
    // check if the user is logged
    if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("loggedUser") !== undefined
    ) {
      setIsUserLogged(true);
    } else setIsUserLogged(false);
  }, []);
  // routes definitions
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
              <Route path="/chapters/:courseId" element={<ChapterPage />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
