import '../sass/style.sass';
import React from "react";
import ReactDOM from 'react-dom/client'
import Top from './pages/top.jsx'
import Register from './pages/register';
import Login from './pages/login';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Top/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
);