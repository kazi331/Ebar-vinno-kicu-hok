import { Route, Routes } from "react-router-dom";
import NotFound from "./404/NotFound";
import "./App.css";
import Blog from "./Blog/Blog";
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
