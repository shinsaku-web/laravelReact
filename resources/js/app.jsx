import "./bootstrap";

import ReactDOM from "react-dom/client";
import { Hello } from "./components/hello";

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <Hello />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);