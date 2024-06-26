import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeaturedVehicles from './components/FeaturedVehicles';
import ViewAllCars from './components/ViewAllCars';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< FeaturedVehicles />} />
                <Route path="/all-cars" element={< ViewAllCars />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;