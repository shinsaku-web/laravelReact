import "./bootstrap";

import ReactDOM from "react-dom/client";
import { Home } from "./components/Home";
import { Create } from "./components/Create";
import { Update } from "./components/Update";
import {
    BrowserRouter,
    Route,
    Routes, Link
} from 'react-router-dom';
import { NotFound } from "./components/NotFound";
import { ResponsiveAppBar } from "./components/ResponsiveAppBar";

function App() {
    return (
        <>
            <BrowserRouter>
                <ResponsiveAppBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/update" element={<Update />} />
                    <Route path={`*`} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);