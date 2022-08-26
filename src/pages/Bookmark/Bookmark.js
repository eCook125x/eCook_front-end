import React from "react"
import './Bookmark.css'
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { Link } from 'react-router-dom';

import image01 from '../../images/SweetAndSavory/01.png';

import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

function Bookmark() {

    return (
        <>
            <Appbar />

            <Box container sx={{ px:5, backgroundColor:'#F2F2F2' }}>
                <Typography variant="h5" gutterBottom component="div" align="center" sx={{ fontWeight: 'normal', m: 0, p: 3, pt:12 }}>
                學習書籤
                </Typography>

                <Grid
                    container

                    spacing={0}
                    direction="column"
                    height="auto" display="flex" flexDirection="column"
                >
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
                            sx={{ px:5 }}
                        >
                            <Grid item xs={4}>
                                <Card 
                                    sx={{ textAlign: 'center' }} 
                                    elevation={0} 
                                    className="card-sas" 
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <CardActionArea>
                                        <Link to={'/Cookbook/SweetAndSavory/MealRecipes'} color="inherit" underline="none">
                                            <CardMedia
                                            component="img"
                                            height="200"
                                            image={image01}
                                            alt="味噌蔬食鹹派"
                                            />
                                        </Link>
                                    </CardActionArea>
                                    <CardActions 
                                        sx={{ textAlign: 'center' }} 
                                        className="" 
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Grid 
                                            container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Grid item sx={12}>
                                                <Button variant="text" className="underline" href="/Cookbook/SweetAndSavory/MealRecipes">
                                                    <Typography gutterBottom variant="h5" component="div">
                                                    味噌蔬食鹹派
                                                    </Typography>
                                                </Button>
                                            </Grid>
                                            <Grid item sx={12}>
                                                <Box sx={{ width: '250px' }}>
                                                    <Grid 
                                                        container
                                                        direction="row"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                    >
                                                        <Grid item xs={6}>
                                                            <Button variant="text" className="underline" href="#">
                                                                <AccessTimeRoundedIcon className="orange"/>
                                                                <Typography gutterBottom sx={{ fontSize: 16, mb:0, ml:1 }}>
                                                                40 分鐘
                                                                </Typography>
                                                            </Button>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Button variant="text" className="underline" href="#">
                                                                <BookmarkBorderRoundedIcon className="orange"/>
                                                                <Typography gutterBottom sx={{ fontSize: 16, mb:0, ml:1 }}>
                                                                儲存書籤
                                                                </Typography>
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CardActions>
                                </Card>
                            
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box sx={{ backgroundColor:'#F2F2F2', height:'44.3vh' }}>

            </Box>
          
            
       
 </>

    );
}

export default  Bookmark