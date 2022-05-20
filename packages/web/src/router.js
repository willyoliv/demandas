import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}