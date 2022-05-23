import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Welcome = (props) => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/sepal");
    };

    return (
        <div>
            <Container maxWidth="md">
                <Box paddingY={20}>
                    <Typography variant="h2">
                        WELCOME TO IRIS PREDICTION
                    </Typography>
                    <Box paddingY={10}>
                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            onClick={handleStart}
                        >
                            Start
                        </Button>
                    </Box>
                    <Typography variant="body1">
                        MIBLab at GA Tech 2022
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default Welcome;
