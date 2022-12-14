import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
// import Menu from "@mui/material/Menu";

// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

import MicrowaveRoundedIcon from "@mui/icons-material/MicrowaveRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
// import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Button from "@mui/material/Button";

import "./Appbar.css";

// import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Appbar = () => {
    // const [setAnchorElUser] = React.useState(null);

    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    // const [UId, setUId] = useState("");
    const [username, setusername] = useState([]);
    const [userImg, setuserImg] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // setUId(window.localStorage.getItem("id"));
        setuserImg(window.localStorage.getItem("userImg"));
        // setuserImg("https://i.imgur.com/DjkdE7v.jpg");
        setusername(window.localStorage.getItem("username"));
    }, []);

    // console.log(UId);
    // console.log(username);
    // console.log(userImg);

    function logout() {
        localStorage.clear();
        navigate("/");
    }

    function handleBack() {
        navigate(-1);
      };

    return (
        <AppBar position="static" className="bg-orange" enableColorOnDark style={{ position: "fixed", zIndex: 1500 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <ArrowBackIosNewRoundedIcon onClick={handleBack}/>
                    <Button onClick={handleBack} className="ecook" sx={{ p: 0 }} >??????</Button>

                    {/* <Typography variant="h5" gutterBottom component="div" align="center" sx={{ fontWeight: 'bold', m: 1 }} href="/link">
                eCook
            </Typography> */}

                    <Button className="ecook" sx={{ mx: 2 }} href="/link">
                        eCook
                    </Button>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                </IconButton>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
                </IconButton> */}

                        <BottomNavigation showLabels className="bg-none">
                            <BottomNavigationAction
                                className="white"
                                label="????????????"
                                icon={<MicrowaveRoundedIcon />}
                                href="/cookbook"
                            />
                            <BottomNavigationAction
                                className="white"
                                label="????????????"
                                icon={<ReceiptLongRoundedIcon />}
                                href="/LearningRecord"
                            />
                            <BottomNavigationAction
                                className="white"
                                label="????????????"
                                icon={<BookmarksRoundedIcon />}
                                href="/Bookmark"
                            />
                            {/* <BottomNavigationAction
                                className="white"
                                label="??????"
                                icon={<EmailRoundedIcon />}
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                            /> */}
                            {/* <BottomNavigationAction className='white' label="??????" icon={<LocationOnIcon />} /> */}
                        </BottomNavigation>
                    </Box>

                    {/* <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                        zIndex="2000"
                    >
                        <MenuItem onClick={handleClose}>
                            <Grid container sx={{ mb: 2 }} className="bg-w">
                                <Grid item xs={2} sx={{ p: 0 }}>
                                    <Avatar sx={{ my: 2 }}>H</Avatar>
                                </Grid>
                                <Grid item xs={10} sx={{ px: 1 }}>
                                    <Typography
                                        variant="body2"
                                        sx={{ maxWidth: 200 }}
                                        noWrap
                                        style={{ display: "inline-block", whiteSpace: "pre-line" }}
                                    >
                                        ????????????????????????3????????????????????????????????????????????????
                                    </Typography>
                                    <Typography variant="caption" display="block" className="orange">
                                        1??????
                                    </Typography>
                                </Grid>
                            </Grid>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Grid container sx={{ mb: 2 }} className="bg-w">
                                <Grid item xs={2} sx={{ p: 0 }}>
                                    <Avatar sx={{ my: 2 }}>H</Avatar>
                                </Grid>
                                <Grid item xs={10} sx={{ px: 1 }}>
                                    <Typography
                                        variant="body2"
                                        sx={{ maxWidth: 200 }}
                                        noWrap
                                        style={{ display: "inline-block", whiteSpace: "pre-line" }}
                                    >
                                        ????????????????????????3????????????????????????????????????????????????
                                    </Typography>
                                    <Typography variant="caption" display="block" className="orange">
                                        1??????
                                    </Typography>
                                </Grid>
                            </Grid>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Grid container sx={{ mb: 0 }} className="bg-w">
                                <Grid item xs={2} sx={{ p: 0 }}>
                                    <Avatar sx={{ my: 2 }}>H</Avatar>
                                </Grid>
                                <Grid item xs={10} sx={{ px: 1 }}>
                                    <Typography
                                        variant="body2"
                                        sx={{ maxWidth: 200 }}
                                        noWrap
                                        style={{ display: "inline-block", whiteSpace: "pre-line" }}
                                    >
                                        ????????????????????????3????????????????????????????????????????????????
                                    </Typography>
                                    <Typography variant="caption" display="block" className="orange">
                                        1??????
                                    </Typography>
                                </Grid>
                            </Grid>
                        </MenuItem>
                    </Menu> */}

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0, pl: 1 }}>
                                <Avatar alt={username} src={userImg} />
                            </IconButton>
                        </Tooltip>
                        {/* <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
                    </Box>

                    <Typography sx={{ ml: 1 }}>{username}?????????</Typography>

                    <BottomNavigation showLabels className="bg-none">
                        {/* <BottomNavigationAction
                            className="white"
                            label={username}
                            icon={userImg}
                        /> */}
                        <BottomNavigationAction
                            className="white"
                            label="??????"
                            icon={<ExitToAppRoundedIcon />}
                            onClick={logout}
                        />
                    </BottomNavigation>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Appbar;
