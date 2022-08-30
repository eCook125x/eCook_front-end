import React from "react";
import "./MealRecipes.css";
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import image14 from "../../images/MealRecipes/14.png";

// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// import { orange } from "@mui/material/colors";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { useState, useEffect } from "react";
import api from "../../axios/api";
import { useNavigate } from "react-router-dom";

import Chip from "@mui/material/Chip";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
// import { useChecklist } from "react-checklist";
// import Checkbox from "@mui/material/Checkbox";

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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => {
        setOpen2(true);
    };
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
    // console.log(top100Films)

    const [sweetAndSavoryDataName, setsweetAndSavoryDataName] = useState([]);
    const [sweetAndSavoryDataImg, setsweetAndSavoryDataImg] = useState([]);
    const [cookbookName, setCookbookName] = useState([]);

    useEffect(() => {
        const sweetAndSavoryDataId = window.sessionStorage.getItem("sweetAndSavoryDataId");
        setsweetAndSavoryDataName(window.sessionStorage.getItem("sweetAndSavoryDataName"));
        setsweetAndSavoryDataImg(window.sessionStorage.getItem("sweetAndSavoryDataImg"));

        setUId(window.localStorage.getItem("id"));
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
    const [CuisineItem, setCuisineItem] = useState("");
    // const [Img, setImg] = useState("");
    const [UId, setUId] = useState("");
    const navigate = useNavigate();
    const moment = require("moment");
    const currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");

    async function handleApi() {
        console.log("協作者 : " + str);
        console.log("評分星星 : " + Star);
        console.log("學習紀錄文字 : " + Text);
        console.log("料理類別 : " + CuisineCategory);
        console.log("料理名稱 : " + cookbookName);
        console.log("料理品項 : " + CuisineItem);
        console.log("圖片 : " + image);
        console.log("上傳人員id : " + UId);
        console.log("上傳時間 : " + currentDateTime);

        await api
            .post("/api/studyRecord/add", {
                collaborator: str,
                star: Star,
                text: Text,
                cuisineCategory: CuisineCategory,
                cuisineName: cookbookName,
                cuisineItem: CuisineItem,
                img: image,
                u_id: UId,
                time: currentDateTime,
            })
            .then((res) => {
                navigate("/complete");
                console.log(res.data);
                // const SRData = res.data;
                // localStorage.setItem("collaborator", SRData.collaborator);
                // localStorage.setItem("star", SRData.star);
                // localStorage.setItem("text", SRData.text);
                // localStorage.setItem("cuisineCategory", SRData.cuisineCategory);
                // localStorage.setItem("cuisineName", SRData.cuisineName);
                // localStorage.setItem("cuisineItem", SRData.cuisineItem);
                // localStorage.setItem("img", SRData.img);
                // localStorage.setItem("u_id", SRData.u_id);
            });
    }

    // function handleClickRadio(index, value) {
    //     MRData[index].checked = !value;
    //     console.log(index+value)
    //     setMR([...MRData]);
    // }

    // const { handleCheck, isCheckedAll, checkedItems } = useChecklist(MRData, {
    //     key: "id",
    //     keyType: "string",
    // });
    // console.log(checkedItems);
    // console.log([...checkedItems]);

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 700, p: 5 }}>
                    <h3 id="parent-modal-title">上傳自我學習記錄</h3>
                    <h3 id="parent-modal-title" className="orange">
                        {sweetAndSavoryDataName}
                    </h3>

                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <h5 id="parent-modal-description" className="radio">
                                我今天完成什麼料理品項
                            </h5>
                            <FormControlLabel
                                value="餅乾底"
                                control={<Radio />}
                                label="餅乾底"
                                onChange={(e) => setCuisineItem(e.target.value)}
                            />
                            <FormControlLabel
                                value="炒料"
                                control={<Radio />}
                                label="炒料"
                                onChange={(e) => setCuisineItem(e.target.value)}
                            />
                        </RadioGroup>
                    </FormControl>

                    <h5 id="parent-modal-description" className="autocomplete">
                        協作者
                    </h5>

                    <Autocomplete
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
                            <TextField {...params} variant="filled" label="點選以編輯" placeholder="協作者" />
                        )}
                    />

                    <Rating
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
                        label="點一下輸入學習記錄"
                        variant="standard"
                        className="full-width"
                        onChange={(e) => setText(e.target.value)}
                    />

                    <Grid container spacing={3} sx={{ my: 1, mb: 4 }}>
                        {/* <Grid item xs={4}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={image11}
                                alt="定食套餐"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={image12}
                                alt="定食套餐"
                            />
                        </Grid> */}
                        <Grid item xs={4}>
                            {/* <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="raised-button-file">
                            <Button variant="raised" component="span">
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={image13}
                                    alt="定食套餐"
                                />
                            </Button>
                            </label>  */}
                            <input type="file" onChange={onImageChange} className="filetype" accept=".jepg,.png,.jpg" />
                            {/* <CardMedia
                                component="img"
                                height="auto"
                                image={Image}
                                alt=""
                            /> */}
                            {image !== null ? (
                                <img
                                    src={`data:image/png;base64,${image}`}
                                    alt="上傳圖片"
                                    width={200}
                                    height={150}
                                ></img>
                            ) : (
                                ""
                            )}
                        </Grid>
                    </Grid>
                    <h5>
                        <ErrorRoundedIcon className="orange" /> 需要拍攝照片才能上傳自我學習記錄哦！
                    </h5>

                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Box textAlign="left">
                                <Button variant="outlined" className="grey" onClick={handleClose}>
                                    取消
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <Box textAlign="right">
                                <Button
                                    variant="contained"
                                    className=""
                                    style={{ backgroundColor: "#FF8527" }}
                                    // href="/complete"
                                    type="submit"
                                    onClick={handleApi}
                                >
                                    確定
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
                    <h3 id="parent-modal-title">貯存位置搜尋</h3>

                    <CardMedia component="img" height="auto" image={image14} alt="貯存位置搜尋" sx={{ my: 3 }} />
                    <Box className="border-b" sx={{ my: 2 }}></Box>
                    <h3 className="text-grey">冰箱儲藏區</h3>
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
                        <Button variant="contained" className="full-width" style={{ backgroundColor: "#FF8527" }}>
                            食材備置
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" className="full-width" style={{ backgroundColor: "#FF8527" }}>
                            製作步驟
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        {/* <Button variant="outlined" className="full-width" disabled>
                            上傳自我學習記錄
                        </Button> */}
                        <Button
                            variant="contained"
                            className="full-width"
                            style={{ backgroundColor: "#FF8527" }}
                            onClick={handleOpen}
                        >
                            上傳自我學習記錄
                        </Button>
                    </Grid>
                </Grid>

                <Box>
                    <Grid container spacing={3} sx={{ my: 1, mb: 2, pl: 0 }}>
                        <Grid item xs={4}>
                            <Typography sx={{ mb: 0 }} variant="h6">
                                已全部取得
                            </Typography>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4} textAlign="right">
                            {/* <Checkbox
                                type="checkbox"
                                onChange={handleCheck}
                                checked={isCheckedAll}
                                sx={{
                                    color: orange[800],
                                    "&.Mui-checked": {
                                        color: orange[600],
                                    },
                                }}
                            /> */}
                        </Grid>
                    </Grid>

                    {/* <Typography sx={{ mb: 0 }} variant="h6">
                        餅乾底
                    </Typography> */}
                    {MRData.map((MRData, index) => (
                        <Grid container spacing={3} sx={{ my: 1, mb: 0, pl: 0 }} className="border-b" key={index}>
                            <Grid item xs={4}>
                                <Typography sx={{ mb: 2 }} variant="body1">
                                    {MRData.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ mb: 2 }} variant="body1">
                                    {MRData.unit}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} textAlign="right">
                                <SearchRoundedIcon onClick={handleOpen2} />
                                {/* <input
                                    type="checkbox"
                                    data-key={MRData.id}
                                    onChange={handleCheck}
                                    checked={checkedItems.has(MRData.id)}
                                    style={{margin:"15px", backgroundColor:"orange", fontSize:"30px"}}
                                /> */}
                            </Grid>
                        </Grid>
                    ))}

                    {/* <Typography sx={{ mb: 0 }} variant="h6">
                        藍莓果醬
                    </Typography>
                    <Grid container spacing={3} sx={{ my: 1, mb: 0, pl: 0 }} className="border-b">
                        <Grid item xs={4}>
                            <Typography sx={{ mb: 2 }} variant="body1">
                                藍莓
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ mb: 2 }} variant="body1">
                                240克
                            </Typography>
                        </Grid>
                        <Grid item xs={4} textAlign="right">
                            <SearchRoundedIcon />
                            <Radio
                                {...controlProps("e")}
                                sx={{
                                    color: orange[800],
                                    "&.Mui-checked": {
                                        color: orange[600],
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ my: 0, mb: 0, pl: 0 }} className="border-b">
                        <Grid item xs={4}>
                            <Typography sx={{ mb: 2 }} variant="body1">
                                細砂糖
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ mb: 2 }} variant="body1">
                                40克
                            </Typography>
                        </Grid>
                        <Grid item xs={4} textAlign="right">
                            <SearchRoundedIcon />
                            <Radio
                                {...controlProps("e")}
                                sx={{
                                    color: orange[800],
                                    "&.Mui-checked": {
                                        color: orange[600],
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ my: 0, mb: 4, pl: 0 }} className="border-b">
                        <Grid item xs={4}>
                            <Typography sx={{ mb: 2 }} variant="body1">
                                檸檬汁
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ mb: 2 }} variant="body1">
                                20克
                            </Typography>
                        </Grid>
                        <Grid item xs={4} textAlign="right">
                            <SearchRoundedIcon />
                            <Radio
                                {...controlProps("e")}
                                sx={{
                                    color: orange[800],
                                    "&.Mui-checked": {
                                        color: orange[600],
                                    },
                                }}
                            />
                        </Grid>
                    </Grid> */}
                </Box>

                <Box textAlign="center" sx={{ my: 4 }}>
                    <Button variant="contained" className="" style={{ backgroundColor: "#FF8527" }}>
                        按這裡進行下一步
                    </Button>
                </Box>

                <Typography sx={{ mb: 2 }} variant="h6">
                    觀賞完整步驟
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

                <Typography sx={{ my: 2 }} variant="h6">
                    步驟解說
                </Typography>

                {/* <Grid container spacing={3} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                        <CardMedia component="img" height="auto" image={image03} alt="步驟解說1" zoom="1" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py: 2 }}>
                            步驟 1
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py: 2 }}>
                            糖粉50克過篩加入拌勻，再加入瑪斯卡彭起司160克輕輕拌勻乳霜狀、再加入20c.c.檸檬汁。
                        </Typography>
                    </Grid>
                </Grid>

                <ListItem alignItems="flex-start" sx={{ mb: 4, py: 2 }} className="list">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={image10} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="小當家"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    奶油起司 400克隔水加熱攪拌均勻。
                                </Typography>
                                {"- 4天前"}
                            </React.Fragment>
                        }
                    />
                </ListItem> */}

                {StepData.map((StepData) => (
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        <Grid item xs={6}>
                            <CardMedia component="img" height="auto" image={StepData.img} alt={StepData.title} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className="step" variant="h6" sx={{ py: 2 }}>
                                {StepData.title}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom sx={{ py: 2 }}>
                                {StepData.text}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}

                {/* <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={6}>
                        <CardMedia component="img" height="auto" image={image05} alt="步驟解說3" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py: 2 }}>
                            步驟 3
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py: 2 }}>
                            先將南瓜切薄片平鋪在塔殼底部，儘量底蓋滿。（1模100克）
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={6}>
                        <CardMedia component="img" height="auto" image={image06} alt="步驟解說4" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py: 2 }}>
                            步驟 4
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py: 2 }}>
                            第一份先平分倒入蛋糕模內，成為第一層。抹平稍微敲出空氣，冰冷凍。
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={6}>
                        <CardMedia component="img" height="auto" image={image07} alt="步驟解說5" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py: 2 }}>
                            步驟 5
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py: 2 }}>
                            第二份加入優格60克
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={6}>
                        <CardMedia component="img" height="auto" image={image08} alt="步驟解說6" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py: 2 }}>
                            步驟 6
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py: 2 }}>
                            鮮奶油80克乾性打發，加入奶油起司內餡，用刮刀由下往上拌勻。
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={6}>
                        <CardMedia component="img" height="auto" image={image09} alt="步驟解說7" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py: 2 }}>
                            步驟 7
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py: 2 }}>
                            煮好的藍莓果醬再加入，一樣用刮刀由下往上拌勻。
                        </Typography>
                    </Grid>
                </Grid> */}

                <Box textAlign="center" sx={{ mb: 4 }}>
                    <Button
                        variant="contained"
                        className=""
                        style={{ backgroundColor: "#FF8527" }}
                        onClick={handleOpen}
                    >
                        上傳自我學習記錄
                    </Button>
                </Box>
                <br />
            </Box>
        </>
    );
}

// const top100Films = [
//     { title: "秀鳳", year: 1994 },
//     { title: "惠玲", year: 1972 },
//     { title: "小文", year: 1974 },
// ];

export default MealRecipes;
