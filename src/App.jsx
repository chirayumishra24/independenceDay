import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BackgroundSlideshow from './components/BackgroundSlideshow';
import FullscreenButton from './components/FullscreenButton';
import Home from './pages/Home';
import Chapter1 from './pages/Chapter1';
import Chapter2 from './pages/Chapter2';
import Chapter3 from './pages/Chapter3';
import Chapter4 from './pages/Chapter4';
import Chapter5 from './pages/Chapter5';

// Component to handle background state based on current route
function AppContent() {
  const location = useLocation();
  
  // Determine chapter based on path
  let currentChapter = 0;
  if (location.pathname.includes('/chapter/1')) currentChapter = 1;
  else if (location.pathname.includes('/chapter/2')) currentChapter = 2;
  else if (location.pathname.includes('/chapter/3')) currentChapter = 3;
  else if (location.pathname.includes('/chapter/4')) currentChapter = 4;
  else if (location.pathname.includes('/chapter/5')) currentChapter = 5;

  return (
    <>
      <BackgroundSlideshow chapter={currentChapter} />
      <FullscreenButton />
      
      <div className="app-container">
        <header className="app-header animate-fade-in">
          <h1 className="title-main">Understand Freedom</h1>
        </header>

        <main className="content-container animate-slide-up">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapter/1" element={<Chapter1 />} />
            <Route path="/chapter/2" element={<Chapter2 />} />
            <Route path="/chapter/3" element={<Chapter3 />} />
            <Route path="/chapter/4" element={<Chapter4 />} />
            <Route path="/chapter/5" element={<Chapter5 />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
