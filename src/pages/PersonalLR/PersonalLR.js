import React from "react";
import "./PersonalLR.css";
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions } from "@mui/material";

// import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import { useState, useEffect } from "react";
import api from "../../axios/api";
import { useNavigate } from "react-router-dom";

function PersonalLR() {
    const [PLRData, setPLR] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const UId = window.localStorage.getItem("id");

        api.get(`/api/studyRecord/personnelLR/${UId}`, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            setPLR(res.data);
            console.log(res.data);
        });
    }, []);
    console.log(PLRData);

    function handleClickCardAction(collaborator, cuisineName, img, star, text, time, username, SId) {
        navigate(`/LearningRecord/PersonalLR/PersonalLR-Directions`);

        window.sessionStorage.setItem("collaborator", collaborator);
        window.sessionStorage.setItem("cuisineName", cuisineName);
        window.sessionStorage.setItem("img", img);
        window.sessionStorage.setItem("star", star);
        window.sessionStorage.setItem("text", text);
        window.sessionStorage.setItem("time", time);
        window.sessionStorage.setItem("username", username);
        window.sessionStorage.setItem("SId", SId);
    }

    return (
        <body className="bg-gray">
            <Appbar />

            <Box container sx={{ px: 5, backgroundColor: "#F2F2F2", pt: 8 }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    align="center"
                    sx={{ fontWeight: "normal", m: 1, p: 2 }}
                >
                    ??????????????????
                </Typography>
            </Box>

            {/* <Box container sx={{ px:5, backgroundColor:'#F2F2F2' }}>
                <Grid container sx={{ mb:2 }} className="bg-w">
                        <Grid item xs={6} sx={{ p:4 }}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={image01}
                                alt="????????????1"
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ py:4, pr:4 }}>
                            <Typography variant="h4" sx={{ py:2 }}>?????????????????? <ArrowForwardIosRoundedIcon sx={{ ml:30 }}/></Typography>
                            
                            <Typography variant="h5" className="text-grey" sx={{ py:2 }}>???????????????</Typography>
                            <Typography variant="h4" sx={{ py:2 }} className="orange">3???</Typography>
                        </Grid>
                </Grid>

                <Grid container sx={{ mb:2 }} className="bg-w">
                        <Grid item xs={6} sx={{ p:4 }}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={image02}
                                alt="????????????1"
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ py:4, pr:4 }}>
                            <Typography variant="h4" sx={{ py:2 }}>?????????????????? <ArrowForwardIosRoundedIcon sx={{ ml:30 }}/></Typography>
                            
                            <Typography variant="h5" className="text-grey" sx={{ py:2 }}>???????????????</Typography>
                            <Typography variant="h4" sx={{ py:2 }} className="orange">3???</Typography>
                        </Grid>
                </Grid>

                <Grid container sx={{ pb:0 }} className="bg-w">
                        <Grid item xs={6} sx={{ p:4 }}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={image03}
                                alt="????????????1"
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ py:4, pr:4 }}>
                            <Typography variant="h4" sx={{ py:2 }}>????????????????????? <ArrowForwardIosRoundedIcon sx={{ ml:30 }}/></Typography>
                            
                            <Typography variant="h5" className="text-grey" sx={{ py:2 }}>???????????????</Typography>
                            <Typography variant="h4" sx={{ py:2 }} className="orange">3???</Typography>
                        </Grid>
                </Grid>
                <br/>
            </Box> */}

            <Grid
                container
                sx={{ px: 5, backgroundColor: "#F2F2F2", pb: 2.8 }}
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {PLRData.map((PLRData) => (
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
                                    image={PLRData.img}
                                    alt={PLRData.cuisineName}
                                />
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {PLRData.time}
                                </Typography>

                                <Typography variant="h4" component="div" className="step" sx={{ py: 2 }}>
                                    {PLRData.cuisineName}
                                </Typography>
                                <Typography variant="h5" sx={{ pt: 2 }}>
                                    {PLRData.cuisineItem}
                                </Typography>
                            </CardContent>
                            <CardActions className="center">
                                <Button
                                    className="font-normal"
                                    variant="contained"
                                    style={{ backgroundColor: "#FF8527" }}
                                    onClick={() =>
                                        handleClickCardAction(
                                            PLRData.collaborator,
                                            PLRData.cuisineName,
                                            PLRData.img,
                                            PLRData.star,
                                            PLRData.text,
                                            PLRData.time,
                                            PLRData.username,
                                            PLRData.id
                                        )
                                    }
                                >
                                    ????????????
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                {/* <Grid item xs={4}>
                    <Card 
                        sx={{ textAlign: 'center', p:1 }} 
                        elevation={0} 
                        className="card-teamLR" 
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CardContent>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={image02}
                                alt="??????????????????"
                            />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            2022???5???4??? 10:00
                            </Typography>

                            <Typography variant="h4" component="div" className="step" sx={{ py:2 }}>
                            ??????????????????
                            </Typography>
                            <Typography variant="h5" sx={{ pt:2 }}>
                            ????????????
                            </Typography>
                        </CardContent>
                        <CardActions className="center">
                            <Button variant="contained" style={{ backgroundColor: '#FF8527' }}>????????????</Button>
                        </CardActions>
                    </Card>     
                </Grid>
                <Grid item xs={4}>
                    <Card 
                        sx={{ textAlign: 'center', p:1 }} 
                        elevation={0} 
                        className="card-teamLR" 
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CardContent>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={image03}
                                alt="??????????????????"
                            />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            2022???5???4??? 10:00
                            </Typography>

                            <Typography variant="h4" component="div" className="step" sx={{ py:2 }}>
                            ??????????????????
                            </Typography>
                            <Typography variant="h5" sx={{ pt:2 }}>
                            ?????????
                            </Typography>
                        </CardContent>
                        <CardActions className="center">
                            <Button variant="contained" style={{ backgroundColor: '#FF8527' }}>????????????</Button>
                        </CardActions>
                    </Card>     
                </Grid> */}
            </Grid>
        </body>
    );
}

export default PersonalLR;
