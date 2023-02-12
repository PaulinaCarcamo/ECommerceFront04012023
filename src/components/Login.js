import Button from '@mui/material/Button';
import { Error } from '@mui/icons-material';
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
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../redux/apiCalls.js';
import './login.css';

const LoginDialog = () => {
    const [open, setOpen] = useState(false);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { isFetching, error, currentUser } = useSelector((state) => state.user);

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
                                    Welcome to our website, we are glad you are part of our cassette store family. If you want to make a purchase, please go to our new products section.
                                </DialogContentText>
                                <div className='login-success-msg'>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ m: 1, position: 'relative' }}>
                                            <Fab aria-label="save" color="secondary">
                                                <CheckIcon />
                                            </Fab>
                                        </Box>
                                        <Box sx={{ m: 1, position: 'relative' }}>
                                            <Button variant="contained" color="secondary">
                                                <Link to='/account' className='link'>TO ACCOUNT</Link>
                                            </Button>
                                        </Box>
                                    </Box>
                                </div>
                                <DialogActions>
                                    <div className='dialog-actions'>
                                        <Button><Link to='/' className='link'>TO HOME</Link></Button>
                                        <Button><Link to='/cart' className='link'>CART</Link></Button>
                                        <Button><Link to='/allproducts' className='link'>CASSETTES</Link></Button>
                                    </div>
                                </DialogActions>
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

