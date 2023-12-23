import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SecondPage from './Components/SecondPage';
import Login from './Components/Login';

const App = () => {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<div><Login /></div>} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
