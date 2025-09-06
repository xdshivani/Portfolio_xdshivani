import About from "./About/About";
import Navbar from "./Components/Navbar/Navbar";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Blogs from "./Projects/Blogs";
import Projects from "./Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-[#171d32] min-h-screen w-full overflow-hidden">
        <Navbar />

        <Routes>
          {/* Portfolio (default route) */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Experience />
                <Projects />
                <Footer />
              </>
            }
          />

          {/* Blogs Page */}
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
