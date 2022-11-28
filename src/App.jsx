import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Peintures from "./pages/Peintures";
import Musiques from "./pages/Musiques";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const helmet = {
    title: "Yannick Peria",
    href: "https://yannickperia.com",
    description: "Change description",
  };

  const [cookies, setCookies] = useState(true);

  return (
    <BrowserRouter>
      <Header helmet={helmet} />
      <Routes>
        <Route path="/" element={<Home helmet={helmet} />} />
        <Route path="/Bio" element={<Bio helmet={helmet} />} />
        <Route path="/Peintures" element={<Peintures helmet={helmet} />} />
        <Route path="/Musiques" element={<Musiques helmet={helmet} />} />
        <Route path="/Contact" element={<Contact helmet={helmet} />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      {cookies && (
        <section type="button" className="cookies">
          <h4> Cookies 🍪</h4>
          <p>
            Ce site est à caractère informatif et ne collecte aucune donnée
            personnelle.
          </p>
          <div className="flex justify-evenly">
            <button
              type="button"
              className="button_style"
              onClick={() => setCookies(false)}
            >
              D'accord
            </button>
            <Link to="/mentions">
              <button
                type="button"
                className="button_style white"
                onClick={() => setCookies(false)}
              >
                En savoir plus
              </button>
            </Link>
          </div>
        </section>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
