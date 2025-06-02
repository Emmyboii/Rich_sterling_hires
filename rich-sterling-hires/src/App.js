import React from 'react';
import LandingPage from './Components/LandingPage';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import ThankYou from './Components/ThankYou';
import GoogleInit from './Components/GoogleInit';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div className="w-full">
      <GoogleInit />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/success' element={<ThankYou />} />
      </Routes>

    </div>
  );
}

export default App;
