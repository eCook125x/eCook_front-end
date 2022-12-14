import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Link.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

import image01 from "../../images/link/01.png";
import image02 from "../../images/link/02.png";
import image03 from "../../images/link/03.png";

function Link() {
    return (
        <>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={0}
                direction="column"
                style={{ minHeight: "100vh" }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    align="center"
                    sx={{ fontWeight: "bold", m: 1, p: 2 }}
                >
                    <span className="orange">eCook</span>
                    <br />
                    高齡餐廚巧幫手
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
                                <CardActionArea href="/cookbook">
                                    <CardMedia component="img" height="200" image={image01} alt="料理食譜" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            料理食譜
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="height">
                                            工作場域的數位餐飲食譜，提供即時性的輔助學習，降低中高齡者就業的工作壓力。
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="center" sx={{ p: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="warning"
                                        disableElevation
                                        href="/cookbook"
                                        className="font-normal"
                                    >
                                        開始料理
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card sx={{ textAlign: "center" }} elevation={0} className="card-link">
                                <CardActionArea href="/LearningRecord">
                                    <CardMedia component="img" height="200" image={image02} alt="學習記錄" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            學習記錄
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="height">
                                            串連自我學習記錄和團隊學習記錄，時刻檢視學習歷程。
                                            <br />
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="center" sx={{ p: 2 }}>
                                    <Button
                                        size=""
                                        variant="contained"
                                        color="warning"
                                        disableElevation
                                        href="/LearningRecord"
                                        className="font-normal"
                                    >
                                        前往記錄
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card sx={{ textAlign: "center" }} elevation={0} className="card-link">
                                <CardActionArea href="/Bookmark">
                                    <CardMedia component="img" height="200" image={image03} alt="學習書籤" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            學習書籤
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className="height">
                                            為提供即時性的料理學習，可選擇想要加入的食譜內容，建立簡單且便利的食譜清單。
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="center" sx={{ p: 2 }}>
                                    <Button
                                        size=""
                                        variant="contained"
                                        color="warning"
                                        disableElevation
                                        href="/Bookmark"
                                        className="font-normal"
                                    >
                                        查看書籤
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

export default Link;
