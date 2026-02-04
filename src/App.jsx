import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/common/Header";
import CounsellorModal from "./components/common/CounsellorModal";

import About from "./pages/About/About";

import Home from "./pages/Home/Home";
import CoursesExplorer from "./pages/CoursesExplorer";
import JavaFullStack from "./pages/JavaFullStack";
import PlacementJourney from "./pages/PlacementJourney";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  return (
    <BrowserRouter>
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesExplorer />} />
        <Route path="/courses/java-full-stack" element={<JavaFullStack />} />
        <Route path="/placement" element={<PlacementJourney />} />
        <Route path="/about" element={<About onOpenModal={() => setIsModalOpen(true)} />} />
      </Routes>

      <CounsellorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </BrowserRouter>
  );
}

export default App;
