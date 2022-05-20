import React, { useState, useEffect } from "react";

export const EnterAndPredict = () => {
    const [sepalLength, setSepalLength] = useState("");
    const [sepalWidth, setSepalWidth] = useState("");
    const [petalLength, setPetalLength] = useState("");
    const [petalWidth, setPetalWidth] = useState("");
    const [prediction, setPrediction] = useState(" ");

    // useEffect(() => {
    //     fetch("/api")
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //         })
    //         .then((data) => {
    //             setPrediction(data.prediction);
    //         });
    // });

    const handleSepalLengthChange = (event) => {
        setSepalLength(event.target.value);
        // console.log(pred);
    };

    const handleSepalWidthChange = (event) => {
        setSepalWidth(event.target.value);
    };

    const handlePetalLengthChange = (event) => {
        setPetalLength(event.target.value);
    };

    const handlePetalWidthChange = (event) => {
        setPetalWidth(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetch("/api", {
            method: "POST",
            body: JSON.stringify({
                sepalLength: sepalLength,
                sepalWidth: sepalWidth,
                petalLength: petalLength,
                petalWidth: petalWidth,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => {
                response.json();
            })
            .then((msg) => {
                // console.log(msg);
                getPrediction();
            });
    };

    const getPrediction = () => {
        fetch("/api")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                setPrediction(data.prediction);
            });
    };

    return (
        <div>
            <h1>Iris Species Prediction</h1>
            <br />
            <form onSubmit={handleFormSubmit}>
                <div>Sepal Length (cm)</div>
                <input
                    type="text"
                    required
                    value={sepalLength}
                    onChange={handleSepalLengthChange}
                ></input>
                <div>Sepal Width (cm)</div>
                <input
                    type="text"
                    required
                    value={sepalWidth}
                    onChange={handleSepalWidthChange}
                ></input>
                <div>Petal Length (cm)</div>
                <input
                    type="text"
                    required
                    value={petalLength}
                    onChange={handlePetalLengthChange}
                ></input>
                <div>Petal Width (cm)</div>
                <input
                    type="text"
                    required
                    value={petalWidth}
                    onChange={handlePetalWidthChange}
                ></input>
                <br />
                <br />
                <input type="submit"></input>
            </form>
            <br />
            <hr></hr>
            <h1> The prediction is:</h1>
            <div>{prediction}</div>
            <br />
            <br />
            <hr />
        </div>
    );
};
