import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../home/home";
import './app.scss'; 

const App : React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;