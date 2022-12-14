import React from "react";
import "./PersonalLR-Directions.css";
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

import { useState, useEffect } from "react";
import api from "../../axios/api";

function PersonalLRDirections() {
    // const [value, setValue] = React.useState(3);

    const [collaborator, setcollaborator] = useState([]);
    const [cuisineName, setcuisineName] = useState([]);
    const [img, setimg] = useState([]);
    const [star, setstar] = useState([]);
    const [text, settext] = useState([]);
    const [time, settime] = useState([]);
    const [username, setusername] = useState([]);
    const [userImg, setuserImg] = useState([]);

    const [TeamLRDData, setTeamLRD] = useState([]);
    const [TeamLRPData, setTeamLRP] = useState([]);

    useEffect(() => {
        setcollaborator(window.sessionStorage.getItem("collaborator"));
        setcuisineName(window.sessionStorage.getItem("cuisineName"));
        setimg(window.sessionStorage.getItem("img"));
        setstar(window.sessionStorage.getItem("star"));
        settext(window.sessionStorage.getItem("text"));
        settime(window.sessionStorage.getItem("time"));
        setusername(window.sessionStorage.getItem("username"));
        const SId = window.sessionStorage.getItem("SId");

        setuserImg(window.localStorage.getItem("userImg"));
        // setuserImg("https://i.imgur.com/DjkdE7v.jpg");

        api.get(`/api/studyRecord/message/${SId}`, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            setTeamLRD(res.data);
        });

        api.get(`/api/studyRecord/pmessage/${SId}`, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            setTeamLRP(res.data);
        });
    }, []);

    return (
        <>
            <Appbar />

            <Box container sx={{ px: 5, backgroundColor: "#FFF", pt: 8 }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    align="center"
                    sx={{ fontWeight: "normal", m: 1, p: 2 }}
                >
                    ????????????????????????
                </Typography>

                <Typography sx={{ mb: 2, pb: 2 }} variant="h5" className="step">
                    {cuisineName}
                </Typography>

                <Box textAlign="left">
                    <Grid container spacing={2} direction="row">
                        <Grid item xs={2}>
                            <p className="font-normal">?????????</p>
                        </Grid>

                        <Grid item xs={2}>
                            <Button className="help" variant="contained">
                                {collaborator}
                            </Button>
                        </Grid>
                        {/* <Grid item xs={2}><Button className="help" variant="contained">??????</Button></Grid>
                        <Grid item xs={2}><Button className="help" variant="contained">??????</Button></Grid> */}
                    </Grid>
                </Box>

                <Grid container spacing={3} sx={{ my: 1, mb: 4 }}>
                    <Grid item xs={4}>
                        <CardMedia component="img" height="auto" image={img} alt={cuisineName} />
                    </Grid>
                    {/* <Grid item xs={4}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image03}
                            alt="????????????"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image04}
                            alt="????????????"
                        />
                    </Grid> */}
                </Grid>

                <Typography sx={{ mb: 0 }} variant="h6" className="font-large-orange">
                    ??????????????????
                </Typography>
                <ListItem alignItems="flex-start" sx={{ mb: 4, py: 2 }} className="" backgroundColor="#FFF">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={userImg} />
                    </ListItemAvatar>
                    <ListItemText
                        className="font-normal"
                        primary={username + "???????????????"}
                        secondary={
                            <React.Fragment>
                                <Rating
                                    name="simple-controlled"
                                    value={star}
                                    // onChange={(event, newValue) => {
                                    // setValue(newValue);
                                    // }}
                                />
                                <br />
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                    className="font-normal"
                                >
                                    {text}
                                </Typography>
                                {" -" + time}
                            </React.Fragment>
                        }
                    />
                </ListItem>

                <Typography sx={{ mb: 2 }} variant="h6">
                    ???????????????
                </Typography>

                {TeamLRDData.map((TeamLRDData) => (
                    <ListItem alignItems="flex-start" sx={{ mb: 2, py: 2 }} className="list">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={TeamLRDData.img} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={TeamLRDData.username}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        className="font-normal"
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {TeamLRDData.text}
                                    </Typography>
                                    {" -" + TeamLRDData.time}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}

                <Typography sx={{ mb: 2 }} variant="h6">
                    ????????????
                </Typography>

                {TeamLRPData.map((TeamLRPData) => (
                    <ListItem alignItems="flex-start" sx={{ mb: 2, py: 2 }} className="list">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={TeamLRPData.img} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={TeamLRPData.username}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        className="font-normal"
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {TeamLRPData.text}
                                    </Typography>
                                    {" -" + TeamLRPData.time}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}
                <br />
            </Box>
        </>
    );
}

export default PersonalLRDirections;
