import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { TextField, Container, Box, Grid, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const PetalEntry = (props) => {
    const navigate = useNavigate();

    const location = useLocation();

    const prev_entries = location.state;

    const [petalLength, setPetalLength] = useState("");
    const [petalWidth, setPetalWidth] = useState("");
    const [prediction, setPrediction] = useState("awda");

    const handlePetalLengthChange = (event) => {
        setPetalLength(event.target.value);
    };

    const handlePetalWidthChange = (event) => {
        setPetalWidth(event.target.value);
    };

    async function handleFormSubmit(event) {
        event.preventDefault();
        prev_entries.petalLength = petalLength;
        prev_entries.petalWidth = petalWidth;

        console.log(prev_entries);

        navigate("/prediction", {
            state: prev_entries,
        });
    }

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
                                Petal Length (cm)
                            </Typography>
                            <TextField
                                value={petalLength}
                                required
                                size="small"
                                onChange={handlePetalLengthChange}
                            ></TextField>
                            <Typography variant="h6">
                                Petal Width (cm)
                            </Typography>
                            <TextField
                                value={petalWidth}
                                required
                                size="small"
                                onChange={handlePetalWidthChange}
                            ></TextField>

                            <br />
                            <br />
                            <Button
                                variant="contained"
                                onClick={handleFormSubmit}
                            >
                                PREDICT
                            </Button>
                        </form>

                        <br />
                    </Box>
                </Grid>
            </Container>
        </div>
    );
};

export default PetalEntry;
