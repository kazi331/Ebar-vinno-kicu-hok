import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import LoadReviews from "./LoadReviews/LoadReviews";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="App bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<LoadReviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
