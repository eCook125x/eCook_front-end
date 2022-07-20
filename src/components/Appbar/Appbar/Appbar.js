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

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Appbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
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
                    <BottomNavigationAction className='white' label="學習書籤" icon={<BookmarksRoundedIcon />} />
                    <BottomNavigationAction className='white' label="通知" icon={<EmailRoundedIcon />} />
                    {/* <BottomNavigationAction className='white' label="館長" icon={<LocationOnIcon />} /> */}
                </BottomNavigation>
            </Box>

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