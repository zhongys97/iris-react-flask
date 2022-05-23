import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { TextField, Container, Box, Grid, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const SepalEntry = () => {
    const navigate = useNavigate();

    const [sepalLength, setSepalLength] = useState("");
    const [sepalWidth, setSepalWidth] = useState("");

    const handleSepalLengthChange = (event) => {
        setSepalLength(event.target.value);
        // console.log(pred);
    };

    const handleSepalWidthChange = (event) => {
        setSepalWidth(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate("/petal", {
            state: { sepalLength: sepalLength, sepalWidth: sepalWidth },
        });
    };

    return (
        <div>
            <Container maxWidth="md">
                <Grid
                    container
                    maxWidth="sm"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box paddingY={20}>
                        <form>
                            <br></br>
                            <Typography variant="h6">
                                Sepal Length (cm)
                            </Typography>
                            <TextField
                                value={sepalLength}
                                required
                                size="small"
                                onChange={handleSepalLengthChange}
                            ></TextField>
                            <Typography variant="h6">
                                Sepal Width (cm)
                            </Typography>
                            <TextField
                                value={sepalWidth}
                                required
                                size="small"
                                onChange={handleSepalWidthChange}
                            ></TextField>

                            <br />
                            <br />
                            <Button
                                variant="contained"
                                onClick={handleFormSubmit}
                            >
                                NEXT
                            </Button>
                        </form>

                        <br />
                    </Box>
                </Grid>
            </Container>
        </div>
    );
};

export default SepalEntry;
