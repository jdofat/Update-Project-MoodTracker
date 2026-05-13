import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Path update: looking into the 'pages' folder
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import LoginSigninPage from './pages/LoginSigninPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
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