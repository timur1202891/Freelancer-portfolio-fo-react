import "./styles/main.css"

import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./contacts/Contacts";
import Project from "./pages/Project";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (<HashRouter>
    <div className="App">
      <Router>
        <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
     <Footer/>
     </Router>
    </div>
    </HashRouter>
  );
}

export default App;
//53