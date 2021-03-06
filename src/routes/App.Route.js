import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "../config/routes.config";
import Home from "../pages/Home.component";
import Players from "../pages/Players.component";
import Check from "../pages/Check.component";

function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATHS.HOME} element={<Home />} />
                <Route path={PATHS.PLAYERS} element={<Players />} />
                <Route path={PATHS.CHECK} element={<Check />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;
