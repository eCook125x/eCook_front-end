import React from "react";
import "./TeamLR-Directions.css";
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
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";

import { useState, useEffect } from "react";
import api from "../../axios/api";
import { useNavigate } from "react-router-dom";

function TeamLRDirections() {
    // const [value, setValue] = React.useState(3);

    const [TeamLRDData, setTeamLRD] = useState([]);
    const [TeamLRPData, setTeamLRP] = useState([]);
    const [SRData, setSR] = useState([]);

    const [collaborator, setcollaborator] = useState([]);
    const [cuisineName, setcuisineName] = useState([]);
    const [img, setimg] = useState([]);
    const [username, setusername] = useState([]);
    const [userImg, setuserImg] = useState([]);

    useEffect(() => {
        setUId(window.localStorage.getItem("id"));
        setuserImg(window.localStorage.getItem("userImg"));
        // setuserImg("https://i.imgur.com/DjkdE7v.jpg");
        setSId(window.sessionStorage.getItem("SId"));
        setRId("2");

        setcollaborator(window.sessionStorage.getItem("collaborator"));
        setcuisineName(window.sessionStorage.getItem("cuisineName"));
        setimg(window.sessionStorage.getItem("img"));
        setusername(window.sessionStorage.getItem("username"));
        const SId = window.sessionStorage.getItem("SId");

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

        api.get(`/api/studyRecord/${SId}`, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            setSR([res.data]);
        });
    }, []);
    // console.log(SRData);

    const [Text, setText] = useState("");
    const [SId, setSId] = useState("");
    const [RId, setRId] = useState("");
    const [UId, setUId] = useState("");
    const navigate = useNavigate();
    const moment = require("moment");
    const currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");

    async function handleApi() {
        console.log(Text);
        console.log(SId);
        console.log(RId);
        console.log(UId);
        console.log(currentDateTime);

        await api
            .post("/api/studyRecord/message/add", {
                text: Text,
                s_id: SId,
                r_id: RId,
                u_id: UId,
                time: currentDateTime,
            })
            .then((res) => {
                navigate("/complete");
                console.log(res.data);
            });
    }

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
                    查閱團隊學習記錄
                </Typography>

                <Typography sx={{ mb: 2, pb: 2 }} variant="h5" className="step">
                    {cuisineName}
                </Typography>

                <Box textAlign="left">
                    <Grid container spacing={2} direction="row">
                        <Grid item xs={2} sx={{ px: 2, m: 0 }}>
                            <p>上傳者</p>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" sx={{ mb: 2 }} className="upload" fullWidth>
                                {username}
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <p>協作者</p>
                        </Grid>

                        <Grid item xs={2}>
                            <Button className="help" variant="contained">
                                {collaborator}
                            </Button>
                        </Grid>
                        {/* <Grid item xs={2}>
                            <Button className="help" variant="contained">
                                惠玲
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button className="help" variant="contained">
                                碧如
                            </Button>
                        </Grid> */}
                    </Grid>
                </Box>

                <Grid container spacing={3} sx={{ my: 1, mb: 4 }}>
                    <Grid item xs={4}>
                        <CardMedia component="img" height="auto" image={img} alt={cuisineName} />
                    </Grid>
                    {/* <Grid item xs={4}>
                        <CardMedia component="img" height="auto" image={image03} alt="定食套餐" />
                    </Grid>
                    <Grid item xs={4}>
                        <CardMedia component="img" height="auto" image={image04} alt="定食套餐" />
                    </Grid> */}
                </Grid>

                <Typography sx={{ mb: 0 }} variant="h6" className="orange">
                    {username}的學習紀錄
                </Typography>
                {SRData.map((SRData) => (
                    <ListItem alignItems="flex-start" sx={{ mb: 4, py: 2 }} className="" backgroundColor="#FFF">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={SRData.u_img} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={SRData.username + "的自我評分"}
                            secondary={
                                <React.Fragment>
                                    <Rating
                                        name="simple-controlled"
                                        value={SRData.star}
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
                                    >
                                        {SRData.text}
                                    </Typography>
                                    {" -" + SRData.time}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}

                <Typography sx={{ mb: 2 }} variant="h6">
                    管理者回饋
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
                    夥伴回饋
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

                {/* <ListItem alignItems="flex-start" sx={{ mb: 4, py: 2 }} className="list">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={image10} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="惠玲"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    建議可以再烤久一點，水分要放多一點。
                                </Typography>
                                {"- 4天前"}
                            </React.Fragment>
                        }
                    />
                </ListItem> */}

                <Typography sx={{ mb: 2 }} variant="h6" className="text-red">
                    我想回饋
                </Typography>

                <ListItem alignItems="flex-start" sx={{ mb: 2, py: 2 }} className="list">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={userImg} />
                    </ListItemAvatar>
                    <ListItemText
                        backgroundColor="#FFF"
                        secondary={
                            <React.Fragment>
                                <TextField
                                    id="outlined-basic"
                                    label="｜請輸入文字......"
                                    variant="outlined"
                                    sx={{ pr: 2 }}
                                    className="full-width"
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </React.Fragment>
                        }
                    />
                </ListItem>

                <Box textAlign="right" sx={{ mb: 4 }}>
                    <Button
                        variant="contained"
                        className=""
                        style={{ backgroundColor: "#FF8527" }}
                        onClick={handleApi}
                        type="submit"
                    >
                        送出
                    </Button>
                </Box>
                <br />
            </Box>
        </>
    );
}

export default TeamLRDirections;
