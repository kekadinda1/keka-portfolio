import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <div className="bg-[#1a0b2e] min-h-screen text-white font-sans">
      <Header />
      <Banner />
      <Skills />
      <Education />
      <Projects />
      <Footer /> {/* Add Footer Here */}
    </div>
  );
}

export default App;