import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Header from "./components/Header";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/react-portfolio/"} element={<About />} />
        <Route path={"/react-portfolio/contact"} element={<Contact />} />
        <Route path={"/react-portfolio/portfolio"} element={<Portfolio />} />
        <Route path={"/react-portfolio/resume"} element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}
