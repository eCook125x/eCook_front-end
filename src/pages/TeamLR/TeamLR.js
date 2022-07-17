import React from "react"
import './TeamLR.css'
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions } from '@mui/material';

import image01 from '../../images/TeamLR/01.png';
import image02 from '../../images/TeamLR/02.png';
import image03 from '../../images/TeamLR/03.png';

function TeamLR() {

    return (
        <>
            <Appbar />

            <Box container sx={{ px:5, backgroundColor:'#F2F2F2', pt:8 }}>
                <Typography variant="h5" gutterBottom component="div" align="center" sx={{ fontWeight: 'normal', m: 1, p: 2 }}>
                    查閱團隊學習記錄
                </Typography>
            </Box>

            <Grid 
                container 
                sx={{ px:5, backgroundColor:'#F2F2F2', pb:2.8 }}
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
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
                                image={image01}
                                alt="定食套餐"
                            />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            2022年5月4日 10:00
                            </Typography>

                            <Typography variant="h4" component="div" className="step" sx={{ py:2 }}>
                                味噌蔬食鹹派
                            </Typography>
                            <Typography variant="h5" sx={{ py:2 }}>
                            餅乾底
                            </Typography>

                            <Box textAlign='left'>
                                <p>上傳者</p>
                                <Button variant="contained" sx={{ mb:2 }} className="upload">若雯</Button>
                                <p>協作者</p>
                                <Grid container spacing={2} direction="row">
                                    <Grid item xs={4}><Button className="help" variant="contained">秀鳳</Button></Grid>
                                    <Grid item xs={4}><Button className="help" variant="contained">惠玲</Button></Grid>
                                    <Grid item xs={4}><Button className="help" variant="contained">碧如</Button></Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                        <CardActions className="center">
                            <Button variant="contained" style={{ backgroundColor: '#FF8527' }} href="/LearningRecord/TeamLR/TeamLR-Directions">查看更多</Button>
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
                                image={image02}
                                alt="原味提拉米蘇"
                            />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            2022年5月4日 10:00
                            </Typography>

                            <Typography variant="h4" component="div" className="step" sx={{ py:2 }}>
                            原味提拉米蘇
                            </Typography>
                            <Typography variant="h5" sx={{ py:2 }}>
                            手指餅乾
                            </Typography>

                            <Box textAlign='left'>
                                <p>上傳者</p>
                                <Button variant="contained" sx={{ mb:2 }} className="upload">若雯</Button>
                                <p>協作者</p>
                                <Grid container spacing={2} direction="row">
                                    <Grid item xs={4}><Button className="help" variant="contained">秀鳳</Button></Grid>
                                    <Grid item xs={4}><Button className="help" variant="contained">惠玲</Button></Grid>
                                    <Grid item xs={4}><Button className="help" variant="contained">碧如</Button></Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                        <CardActions className="center">
                            <Button variant="contained" style={{ backgroundColor: '#FF8527' }}>查看更多</Button>
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
                                alt="味噌藍莓乳酪"
                            />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            2022年5月4日 10:00
                            </Typography>

                            <Typography variant="h4" component="div" className="step" sx={{ py:2 }}>
                            味噌藍莓乳酪
                            </Typography>
                            <Typography variant="h5" sx={{ py:2 }}>
                            乳酪餡
                            </Typography>

                            <Box textAlign='left'>
                                <p>上傳者</p>
                                <Button variant="contained" sx={{ mb:2 }} className="upload">若雯</Button>
                                <p>協作者</p>
                                <Grid container spacing={2} direction="row">
                                    <Grid item xs={4}><Button className="help" variant="contained">秀鳳</Button></Grid>
                                    <Grid item xs={4}><Button className="help" variant="contained">惠玲</Button></Grid>
                                    <Grid item xs={4}><Button className="help" variant="contained">碧如</Button></Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                        <CardActions className="center">
                            <Button variant="contained" style={{ backgroundColor: '#FF8527' }}>查看更多</Button>
                        </CardActions>
                    </Card>     
                </Grid>
            </Grid>
        </>

    );
}

export default TeamLR