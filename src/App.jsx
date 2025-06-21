import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import MatrixMorph from './components/MatrixMorph'; // <-- Add this import!
import './index.css';

export default function App() {
  const [activePage, setActivePage] = useState('about');
  const [showMatrixMorph, setShowMatrixMorph] = useState(true);

  return (
    <>
      {showMatrixMorph ? (
        <MatrixMorph onFinish={() => setShowMatrixMorph(false)} onSkip={() => setShowMatrixMorph(false)} />
      ) : (
        <main className="matrix-main">
          <Sidebar />
          <div className="main-content">
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <About show={activePage === 'about'} />
            <Resume show={activePage === 'resume'} />
            <Portfolio show={activePage === 'portfolio'} />
            <Contact show={activePage === 'contact'} />
          </div>
        </main>
      )}
    </>
  );
}
