import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./Header";

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = (currentPage) => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
      // return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
      // return <Resume />;
      default:
        console.log(`Sorry, ${currentPage} does not exist`);
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
