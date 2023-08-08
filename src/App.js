import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<About />} />
        {/* <Route path={"/"} element={<Contac} /> */}
        <Route path={"/portfolio"} element={<Portfolio />} />
        {/* <Route path={"/"} element={<About />} /> */}
      </Routes>
    </Router>
  );
}
