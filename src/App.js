import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Header from "./components/Header";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/resume"} element={<Resume />} />
      </Routes>
    </Router>
  );
}
