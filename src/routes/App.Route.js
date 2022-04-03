import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "../config/routes.config";
import Home from "../pages/Home.component";

function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATHS.HOME} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;
