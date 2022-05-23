import "./App.css";
import React from "react";
import Welcome from "./Pages/Welcome";
import SepalEntry from "./Pages/SepalEntry";
import PetalEntry from "./Pages/PetalEntry";
import { EnterAndPredict } from "./Pages/EnterAndPredict";
import ShowPrediction from "./Pages/ShowPrediction";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Welcome />}></Route>
                    <Route exact path="/sepal" element={<SepalEntry />}></Route>
                    <Route exact path="/petal" element={<PetalEntry />}></Route>
                    <Route
                        exact
                        path="/prediction"
                        element={<ShowPrediction />}
                    ></Route>
                </Routes>
            </BrowserRouter>
            ;
        </div>
    );
}

export default App;
