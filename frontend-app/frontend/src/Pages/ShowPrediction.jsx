import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { TextField, Container, Box, Grid, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { Paper } from "@mui/material";

const ShowPrediction = () => {
    const location = useLocation();
    // const data = location;

    const navigate = useNavigate();

    console.log(location.state);

    const entries = location.state;

    const [prediction, setPrediction] = useState(" ");

    useEffect(() => {
        startCalculation();
        getPrediction();
        console.log(prediction);
    }, []);

    const startCalculation = () => {
        fetch("/api", {
            method: "POST",
            body: JSON.stringify(entries),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => {
                response.json();
            })
            .then((msg) => {
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
                console.log(data);
                setPrediction(data.prediction);
            });
    };

    const handleRestart = () => {
        navigate("/");
    };

    return (
        <Container maxWidth="large" justifyContent="center">
            <Box paddingY={20}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Paper elevation={5}>
                            <Box padding={8}>
                                <Typography variant="h3">
                                    Values entered:
                                </Typography>
                                <br></br>
                                <Typography variant="h5">
                                    Sepal Length: {entries.sepalLength} cm
                                </Typography>
                                <br></br>
                                <Typography variant="h5">
                                    Sepal Width: {entries.sepalWidth} cm
                                </Typography>
                                <br></br>
                                <Typography variant="h5">
                                    Petal Length: {entries.petalLength} cm
                                </Typography>
                                <br></br>
                                <Typography variant="h5">
                                    Petal Width: {entries.petalWidth} cm
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={5}>
                            <Box padding={8}>
                                <Typography variant="h3">
                                    The prediction is:
                                </Typography>
                                <br></br>
                                <Typography variant="h5">
                                    {prediction}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Box padding={5} justifyContent="center">
                            <Button variant="contained" onClick={handleRestart}>
                                START OVER
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ShowPrediction;
