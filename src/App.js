import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import { MdLocationOn } from "react-icons/md";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="bg-image">
        <div className="location">
          <div>
            <MdLocationOn />
          </div>
          <p>Vernazza, Italy - $500.00 / night</p>
        </div>
        <div className="overlay"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
