import React from "react";
import "./TeamLR.css";
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions } from "@mui/material";

import { useState, useEffect } from "react";
import api from "../../axios/api";
import { useNavigate } from "react-router-dom";

function TeamLR() {
    const [TLRData, setTLR] = useState([]);
    const navigate = useNavigate();
    const [UId, setUId] = useState("");

    useEffect(() => {
        setUId(window.localStorage.getItem("id"));

        api.get(`/api/studyRecord`, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            setTLR(res.data);
            console.log(res.data);
        });
    }, []);
    console.log(TLRData);
    console.log(UId);

    function handleClickCardAction(collaborator, cuisineName, img, username, SId) {
        navigate(`/LearningRecord/TeamLR/TeamLR-Directions`);

        window.sessionStorage.setItem("collaborator", collaborator);
        window.sessionStorage.setItem("cuisineName", cuisineName);
        window.sessionStorage.setItem("img", img);
        window.sessionStorage.setItem("username", username);
        window.sessionStorage.setItem("SId", SId);
    }

    return (
        <>
            <Appbar />

            <Box container sx={{ px: 5, backgroundColor: "#F2F2F2", pt: 8 }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    align="center"
                    sx={{ fontWeight: "normal", m: 1, p: 2 }}
                >
                    查閱團隊學習記錄
                </Typography>
            </Box>

            <Grid
                container
                sx={{ px: 5, backgroundColor: "#F2F2F2", pb: 2.8 }}
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {TLRData.map((TLRData) =>
                    TLRData.u_id.toString() !== UId ? (
                        ((<div>{TLRData.u_id}</div>),
                        (
                            <Grid item xs={4}>
                                <Card
                                    sx={{ textAlign: "center", p: 1 }}
                                    elevation={0}
                                    className="card-teamLR"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <CardContent>
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            image={TLRData.img}
                                            alt={TLRData.cuisineCategory}
                                        />
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {TLRData.time}
                                        </Typography>

                                        <Typography variant="h4" component="div" className="step" sx={{ py: 2 }}>
                                            {TLRData.cuisineCategory}
                                        </Typography>
                                        <Typography variant="h5" sx={{ py: 2 }}>
                                            {TLRData.cuisineItem}
                                        </Typography>

                                        <Box textAlign="left">
                                            <p className="font-normal">上傳者</p>
                                            <Button variant="contained" sx={{ mb: 2 }} className="upload">
                                                {TLRData.username}
                                            </Button>
                                            <p className="font-normal">協作者</p>
                                            {/* <Grid container spacing={2} direction="row">
                                        <Grid item xs={4}><Button className="help" variant="contained">{TLRData.collaborator}</Button></Grid>
                                    </Grid> */}
                                            <Grid containerdirection="row">
                                                <Grid>
                                                    <Button className="help" variant="contained">
                                                        {TLRData.collaborator}
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </CardContent>
                                    <CardActions className="center">
                                        <Button
                                            className="font-normal"
                                            variant="contained"
                                            style={{ backgroundColor: "#FF8527" }}
                                            onClick={() =>
                                                handleClickCardAction(
                                                    TLRData.collaborator,
                                                    TLRData.cuisineCategory,
                                                    TLRData.img,
                                                    TLRData.username,
                                                    TLRData.id
                                                )
                                            }
                                        >
                                            查看更多
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <div></div>
                    )
                )}
            </Grid>
        </>
    );
}

export default TeamLR;
