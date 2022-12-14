import React from "react";
import "./MealRecipes.css";
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import image14 from "../../images/MealRecipes/14.png";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { orange } from "@mui/material/colors";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { useState, useEffect } from "react";
import api from "../../axios/api";
import { useNavigate } from "react-router-dom";

import Chip from "@mui/material/Chip";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import { useChecklist } from "react-checklist";
import Checkbox from "@mui/material/Checkbox";

// import { Player } from "video-react";
import LoadingScreen from "react-loading-screen";

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

function MealRecipes() {
    const [loading,setLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [open2, setOpen2] = React.useState(false);
    // function handleOpen2() {
    //     // window.sessionStorage.setItem("MRDataImg", img);
    //     setOpen2(true);
    // }
    const handleClose2 = () => {
        setOpen2(false);
    };

    const [image, setImage] = React.useState(null);
    // console.log(image);

    const onImageChange = (e) => {
        console.log("file", e.target.files[0]);
        let file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsBinaryString(file);
        }
    };

    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        setImage(btoa(binaryString));
    };

    const [value, setValue] = React.useState(0);

    //api
    const [MRData, setMR] = useState([]);
    const [StepData, setStep] = useState([]);
    const [UserData, setUser] = useState([]);
    const [MealData, setMeal] = useState([]);
    const top100Films = UserData;
    console.log(StepData);

    const [sweetAndSavoryDataName, setsweetAndSavoryDataName] = useState([]);
    const [sweetAndSavoryDataImg, setsweetAndSavoryDataImg] = useState([]);
    const [cookbookName, setCookbookName] = useState([]);

    // const [MRDataImg, setMRDataImg] = useState([]);
    // const [userImg, setuserImg] = useState([]);

    useEffect(() => {
        const sweetAndSavoryDataId = window.sessionStorage.getItem("sweetAndSavoryDataId");
        setsweetAndSavoryDataName(window.sessionStorage.getItem("sweetAndSavoryDataName"));
        setsweetAndSavoryDataImg(window.sessionStorage.getItem("sweetAndSavoryDataImg"));
        // setMRDataImg(window.sessionStorage.getItem("MRDataImg"));

        setUId(window.localStorage.getItem("id"));
        // setuserImg(window.localStorage.getItem("userImg"));
        setCuisineCategory(window.sessionStorage.getItem("cookbookName"));
        setCookbookName(window.sessionStorage.getItem("sweetAndSavoryDataName"));

        api.get(`/api/cookbook/meal/ingredient/${sweetAndSavoryDataId}`, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            const newData = res.data.reduce((map, current) => {
                return [...map, { ...current, checkedId: "1" }];
            }, []);
            setMR(newData);
            // setMR(res.data);
            console.log(newData);
        });

        api.get(`/api/cookbook/meal/step/${sweetAndSavoryDataId}`, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            setStep(res.data);
            // console.log(res.data);
        });

        api.get(`/api/cookbook/meal/${sweetAndSavoryDataId}`, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            setMeal([res.data]);
            console.log(res.data);
        });

        api.get(`/api/user`, {
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            setUser(res.data);
            // console.log(res.data);
        });
    }, []);
    // console.log(MRData);

    const [inputValue, setInputValue] = React.useState([]);
    const str = inputValue.toString();
    // console.log(str);

    const [Star, setStar] = useState("");
    const [Text, setText] = useState("");
    const [CuisineCategory, setCuisineCategory] = useState("");
    // const [CuisineName, setCuisineName] = useState("");
    // const [CuisineItem, setCuisineItem] = useState("");
    // const [Img, setImg] = useState("");
    const [UId, setUId] = useState("");
    const navigate = useNavigate();
    const moment = require("moment");
    const currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");

    async function handleApi() {
        setLoading(true);
        console.log("????????? : " + str);
        console.log("???????????? : " + Star);
        console.log("?????????????????? : " + Text);
        console.log("???????????? : " + CuisineCategory);
        console.log("???????????? : " + cookbookName);
        // console.log("???????????? : " + CuisineItem);
        console.log("?????? : " + image);
        console.log("????????????id : " + UId);
        console.log("???????????? : " + currentDateTime);

        await api
            .post("/api/studyRecord/add", {
                collaborator: str,
                star: Star,
                text: Text,
                cuisineCategory: CuisineCategory,
                cuisineName: cookbookName,
                // cuisineItem: CuisineItem,
                img: image,
                u_id: UId,
                time: currentDateTime,
            })
            .then((res) => {
                setLoading(false);
                navigate("/complete");
                console.log(res.data);
            });
    }

    const { handleCheck, isCheckedAll, checkedItems } = useChecklist(MRData, {
        key: "id",
        keyType: "string",
    });
    console.log(checkedItems);
    console.log([...checkedItems]);

    function scrollToAnchor(anchorName) {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView();
            }
        }
    }

    // console.log(MRDataImg)

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 700, p: 5 }}>
                    <h3 id="parent-modal-title">????????????????????????</h3>
                    <h3 id="parent-modal-title" className="orange">
                        {sweetAndSavoryDataName}
                    </h3>

                    {/* <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <h5 id="parent-modal-description" className="radio">
                                ?????????????????????????????????
                            </h5>
                            <FormControlLabel
                                className="font-normal"
                                value="?????????"
                                control={<Radio />}
                                label="?????????"
                                onChange={(e) => setCuisineItem(e.target.value)}
                            />
                            <FormControlLabel
                                className="font-normal"
                                value="??????"
                                control={<Radio />}
                                label="??????"
                                onChange={(e) => setCuisineItem(e.target.value)}
                            />
                        </RadioGroup>
                    </FormControl> */}

                    <h5 id="parent-modal-description" className="autocomplete">
                        ?????????
                    </h5>

                    <Autocomplete
                        className="font-normal"
                        multiple
                        value={inputValue}
                        onChange={(e, value) => {
                            setInputValue(value);
                        }}
                        id="tags-filled"
                        // options={top100Films.map((option) => option.username)}
                        options={top100Films.map((option) => (option.id.toString() !== UId ? option.username : ""))}
                        // defaultValue={[top100Films[0].title]}
                        freeSolo
                        renderTags={(inputValue, getTagProps) =>
                            inputValue.map((option, index) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField {...params} variant="filled" label="???????????????" placeholder="?????????" />
                        )}
                    />

                    <Rating
                        sx={{ mt: 2 }}
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            setStar(event.target.value);
                        }}
                    />
                    <br />
                    <TextField
                        id="standard-basic"
                        label="???????????????????????????"
                        variant="standard"
                        className="full-width"
                        onChange={(e) => setText(e.target.value)}
                    />

                    <Grid container spacing={3} sx={{ my: 1, mb: 4 }}>
                        <Grid item xs={4}>
                            <input type="file" onChange={onImageChange} className="filetype" accept=".jepg,.png,.jpg" />
                            {image !== null ? (
                                <img
                                    src={`data:image/png;base64,${image}`}
                                    alt="????????????"
                                    width={200}
                                    height={150}
                                ></img>
                            ) : (
                                ""
                            )}
                        </Grid>
                    </Grid>
                    <h5>
                        <ErrorRoundedIcon className="orange" /> ??????????????????????????????????????????????????????
                    </h5>

                    <Grid container spacing={3} sx={{ mt: 1 }}>
                        <Grid item xs={4}>
                            <Box textAlign="left">
                                <Button variant="outlined" className="grey" onClick={handleClose}>
                                    ??????
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <Box textAlign="right">
                                { loading === true ? (
                                    <LoadingScreen
                                    loading={true}
                                    bgColor="#f1f1f1"
                                    spinnerColor="#9ee5f8"
                                    textColor="#676767"
                                    logoSrc=""
                                    text="???????????????????????????"
                                >
                                    <div>Loadable content</div>
                                </LoadingScreen>
                                ):('') }
                                
                                <Button
                                    variant="contained"
                                    className="font-normal"
                                    style={{ backgroundColor: "#FF8527" }}
                                    // href="/complete"
                                    type="submit"
                                    onClick={handleApi}
                                >
                                    ??????
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>

            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 700, p: 5 }}>
                    <h3 id="parent-modal-title">??????????????????</h3>

                    <CardMedia component="img" height="auto" image={image14} alt="??????????????????" sx={{ my: 3 }} />
                    <Box className="border-b" sx={{ my: 2 }}></Box>
                    <h3 className="text-grey">???????????????</h3>
                    <br />
                </Box>
            </Modal>

            <Appbar />

            <Box container sx={{ px: 5 }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    component="div"
                    align="center"
                    sx={{ fontWeight: "normal", m: 0, p: 3, pt: 12 }}
                >
                    {sweetAndSavoryDataName}
                </Typography>
                <CardMedia component="img" height="auto" image={sweetAndSavoryDataImg} alt={sweetAndSavoryDataName} />
                <Grid container spacing={3} sx={{ my: 1, mb: 4 }}>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            className="full-width"
                            style={{ backgroundColor: "#FF8527" }}
                            onClick={() => scrollToAnchor("food")}
                        >
                            ????????????
                        </Button>
                    </Grid>
                    <Grid item xs={4} id="food">
                        <Button
                            variant="contained"
                            className="full-width"
                            style={{ backgroundColor: "#FF8527" }}
                            onClick={() => scrollToAnchor("screens")}
                        >
                            ????????????
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        {/* <Button variant="outlined" className="full-width" disabled>
                            ????????????????????????
                        </Button> */}
                        <Button
                            variant="contained"
                            className="full-width"
                            style={{ backgroundColor: "#FF8527" }}
                            onClick={handleOpen}
                        >
                            ????????????????????????
                        </Button>
                    </Grid>
                </Grid>
                <Box>
                    <Grid container spacing={3} sx={{ my: 1, mb: 2, pl: 0 }}>
                        <Grid item xs={4}>
                            <Typography sx={{ mb: 0 }} className="font-large">
                                ???????????????
                            </Typography>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4} textAlign="right">
                            <Checkbox
                                type="checkbox"
                                onChange={handleCheck}
                                checked={isCheckedAll}
                                sx={{
                                    color: orange[800],
                                    "&.Mui-checked": {
                                        color: orange[600],
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    {/* <Typography sx={{ mb: 0 }} variant="h6">
                        ?????????
                    </Typography> */}
                    {MRData.map((MRData, index) => (
                        <Grid container spacing={3} sx={{ my: 1, mb: 0, pl: 0 }} className="border-b" key={index}>
                            <Grid item xs={4}>
                                <Typography sx={{ mb: 2 }} className="font-normal">
                                    {MRData.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ mb: 2 }} className="font-normal">
                                    {MRData.unit}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                {/* <SearchRoundedIcon onClick={handleOpen2} /> */}
                                {/* <label class="input"> */}
                                <input
                                    type="checkbox"
                                    data-key={MRData.id}
                                    onChange={handleCheck}
                                    checked={checkedItems.has(MRData.id)}
                                    style={{ margin: "15px", backgroundColor: "orange", fontSize: "30px" }}
                                    // class="input"
                                />
                                {/* </label> */}
                            </Grid>
                        </Grid>
                    ))}
                </Box>
                {/* <Box textAlign="center" sx={{ my: 4 }}>
                    <Button variant="contained" className="font-normal" style={{ backgroundColor: "#FF8527" }}>
                        ????????????????????????
                    </Button>
                </Box> */}
                <Typography sx={{ mb: 2, mt: 5, pt: 2 }} className="font-large">
                    ??????????????????
                </Typography>
                {MealData.map((MealData) => (
                    <iframe
                        width="1038"
                        height="584"
                        src={MealData.video}
                        title={MealData.name}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                ))}
                <Typography sx={{ mb: 2, mt: 5, pt: 2 }} className="font-large" id="screens">
                    ????????????
                </Typography>
                {/* <Grid container spacing={3} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                        <CardMedia component="img" height="auto" image={image03} alt="????????????1" zoom="1" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py: 2 }}>
                            ?????? 1
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py: 2 }}>
                            ??????50???????????????????????????????????????????????????160????????????????????????????????????20c.c.????????????
                        </Typography>
                    </Grid>
                </Grid>

                <ListItem alignItems="flex-start" sx={{ mb: 4, py: 2 }} className="list">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={image10} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="?????????"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    ???????????? 400??????????????????????????????
                                </Typography>
                                {"- 4??????"}
                            </React.Fragment>
                        }
                    />
                </ListItem> */}
                {StepData.map((StepData, index) => (
                    <div>
                        <Grid container spacing={3} sx={{ mb: 5 }}>
                            <Grid item xs={6}>
                                {StepData.video === "" ? (
                                    <CardMedia component="img" height="auto" image={StepData.img} alt={index} />
                                ) : (
                                    // <Player
                                    //     playsInline
                                    //     poster={StepData.img}
                                    //     src={StepData.video}
                                    // />
                                    <iframe
                                        width="450"
                                        height="500"
                                        src={StepData.video}
                                        title={index + 1}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className="step" variant="h6" sx={{ py: 2 }}>
                                    ?????? {index + 1}
                                </Typography>
                                <Typography className="font-large" gutterBottom sx={{ py: 2 }}>
                                    {StepData.text}
                                </Typography>
                            </Grid>
                        </Grid>

                        {StepData.adminText === "" ? (
                            ""
                        ) : (
                            <ListItem alignItems="flex-start" sx={{ mb: 5, py: 2 }} className="list">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={StepData.adminImg} />
                                </ListItemAvatar>
                                <ListItemText
                                    className="font-normal"
                                    primary="?????????"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: "inline" }}
                                                component="span"
                                                className="font-normal"
                                                color="text.primary"
                                            >
                                                {StepData.adminText}
                                            </Typography>
                                            {/* {"  - " + StepData.adminTime} */}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        )}
                    </div>
                ))}

                <Box textAlign="center" sx={{ mb: 4 }}>
                    <Button
                        variant="contained"
                        className="font-normal"
                        style={{ backgroundColor: "#FF8527" }}
                        onClick={handleOpen}
                    >
                        ????????????????????????
                    </Button>
                </Box>
                <br />
            </Box>
        </>
    );
}

// const top100Films = [
//     { title: "??????", year: 1994 },
//     { title: "??????", year: 1972 },
//     { title: "??????", year: 1974 },
// ];

export default MealRecipes;
