import React from "react";
import "./Bookmark.css";
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";

import { useState, useEffect } from "react";
import api from "../../axios/api";
import { useNavigate } from "react-router-dom";

function Bookmark() {
    const [BMData, setBM] = useState([]);
    const navigate = useNavigate();
    const [UserId, setUserId] = useState("");

    useEffect(() => {
        const UId = window.localStorage.getItem("id");
        setUserId(window.localStorage.getItem("id"));

        api.get(`/api/bookmark/${UId}`, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            setBM(res.data);
            console.log(res.data);
        });
    }, []);

    function handleClickCardAction(id, name, img) {
        navigate(`/Cookbook/SweetAndSavory/MealRecipes`);

        window.sessionStorage.setItem("sweetAndSavoryDataId", id);
        window.sessionStorage.setItem("sweetAndSavoryDataName", name);
        window.sessionStorage.setItem("sweetAndSavoryDataImg", img);
    }

    async function handleApi(id) {
        setIsActive((current) => !current);
        await api
            .post("/api/bookmark/onclick", {
                favorite: "1",
                m_id: id,
                u_id: UserId,
            })
            .then((res) => {
                // navigate(`/Bookmark`);
                window.location.reload();
                console.log(res.data);
            });
    }

    const [isActive, setIsActive] = useState(false);

    // const handleClick = (event) => {
    //     // 👇️ toggle isActive state on click
    //     setIsActive((current) => !current);
    // };

    return (
        <>
            <Appbar />

            <Box container sx={{ px: 5, backgroundColor: "#F2F2F2" }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    align="center"
                    sx={{ fontWeight: "normal", m: 0, p: 3, pt: 12 }}
                >
                    學習書籤
                </Typography>

                <Grid container spacing={0} direction="column" height="auto" display="flex" flexDirection="column">
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
                            {BMData.map((BMData) => (
                                <Grid item xs={4}>
                                    <Card
                                        sx={{ textAlign: "center" }}
                                        elevation={0}
                                        className="card-sas"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <CardActionArea
                                            onClick={() => handleClickCardAction(BMData.id, BMData.name, BMData.img)}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={BMData.img}
                                                alt={BMData.name}
                                            />
                                        </CardActionArea>
                                        <CardActions
                                            sx={{ textAlign: "center" }}
                                            className=""
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Grid container direction="row" justifyContent="center" alignItems="center">
                                                <Grid item sx={12}>
                                                    <Button
                                                        variant="text"
                                                        className="underline"
                                                        onClick={() =>
                                                            handleClickCardAction(BMData.id, BMData.name, BMData.img)
                                                        }
                                                    >
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {BMData.name}
                                                        </Typography>
                                                    </Button>
                                                </Grid>
                                                <Grid item sx={12}>
                                                    <Box sx={{ width: "250px" }}>
                                                        <Grid
                                                            container
                                                            direction="row"
                                                            justifyContent="center"
                                                            alignItems="center"
                                                        >
                                                            <Grid item xs={6}>
                                                                <Button variant="text" className="underline" href="#">
                                                                    <AccessTimeRoundedIcon className="orange" />
                                                                    <Typography
                                                                        gutterBottom
                                                                        sx={{ fontSize: 16, mb: 0, ml: 1 }}
                                                                    >
                                                                        40 分鐘
                                                                    </Typography>
                                                                </Button>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Button
                                                                    variant="text"
                                                                    className="underline"
                                                                    // className={isActive ? "true" : ""}
                                                                    onClick={()=>handleApi(BMData.id)}
                                                                >
                                                                    {isActive ? (
                                                                        <div className="center">
                                                                        <BookmarkBorderRoundedIcon className="orange" />
                                                                        <Typography
                                                                            gutterBottom
                                                                            sx={{
                                                                                fontSize: 16,
                                                                                mb: 0,
                                                                                ml: 1,
                                                                            }}
                                                                            style={{
                                                                                display: "inline-block",
                                                                                width: "8vh",
                                                                            }}
                                                                        >
                                                                            儲存書籤
                                                                        </Typography>

                                                                        {/* <TextField
                                                                            className="invisible-input"
                                                                            value={BMData.id}
                                                                            onChange={(e) =>
                                                                                setMId(e.target.value)
                                                                            }
                                                                        >
                                                                        </TextField> */}
                                                                    </div>
                                                                    ) : (
                                                                        <div className="center">
                                                                                <BookmarkRoundedIcon className="orange" />
                                                                                <Typography
                                                                                    gutterBottom
                                                                                    sx={{ fontSize: 16, mb: 0, ml: 1 }}
                                                                                    style={{
                                                                                        display: "inline-block",
                                                                                        width: "8vh",
                                                                                    }}
                                                                                >
                                                                                    移除書籤
                                                                                </Typography>

                                                                                {/* <TextField
                                                                                    className="invisible-input"
                                                                                    value={BMData.id}
                                                                                    onChange={(e) =>
                                                                                        setMId(e.target.value)
                                                                                    }
                                                                                >
                                                                                </TextField> */}
                                                                            </div>
                                                                    )}
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box sx={{ backgroundColor: "#F2F2F2", height: "44.3vh" }}></Box>
        </>
    );
}

export default Bookmark;
