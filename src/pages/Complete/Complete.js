import React from "react"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './Complete.css'
import Appbar from "../../components/Appbar/Appbar/Appbar";
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import Button from '@mui/material/Button';

function Complete() {

    return (
        <>
            <Appbar />

            <Grid
                container
                justifyContent="center"
                alignItems="center"

                spacing={0}
                direction="column"
                style={{ minHeight: '100vh' }}
            >

                <Typography variant="h6" gutterBottom component="div" align="center" sx={{ fontWeight: 'bold', m: 1, p: 2 }}>
                    <TaskAltRoundedIcon fontSize="large" sx={{ mr:1 }}/>
                    已上傳完成
                </Typography>

                <Button variant="contained" className="bg-orange" href="/LearningRecord">點此查看已學習紀錄</Button>

            </Grid>

        </>

    );
}

export default Complete