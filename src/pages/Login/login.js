import React from "react"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


function Login() {

    return (
        <>

            <Grid
                container
                justifyContent="center"
                alignItems="center"

                spacing={0}
                direction="column"
                style={{ minHeight: '100vh' }}
            >
                <Typography variant="h4" gutterBottom component="div" align="center" sx={{ fontWeight: 'bold', m: 1 }}>
                    <span className="orange">eCook</span><br/>
                    高齡餐廚巧幫手
                </Typography>

                <Typography variant="subtitle1" gutterBottom component="div">
                    輔助中高齡者餐飲服務的數位學習系統
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' ,p: 1}}>
                    <PersonRoundedIcon sx={{ mr: 1, my: 0.5 }} className="orange" />
                    <TextField id="input-with-sx" label="帳號" variant="standard" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' ,p: 1}}>
                    <LockRoundedIcon sx={{ mr: 1, my: 0.5 }} className="orange" />
                    <TextField id="input-with-sx" label="密碼" variant="standard" />
                </Box>

                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="保持登入" />
                </FormGroup>

                <Button variant="contained" sx={{ m: 3 }} color="warning" href="/link">登入</Button>

                <Typography variant="caption" display="block" gutterBottom align="center">
                    By continuing, you agree to our<br/>
                    Terms of Service · Privacy Policy · Content Policy
                </Typography>
            </Grid>

        </>

    );
}

export default Login