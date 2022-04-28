import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Appbar() {

    return (
        <>

            <AppBar position="static" color="warning">
                <Toolbar>




                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        eCook
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

        </>

    );
}

export default Appbar