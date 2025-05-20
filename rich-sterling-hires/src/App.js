import React from 'react';
import LandingPage from './Components/LandingPage';
import './index.css'
import Register from './Components/Register';
import { Routes, Route } from 'react-router-dom';
import ThankYou from './Components/ThankYou';
import GoogleInit from './Components/GoogleInit';

function App() {
  return (
    <div className="my-6 w-full">
      <GoogleInit />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/success' element={<ThankYou />} />
      </Routes>

    </div>
  );
}

export default App;
