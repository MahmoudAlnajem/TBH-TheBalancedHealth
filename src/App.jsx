import React from "react";
import Header from "./componets/Header";
import Landing from "./componets/Landing"
import About from "./componets/About"
import MainLayout from "./componets/MainLayout"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactMe from "./componets/ContactMe";
import Appointment from "./componets/Appointment";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactMe />} />
                <Route path="/appointment" element={<Appointment />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}
