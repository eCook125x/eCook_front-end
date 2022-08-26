import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';

// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import MicrowaveRoundedIcon from '@mui/icons-material/MicrowaveRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Button from '@mui/material/Button';

import './Appbar.css'

import Grid from '@mui/material/Grid';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Appbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <AppBar position="static" className='bg-orange' enableColorOnDark style={{position: 'fixed', zIndex: 1500}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <ArrowBackIosNewRoundedIcon/>
            <Typography>
                返回
            </Typography>

            {/* <Typography variant="h5" gutterBottom component="div" align="center" sx={{ fontWeight: 'bold', m: 1 }} href="/link">
                eCook
            </Typography> */}

            <Button className='ecook' sx={{ mx:2 }} href="/link">eCook</Button>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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

                <BottomNavigation showLabels className='bg-none'>
                    <BottomNavigationAction className='white' label="料理食譜" icon={<MicrowaveRoundedIcon />} href="/cookbook"/>
                    <BottomNavigationAction className='white' label="學習記錄" icon={<ReceiptLongRoundedIcon />} href="/LearningRecord"/>
                    <BottomNavigationAction className='white' label="學習書籤" icon={<BookmarksRoundedIcon />} href="/Bookmark"/>
                    <BottomNavigationAction className='white' label="通知" icon={<EmailRoundedIcon />} 
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    />
                    {/* <BottomNavigationAction className='white' label="館長" icon={<LocationOnIcon />} /> */}
                </BottomNavigation>
            </Box>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                zIndex="2000"
            >
                <MenuItem onClick={handleClose}>
                    <Grid container sx={{ mb:2 }} className="bg-w">
                            <Grid item xs={2} sx={{ p:0 }}>
                            <Avatar sx={{ my:2 }}>H</Avatar>
                            </Grid>
                            <Grid item xs={10} sx={{ px:1 }}>
                                <Typography variant="body2" sx={{ maxWidth: 200 }} noWrap style={{ display: "inline-block", whiteSpace: "pre-line" }}>
                                館長回覆了您的第3次試做「味噌蔬食鹹派」學習紀錄。
                                </Typography>
                                <Typography variant="caption" display="block" className='orange'>
                                1天前
                                </Typography>
                            </Grid>
                    </Grid>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Grid container sx={{ mb:2 }} className="bg-w">
                            <Grid item xs={2} sx={{ p:0 }}>
                            <Avatar sx={{ my:2 }}>H</Avatar>
                            </Grid>
                            <Grid item xs={10} sx={{ px:1 }}>
                                <Typography variant="body2" sx={{ maxWidth: 200 }} noWrap style={{ display: "inline-block", whiteSpace: "pre-line" }}>
                                館長回覆了您的第3次試做「味噌蔬食鹹派」學習紀錄。
                                </Typography>
                                <Typography variant="caption" display="block" className='orange'>
                                1天前
                                </Typography>
                            </Grid>
                    </Grid>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Grid container sx={{ mb:0 }} className="bg-w">
                            <Grid item xs={2} sx={{ p:0 }}>
                            <Avatar sx={{ my:2 }}>H</Avatar>
                            </Grid>
                            <Grid item xs={10} sx={{ px:1 }}>
                                <Typography variant="body2" sx={{ maxWidth: 200 }} noWrap style={{ display: "inline-block", whiteSpace: "pre-line" }}>
                                館長回覆了您的第3次試做「味噌蔬食鹹派」學習紀錄。
                                </Typography>
                                <Typography variant="caption" display="block" className='orange'>
                                1天前
                                </Typography>
                            </Grid>
                    </Grid>
                </MenuItem>
            </Menu>

            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, pl:1 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Appbar;