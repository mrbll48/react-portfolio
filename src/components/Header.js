import React, { useState } from "react";
import Navigation from "./Navigation";
import Project from "./Project";
import Footer from "./Footer";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Portfolio";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("About-Me");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (currentPage === "ContactMe") {
      return <ContactMe />;
    } else {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}
