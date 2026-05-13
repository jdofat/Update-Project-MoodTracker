// home, login, signin, dashboard, and notfound

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginSigninPage from "./pages/LoginSigninPage"; // We can keep your existing login logic
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const Navbar = () => (
  <nav style={{ padding: "10px", background: "#f4f4f4", display: "flex", gap: "10px" }}>
    <Link to="/">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/login">Login/Register</Link>
  </nav>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSigninPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
