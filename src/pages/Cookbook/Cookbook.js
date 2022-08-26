import React from "react";
import "./Cookbook.css";
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActions, CardActionArea, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import api from "../../axios/api";

function Cookbook() {
    const [cookbookData, setCookbook] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get("/api/cookbook", {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            setCookbook(res.data);
            console.log(res.data);
        });
    }, []);

    function handleClickCardAction(id, name) {
        navigate(`/Cookbook/SweetAndSavory`);

        window.sessionStorage.setItem("cookbookId", id);
        window.sessionStorage.setItem("cookbookName", name);
    }

    return (
        <>
            <Appbar />

            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={0}
                direction="column"
                sx={{ alignItems: "center", justifyContent: "center" }}
                height="100vh"
                display="flex"
                flexDirection="column"
            >
                <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    align="center"
                    sx={{ fontWeight: "normal", m: 1, p: 2 }}
                >
                    食譜類別
                </Typography>

                {/* <ul>
                    {cookbookData.map(cookbookData => 
                        <div>
                        {cookbookData.id}
                        {cookbookData.img}
                        {cookbookData.name}
                        </div>
                    )}
                </ul> */}

                <Box>
                    <Grid
                        container
                        spacing={0}
                        columns={{ xs: 12, sm: 12, md: 12 }}
                        rowSpacing={3}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ px: 5 }}
                    >
                        {cookbookData.map((cookbookData) => (
                            <Grid item xs={4}>
                                <Card
                                    sx={{ textAlign: "center" }}
                                    elevation={0}
                                    className="card"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <CardActionArea
                                        onClick={() => handleClickCardAction(cookbookData.id, cookbookData.name)}
                                    >
                                        {/* <Link to={`/Cookbook/SweetAndSavory/`} color="inherit" underline="none"> */}
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={cookbookData.img}
                                            alt={cookbookData.id}
                                        />
                                        {/* </Link> */}
                                    </CardActionArea>
                                    <CardActions
                                        sx={{ textAlign: "center" }}
                                        className="card"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Button
                                            variant="text"
                                            className="underline"
                                            onClick={() => handleClickCardAction(cookbookData.id, cookbookData.name)}
                                        >
                                            <Typography gutterBottom variant="h5" component="div">
                                                {cookbookData.name}
                                            </Typography>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}

                        {/* <Grid item xs={4}>
                            <Card sx={{ textAlign: 'center' }} elevation={0} className="card" >
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image={image01}
                                    alt="定食套餐"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        定食套餐
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            
                                <Card 
                                    sx={{ textAlign: 'center' }} 
                                    elevation={0} 
                                    className="card" 
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <CardActionArea>
                                        <Link to={'/Cookbook/SweetAndSavory'} color="inherit" underline="none">
                                            <CardMedia
                                            component="img"
                                            height="200"
                                            image={image02}
                                            alt="甜鹹點"
                                            />
                                        </Link>
                                    </CardActionArea>
                                    <CardActions 
                                        sx={{ textAlign: 'center' }} 
                                        className="card" 
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Button variant="text" className="underline" href="/Cookbook/SweetAndSavory">
                                            <Typography gutterBottom variant="h5" component="div">
                                            甜鹹點
                                            </Typography>
                                        </Button>
                                    </CardActions>
                                </Card>
                            
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ textAlign: 'center' }} elevation={0} className="card" >
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image={image03}
                                    alt="飲品"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        飲品
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ textAlign: 'center' }} elevation={0} className="card" >
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image={image04}
                                    alt="花果茶"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    花果茶
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ textAlign: 'center' }} elevation={0} className="card" >
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image={image05}
                                    alt="季節限定"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    季節限定
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ textAlign: 'center' }} elevation={0} className="card" >
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image={image06}
                                    alt="其他類別"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    其他類別
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid> */}
                    </Grid>
                </Box>
            </Grid>
        </>
    );
}

export default Cookbook;
