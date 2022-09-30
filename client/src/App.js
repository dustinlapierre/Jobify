import Landing from "./pages/Landing";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App()
{
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/register">Register</Link>
                <Link to="/landing">Landing</Link>
            </nav>
            <Routes>
                <Route path="/" element={<div>DASHBOARD</div>} />
                <Route path="/register" element={<div>REGISTER</div>} />
                <Route path="/landing" element={<Landing />} />
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
