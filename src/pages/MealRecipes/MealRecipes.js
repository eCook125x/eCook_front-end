import React from "react"
import './MealRecipes.css'
import Appbar from "../../components/Appbar/Appbar/Appbar";

import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import image01 from '../../images/MealRecipes/01.png';
import image02 from '../../images/MealRecipes/02.png';
import image03 from '../../images/MealRecipes/03.png';
import image04 from '../../images/MealRecipes/04.png';
import image05 from '../../images/MealRecipes/05.png';
import image06 from '../../images/MealRecipes/06.png';
import image07 from '../../images/MealRecipes/07.png';
import image08 from '../../images/MealRecipes/08.png';
import image09 from '../../images/MealRecipes/09.png';
import image10 from '../../images/MealRecipes/10.png';
import image11 from '../../images/MealRecipes/11.png';
import image12 from '../../images/MealRecipes/12.png';
// import image13 from '../../images/MealRecipes/13.png';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('餅乾底', '', ''),
  createData('已烤好的塔殼', '4個', 'O'),
  createData('杏鮑菇', '400克', 'O'),
  createData('白味噌', '75克', 'O'),
  createData('奶蛋液', '', ''),
  createData('蛋', '4顆', 'O'),
  createData('鮮奶油', '100毫升', 'O'),
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFF',
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    pt: 2,
    px: 4,
    pb: 3,

    borderRadius: 10,
    mt:4,
  };

function MealRecipes(props) {

    const { onSelectAllClick, numSelected, rowCount } =
    props;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const [setImage] = React.useState(null);

    const onImageChange = (e) => {
        console.log("file", e.target.files[0]);
        let file = e.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = _handleReaderLoaded
        reader.readAsBinaryString(file)
        }
    };

    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        setImage(btoa(binaryString))
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 700, p:5 }}>
                    <h3 id="parent-modal-title">上傳自我學習記錄</h3>
                    <h3 id="parent-modal-title" className="orange">味噌蔬食鹹派</h3> 
                    
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <h5 id="parent-modal-description" className="radio">
                            我今天完成什麼料理品項
                            </h5>
                            <FormControlLabel value="餅乾底" control={<Radio />} label="餅乾底" />
                            <FormControlLabel value="炒料" control={<Radio />} label="炒料" />
                        </RadioGroup>
                    </FormControl>

                    <h5 id="parent-modal-description" className="autocomplete">
                    協作者
                    </h5>
                    <Autocomplete
                        multiple
                        sx={{ mb:2 }}
                        id="tags-outlined"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[top100Films[2]]}
                        filterSelectedOptions
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            label="點選以編輯"
                            placeholder="協作者"
                        />
                        )}
                    />

                    <Rating name="no-value" value={null} size="large"/><br/>
                    <TextField id="standard-basic" label="點一下輸入學習記錄" variant="standard" className="full-width"/>

                    <Grid container spacing={3} sx={{ my:1, mb:4 }}>
                        <Grid item xs={4}>
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
                        </Grid>
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
                            <input type="file" onChange={onImageChange} className="filetype"  accept=".jepg,.png,.jpg"/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Box textAlign='left'>
                                <Button variant="outlined" className="grey">取消</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={4}>
                            <Box textAlign='right'>
                                <Button variant="contained" className="" style={{ backgroundColor: '#FF8527' }}>確定</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>

            <Appbar />
          
            <Box container sx={{ px:5 }}>
                <Typography variant="h5" gutterBottom component="div" align="center" sx={{ fontWeight: 'normal', m: 0, p: 3, pt:12 }}>
                    手作甜鹹點
                </Typography>

                <CardMedia
                    component="img"
                    height="auto"
                    image={image01}
                    alt="定食套餐"
                />

                <Grid container spacing={3} sx={{ my:1, mb:4 }}>
                    <Grid item xs={4}>
                        <Button variant="contained" className="full-width" style={{ backgroundColor: '#FF8527' }}>食材備置</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" className="full-width" disabled>製作步驟</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" className="full-width" disabled>上傳自我學習記錄</Button>
                    </Grid>
                </Grid>

                <TableContainer component={Paper} sx={{ mb:4 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                indeterminate={numSelected > 0 && numSelected < rowCount}
                                checked={rowCount > 0 && numSelected === rowCount}
                                onChange={onSelectAllClick}
                                inputProps={{
                                'aria-label': 'select all desserts',
                                }}
                            />
                            </TableCell>
                            <TableCell>已全部取得</TableCell>
                            <TableCell align="right">&nbsp;</TableCell>
                            <TableCell align="right">&nbsp;</TableCell>
                        </TableRow>
                        </TableHead>

                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                indeterminate={numSelected > 0 && numSelected < rowCount}
                                checked={rowCount > 0 && numSelected === rowCount}
                                onChange={onSelectAllClick}
                                inputProps={{
                                'aria-label': 'select all desserts',
                                }}
                            />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box textAlign='center' sx={{ mb:4 }}>
                    <Button variant="contained" className="" style={{ backgroundColor: '#FF8527' }}>按這裡進行下一步</Button>
                </Box>

                <Typography sx={{ mb:2 }} variant="h6">
                觀賞完整步驟
                </Typography>

                <CardMedia
                    component="img"
                    height="auto"
                    image={image02}
                    alt="觀賞完整步驟"
                    sx={{ mb:4 }}
                />

                <Typography sx={{ mb:2 }} variant="h6">
                步驟解說
                </Typography>

                <Grid container spacing={3} sx={{ mb:2 }}>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image03}
                            alt="步驟解說1"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py:2 }}>步驟 1</Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py:2 }}>南瓜切薄片與菠菜燙熟，蔬菜水擠乾、南瓜放涼。</Typography>
                    </Grid>
                </Grid>

                <ListItem alignItems="flex-start" sx={{ mb:4, py:2 }} className="list">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={image10} />
                    </ListItemAvatar>
                    <ListItemText
                    primary="小當家"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            蔬菜水切記擠乾，內餡烘烤時才不會過濕喔！
                        </Typography>
                        {"- 4天前"}
                        </React.Fragment>
                    }
                    />
                </ListItem>

                <Grid container spacing={3} sx={{ mb:4 }}>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image04}
                            alt="步驟解說2"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py:2 }}>步驟 2</Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py:2 }}>綜合菇剝開、杏鮑菇切小丁，熱鍋下奶油把菇類炒香，加白味噌75克炒開。</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb:4 }}>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image05}
                            alt="步驟解說3"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py:2 }}>步驟 3</Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py:2 }}>先將南瓜切薄片平鋪在塔殼底部，儘量底蓋滿。（1模100克）</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb:4 }}>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image06}
                            alt="步驟解說4"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py:2 }}>步驟 4</Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py:2 }}>再平均鋪上炒好的碎菇。（1模大約90-100克）</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb:4 }}>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image07}
                            alt="步驟解說5"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py:2 }}>步驟 5</Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py:2 }}>慢慢倒入調好的奶蛋液，可分次慢慢加，加至與塔殼高度一致。</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb:4 }}>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image08}
                            alt="步驟解說6"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py:2 }}>步驟 6</Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py:2 }}>再平均蓋上乳酪絲，盡量看不見料融化後才會平均。</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mb:4 }}>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image09}
                            alt="步驟解說7"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="step" variant="h6" sx={{ py:2 }}>步驟 7</Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ py:2 }}>烤箱預熱，上下火170度25分。進烤箱後，倒數10分鐘前後左右調盤，視上色狀況悶5分鐘。</Typography>
                    </Grid>
                </Grid>

                <Box textAlign='center' sx={{ mb:4 }}>
                    <Button variant="contained" className="" style={{ backgroundColor: '#FF8527' }} onClick={handleOpen}>上傳自我學習記錄</Button>
                </Box><br/>
            </Box>
       
        </>

    );
}

const top100Films = [
    { title: '秀鳳', year: 1994 },
    { title: '惠玲', year: 1972 },
    { title: '小文', year: 1974 },
];

export default MealRecipes