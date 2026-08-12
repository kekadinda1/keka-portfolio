import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#050814] min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white">
      <Header />
      <main>
        <Banner />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

export default App;