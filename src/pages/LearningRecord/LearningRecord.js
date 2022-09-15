import React from "react";
import "./LearningRecord.css";
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

import image01 from "../../images/link/01.png";
import image02 from "../../images/link/02.png";

function LearningRecord() {
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
                    學習記錄
                </Typography>

                <Box>
                    <Grid
                        container
                        spacing={{ xs: 1, md: 1 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs>
                            <Card sx={{ textAlign: "center" }} elevation={0} className="card-link">
                                <CardActionArea href="/LearningRecord/PersonalLR">
                                    <CardMedia component="img" height="200" image={image01} alt="自我學習記錄" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            自我學習記錄
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="height">
                                            記錄自己製作餐點的學習歷程，檢視自我的學習表現。
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="center" sx={{ p: 2 }}>
                                    <Button
                                        size=""
                                        variant="contained"
                                        color="warning"
                                        disableElevation
                                        href="/LearningRecord/PersonalLR"
                                        className="font-normal"
                                    >
                                        開始記錄
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card sx={{ textAlign: "center" }} elevation={0} className="card-link">
                                <CardActionArea href="/LearningRecord/TeamLR">
                                    <CardMedia component="img" height="200" image={image02} alt="查閱團隊學習記錄" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            查閱團隊學習記錄
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="height">
                                            查看團隊其他長輩的學習記錄，增進團隊互動。
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="center" sx={{ p: 2 }}>
                                    <Button
                                        size=""
                                        variant="contained"
                                        color="warning"
                                        disableElevation
                                        href="/LearningRecord/TeamLR"
                                        className="font-normal"
                                    >
                                        查閱記錄
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </>
    );
}

export default LearningRecord;
