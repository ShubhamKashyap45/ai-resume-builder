import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GenerateResume from "./pages/GenerateResume";
import { Toaster } from "react-hot-toast";
import ResumeFormPage from "./pages/ResumeFormPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="generate-resume" element={<GenerateResume />}></Route>
          <Route path="resume-form" element={<ResumeFormPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
