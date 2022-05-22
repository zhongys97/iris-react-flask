import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { EnterAndPredict } from "./components/EnterAndPredict";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/system";

function App() {
    return (
        <div className="App">
            {/* <Router>
                <Routes>
                    <Route path="/" component={EnterAndPredict}></Route>
                </Routes>
            </Router> */}
            <Container maxWidth="md">
                <EnterAndPredict />
            </Container>
        </div>
    );
}

export default App;
