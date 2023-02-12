import Button from '@mui/material/Button';
import { AccountCircle, Error, Home, Person, ShoppingCart } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import { login } from '../redux/apiCalls.js';
import './login.css';

const LoginDialog = () => {
    const [open, setOpen] = useState(false);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error, currentUser } = useSelector((state) => state.user);


    const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const backgroundColor =
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[800];
        return {
            backgroundColor,
            height: theme.spacing(4),
            width: theme.spacing(15),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active': {
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.12),
            },
        };
    });

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }


    const userSubmit = (e) => {
        e.preventDefault()
        login(dispatch, { email, password })
    };

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <div>
            <Link className='link' onClick={openDialog}>
                {currentUser
                    // ? <Link to='/account' className='username-link'>{currentUser.username}</Link>
                    ? `${currentUser.username}`
                    : 'Login'} </Link>
            <Dialog open={open} onClose={closeDialog} >
                <div className='dialog-wrapper'>
                    <DialogTitle>{currentUser
                        ? <div className='hello-user'>Hello {currentUser.username}!</div>
                        : 'LOGIN'}</DialogTitle>
                    <DialogContent>
                        {currentUser
                            ?
                            <div>
                                <DialogContentText>
                                    Welcome to our website. If you want to make a purchase, please go to our products section where you will find the newest arrivals.
                                </DialogContentText>
                                {/* <div className='login-success-msg'> */}
                                <div>
                                    {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ m: 1, position: 'relative' }}>
                                            <Fab aria-label="save" color="secondary">
            
                                                <Person />
                                            </Fab>
                                        </Box>
                                        <Box sx={{ m: 1, position: 'relative' }}>
                                            <Button variant="contained" color="secondary">
                                                <Link to='/account' className='link'>TO ACCOUNT</Link>
                                            </Button>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ m: 1, position: 'relative' }}>
                                            <Fab aria-label="save" color="primary">
                                 
                                                <ShoppingCart/>
                                            </Fab>
                                        </Box>
                                        <Box sx={{ m: 1, position: 'relative' }}>
                                            <Button variant="contained" color="primary">
                                                <Link to='/cart' className='link'>TO CART</Link>
                                            </Button>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ m: 1, position: 'relative' }}>
                                            <Fab aria-label="save" color="warning">
                                  
                                                <Home />
                                            </Fab>
                                        </Box>
                                        <Box sx={{ m: 1, position: 'relative' }}>
                                            <Button variant="contained" color="warning">
                                                <Link to='/' className='link'>TO HOME PAGE</Link>
                                            </Button>
                                        </Box>
                                    </Box> */}


                                    <div role="presentation" onClick={handleClick} className='presentation'>
                                        <Breadcrumbs aria-label="breadcrumb">
                                            <StyledBreadcrumb
                                            className='breadcrumb'
                                                component="a"
                                                href="#"
                                                label="Account"
                                                icon={<Person fontSize="medium" />}
                                            />
                                            <StyledBreadcrumb
                                            className='breadcrumb'
                                                component="a"
                                                href="#"
                                                label="Cart"
                                                icon={<ShoppingCart fontSize="small" />}
                                            />
                                            <StyledBreadcrumb
                                            className='breadcrumb'
                                                component="a"
                                                href="#"
                                                label="To Home"
                                                icon={<HomeIcon fontSize="small" />}
                                            />

                                        </Breadcrumbs>
                                    </div>

                                </div>

                                {/* <DialogActions>
                                    <div className='dialog-actions'>
                                        <Button><Link to='/' className='link'>TO HOME</Link></Button>
                                        <Button><Link to='/cart' className='link'>CART</Link></Button>
                                        <Button><Link to='/allproducts' className='link'>CASSETTES</Link></Button>
                                    </div>
                                </DialogActions> */}
                            </div>
                            :
                            <div>
                                <DialogContentText>
                                    To login to this website, please enter your email and password here. We will continue to send updates of our products.
                                </DialogContentText>
                                <TextField
                                    placeholder='email'
                                    onChange={(e) => setEmail(e.target
                                        .value)}
                                    margin="dense"
                                    id="email"
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    disabled={currentUser}
                                />
                                <TextField
                                    placeholder='password'
                                    onChange={(e) => setPassword(e.target
                                        .value)}
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    variant="standard"
                                    disabled={currentUser}
                                />

                                <DialogActions>
                                    <div className='dialog-actions'>
                                        <Button onClick={closeDialog}>CANCEL</Button>
                                        <Button onClick={(e) => userSubmit(e)} disabled={isFetching}>LOGIN</Button>
                                        {/* <span>{error && <Error />}</span> */}
                                    </div>

                                </DialogActions>
                            </div>}
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    );
}

export default LoginDialog;

