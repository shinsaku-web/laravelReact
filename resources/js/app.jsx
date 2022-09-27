import "./bootstrap";

import ReactDOM from "react-dom/client";
import { Home } from "./components/Home";
import { Create } from "./components/Create";
import {
    BrowserRouter,
    Route,
    Routes, Link
} from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <h1>Hello React Router</h1>
                <Routes>
                    <Route path="/" component={Home} />
                    <Route path="/create" component={Create} />
                    {/* <Route>
                        <h1>Hello World!!</h1>
                    </Route> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);