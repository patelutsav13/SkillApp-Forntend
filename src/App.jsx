import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login"; // Assume this exists from previous step
import Signup from "./pages/Signup"; // Assume this exists from previous step
import Dashboard from "./pages/Dashboard";
import SkillAnalysis from "./pages/SkillAnalysis";
import CareerPathways from "./pages/CareerPathways";
import Recommendations from "./pages/Recommendations";
import Profile from "./pages/Profile";
import LearningPath from "./pages/LearningPath";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/signup" element={<Signup onLogin={() => setIsAuthenticated(true)} />} />
        
        <Route element={<Layout isAuthenticated={isAuthenticated} onLogout={() => setIsAuthenticated(false)} theme={theme} toggleTheme={toggleTheme} />}>
          <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/analysis" element={isAuthenticated ? <SkillAnalysis /> : <Navigate to="/login" />} />
          <Route path="/pathways" element={isAuthenticated ? <CareerPathways /> : <Navigate to="/login" />} />
          <Route path="/recommendations" element={isAuthenticated ? <Recommendations /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/learn/:type" element={isAuthenticated ? <LearningPath /> : <Navigate to="/login" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;