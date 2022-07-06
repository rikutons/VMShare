import '../sass/style.sass';
import React from "react";
import ReactDOM from 'react-dom/client'
import Top from './pages/top.jsx'

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Top/>} />
        </Routes>
    </BrowserRouter>
);