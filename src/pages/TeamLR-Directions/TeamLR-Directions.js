import React from "react"
import './TeamLR-Directions.css'
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';

import image01 from '../../images/TeamLRDirections/01.png';
import image10 from '../../images/MealRecipes/10.png';

function TeamLRDirections() {
    const [value, setValue] = React.useState(3);

    return (
        <>
            <Appbar />

            <Box container sx={{ px:5, backgroundColor:'#FFF', pt:8 }}>
                <Typography variant="h5" gutterBottom component="div" align="center" sx={{ fontWeight: 'normal', m: 1, p: 2 }}>
                    查閱團隊學習記錄
                </Typography>

                <Typography sx={{ mb:2, pb:2 }} variant="h5" className="step">
                味噌蔬食鹹派
                </Typography>

                <Box textAlign='left'>
                    <Grid container spacing={2} direction="row">
                        <Grid item xs={2} sx={{ px:2, m:0 }}><p>上傳者</p></Grid>
                        <Grid item xs={2}><Button variant="contained" sx={{ mb:2 }} className="upload" fullWidth>若雯</Button></Grid>
                        <Grid item xs={2}><p>協作者</p></Grid>
                    
                        <Grid item xs={2}><Button className="help" variant="contained">秀鳳</Button></Grid>
                        <Grid item xs={2}><Button className="help" variant="contained">惠玲</Button></Grid>
                        <Grid item xs={2}><Button className="help" variant="contained">碧如</Button></Grid>
                    </Grid>
                </Box>

                <Grid container spacing={3} sx={{ my:1, mb:4 }}>
                    <Grid item xs={4}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image01}
                            alt="定食套餐"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image01}
                            alt="定食套餐"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image01}
                            alt="定食套餐"
                        />
                    </Grid>
                </Grid>

                <Typography sx={{ mb:0 }} variant="h6" className="orange">
                我的學習紀錄
                </Typography>
                <ListItem alignItems="flex-start" sx={{ mb:4, py:2 }} className="" backgroundColor="#FFF">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={image10} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="自我評分"
                    secondary={
                        <React.Fragment>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                setValue(newValue);
                                }}
                            />
                            <br/>
                            {"今天做的鹹派有點焦，塔皮需要再濕潤一點"}
                        </React.Fragment>
                    }
                    />
                </ListItem>

                <Typography sx={{ mb:2}} variant="h6">
                管理者回饋
                </Typography>

                <ListItem alignItems="flex-start" sx={{ mb:4, py:2 }} className="list">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={image10} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="館長"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
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
                </ListItem>

                <Typography sx={{ mb:2}} variant="h6">
                夥伴回饋
                </Typography>

                <ListItem alignItems="flex-start" sx={{ mb:2, py:2 }} className="list">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={image10} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="秀鳳"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
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
                </ListItem>
                <ListItem alignItems="flex-start" sx={{ mb:4, py:2 }} className="list">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={image10} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="惠玲"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
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
                </ListItem>

                <Typography sx={{ mb:2}} variant="h6" className="text-red">
                我想回饋
                </Typography>

                <ListItem alignItems="flex-start" sx={{ mb:2, py:2 }} className="list">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={image10} />
                    </ListItemAvatar>
                    <ListItemText backgroundColor="#FFF"
                    secondary={
                        <React.Fragment>
                        <TextField id="outlined-basic" label="｜請輸入文字......" variant="outlined" sx={{ pr:2 }} className="full-width"/>
                        </React.Fragment>
                    }
                    />
                </ListItem>

                <Box textAlign='right' sx={{ mb:4 }}>
                    <Button variant="contained" className="" style={{ backgroundColor: '#FF8527' }}>送出</Button>
                </Box><br/>
            </Box>
        </>

    );
}

export default TeamLRDirections