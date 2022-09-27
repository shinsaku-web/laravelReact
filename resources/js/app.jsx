import "./bootstrap";

import ReactDOM from "react-dom/client";
import { Hello } from "./components/Home";
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <h1>Hello React Router</h1>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/create" component={Creare} />
                    <Route>
                        <h1>Hello World!!</h1>
                    </Route>
                </Switch>
            </BrowserRouter>
            <Hello />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);