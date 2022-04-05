import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import ReviewPage from "./ReviewPage/ReviewPage";

function App() {
  return (
    <div className="App bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
