import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./../../App.css";

import TextField from "@mui/material/TextField";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axios/api";
import Modal from "@mui/material/Modal";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

function Login() {
    const [UserId, setUserId] = useState("");
    const [Password, setPassword] = useState("");
    const [Message, setMessage] = useState("");
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    async function handleApi() {
        await api
            .post("/api/user/userLogin", {
                user_id: UserId,
                password: Password,
            })
            .then((res) => {
                console.log(res.data);
                const data = res.data;
                if (data.message === "登錄成功") {
                    navigate("/link");
                    localStorage.setItem("username", data.username);
                    localStorage.setItem("id", data.id);
                    localStorage.setItem("userImg", data.img);
                } else if (data.message === "帳號或密碼錯誤") {
                    setMessage("帳號或密碼錯誤");
                    setOpen(true);
                } else {
                    setMessage("密碼錯誤");
                    setOpen(true);
                    console.log(data);
                }
            })
            .catch((error) => {
                setMessage("伺服器出錯 工程師正在修復中");
                setOpen(true);
            });
    }
    // useEffect(()=>{
    //     if(localStorage.getItem('id')){
    //         navigate('/')
    //     }
    // })

    // const handleOpen = () => {
    //     setOpen(true);
    // };
    const handleClose = () => {
        setOpen(false);
    };
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "#FFF",
        border: "none",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        pt: 2,
        px: 4,
        pb: 3,

        borderRadius: 10,
        mt: 4,
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        警告訊息
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <ErrorRoundedIcon className="orange" /> {Message}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                            <Button onClick={handleClose} variant="contained" className="bg-orange">
                                確認
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>

            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={0}
                direction="column"
                style={{ minHeight: "100vh" }}
            >
                <Typography variant="h4" gutterBottom component="div" align="center" sx={{ fontWeight: "bold", m: 1 }}>
                    <span className="orange">eCook</span>
                    <br />
                    高齡餐廚巧幫手
                </Typography>

                <Typography variant="subtitle1" gutterBottom component="div" className="font-normal">
                    輔助中高齡者餐飲服務的數位學習系統
                </Typography>

                <Box sx={{ display: "flex", alignItems: "flex-end", p: 1 }}>
                    <PersonRoundedIcon sx={{ mr: 1, my: 0.5, mb: 2 }} className="orange" />
                    <TextField
                        className="font-small"
                        id="input-with-sx"
                        label="帳號"
                        sx={{ width: "25ch" }}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end", p: 1 }}>
                    <LockRoundedIcon sx={{ ml: 1, my: 0.5, mb: 3 }} className="orange" />
                    <TextField
                        className="font-small"
                        sx={{ mx: 1, width: "25ch" }}
                        id="outlined-password-input"
                        label="密碼"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>

                <Button variant="contained" sx={{ m: 3, width: "25ch" }} color="warning" onClick={handleApi} style={{ fontSize: '20px' }}>
                    登入
                </Button>
            </Grid>
        </>
    );
}

export default Login;
