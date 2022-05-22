import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

export const EnterAndPredict = () => {
  const [sepalLength, setSepalLength] = useState("");
  const [sepalWidth, setSepalWidth] = useState("");
  const [petalLength, setPetalLength] = useState("");
  const [petalWidth, setPetalWidth] = useState("");
  const [prediction, setPrediction] = useState(" ");

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
    fetch("/api/entry-sepal", {
      method: "POST",
      body: JSON.stringify({
        sepalLength: sepalLength,
        sepalWidth: sepalWidth,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      response.json();
    });
  };

  const handleFormSubmit1 = (event) => {
    event.preventDefault();
    fetch("/api/entry-petal", {
      method: "POST",
      body: JSON.stringify({
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
    fetch("/api/result")
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
      <Typography variant="h2">Iris Species Prediction</Typography>
      <br />
      <Paper elevation={5}>
        <form>
          <br></br>
          <Typography variant="h6">Sepal Length (cm)</Typography>
          <TextField
            value={sepalLength}
            required
            size="small"
            onChange={handleSepalLengthChange}
          ></TextField>
          <Typography variant="h6">Sepal Width (cm)</Typography>
          <TextField
            value={sepalWidth}
            required
            size="small"
            onChange={handleSepalWidthChange}
          ></TextField>

          <br />
          <br />
          <Button variant="contained" onClick={handleFormSubmit}>
            Submit
          </Button>
        </form>

        <br />
      </Paper>

      <br></br>
      <br></br>
      <Paper elevation={5}>
        <form>
          <br></br>
          <Typography variant="h6">Petal Length (cm)</Typography>
          <TextField
            value={petalLength}
            required
            size="small"
            onChange={handlePetalLengthChange}
          ></TextField>
          <Typography variant="h6">Petal Width (cm)</Typography>
          <TextField
            value={petalWidth}
            required
            size="small"
            onChange={handlePetalWidthChange}
          ></TextField>
          <br />
          <br />
          <Button variant="contained" onClick={handleFormSubmit1}>
            SUBMIT
          </Button>
        </form>
        <br />
      </Paper>
      <br />
      <br></br>
      <Paper elevation={5}>
        <Typography variant="h4"> The prediction is:</Typography>
        <br></br>
        <Typography variant="h5">{prediction}</Typography>
        <br />
        <br />
      </Paper>
    </div>
  );
};
