import "./App.css";
import Navbar from "./Components/Nabar/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Blog from "./Components/BlogPage/Blog";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Footer";
import LoginPage from "./Components/Logins/LoginPage";
import SignUp from "./Components/Logins/SignUp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;
