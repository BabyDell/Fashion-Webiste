'use client'
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { LandingPage } from './landingpage/page';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other routes here... */}
      </Routes>
    </Router>
  );
}