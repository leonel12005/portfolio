import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={darkMode ? "app dark" : "app"}>
        <Header />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipe" element={<TeamPage />} />
            <Route path="/projets" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;