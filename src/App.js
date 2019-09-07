import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/customers">Customers</Link>
                
            </div>
        </Router>
    );
}

export default App;
