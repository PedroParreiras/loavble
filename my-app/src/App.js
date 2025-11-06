import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LovabelPage from './pages/LovabelPage';
import LoavblePage from './pages/LoavblePage';
import LovabolPage from './pages/LovabolPage';
import LlovablePage from './pages/LlovablePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/lovabel" element={<LovabelPage />} />
          <Route path="/loavble" element={<LoavblePage />} />
          <Route path="/lovabol" element={<LovabolPage />} />
          <Route path="/llovable" element={<LlovablePage />} />
          {/* Rota padrão redireciona para lovabel */}
          <Route path="/" element={<LovabelPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
