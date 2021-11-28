import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route

} from "react-router-dom";
import About from "../screen/about";
import Home from "../screen/home";

export default function AppRouter() {
    return (
        <>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>

        </>
    )
}
