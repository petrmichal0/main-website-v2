import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Portfolio from "../src/pages/portfolio/Portfolio";
import NavBar from "./components/NavBar";
import Themes from "./components/Themes";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Themes />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
