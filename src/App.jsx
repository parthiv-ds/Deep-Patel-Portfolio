import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './Component/Hero-Section/HeroSection';
import ProjectDetails from './Pages/ProjectDetails'; // New dynamic project page
import ScrollToTop from './common/ScrollToTop';

function App() {
  return (
    <Router  basename="/Deep-Patel-Portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
