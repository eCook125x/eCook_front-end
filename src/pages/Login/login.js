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

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Login() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

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
                    <PersonRoundedIcon sx={{ mr: 1, my: 0.5, mb:2 }} className="orange" />
                    <TextField id="input-with-sx" label="帳號" sx={{ width: '25ch' }}/>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' ,p: 1}}>
                    <LockRoundedIcon sx={{ ml: 1, my: 0.5, mb:3 }} className="orange" />
                    {/* <TextField id="input-with-sx" label="密碼" variant="standard" /> */}
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">密碼</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Box>
                
                <FormGroup>
                    <Grid container spacing={0}>
                        <Grid item sx={6} alignContent="left">
                            <FormControlLabel control={<Checkbox />} label="保持登入" />
                        </Grid>
                        <Grid item sx={6} alignContent="right">
                            <Button variant="text" className="orange" style={{ fontSize: '16px' }}>忘記密碼</Button>
                        </Grid>
                    </Grid>
                </FormGroup>

                <Button variant="contained" sx={{ m: 3 , width: '35ch'}} color="warning" href="/link" >登入</Button>

                <Typography variant="caption" display="block" gutterBottom align="center">
                    By continuing, you agree to our<br/>
                    Terms of Service · Privacy Policy · Content Policy
                </Typography>
            </Grid>

        </>

    );
}

export default Login