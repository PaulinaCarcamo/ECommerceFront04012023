import Button from '@mui/material/Button';
import { Home, Person, ShoppingCart, Verified } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../redux/apiCalls.js';
import './login.css';

const LoginDialog = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
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
                    ? `${currentUser.username}`
                    : 'LOGIN'} </Link>
            <Dialog open={open} onClose={closeDialog} >
                <div className='dialog-wrapper'>
                    <DialogTitle>{currentUser
                        ? <div className='hello-user'>Hello {currentUser.username}!
                            <Verified color='success' />
                        </div>
                        : 'LOGIN'}
                    </DialogTitle>
                    <DialogContent>
                        {currentUser
                            ?
                            <div>
                                <DialogContentText>
                                    Welcome to our website. If you want to make a purchase, please go to our products section where you will find the newest arrivals.
                                </DialogContentText>
                                <DialogActions>
                                    <List
                                        sx={{ width: '100%', bgcolor: 'background.paper' }}
                                        component="nav"
                                        aria-labelledby="nested-list"
                                    >
                                        <Link to='/account' className='link'>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <Person />
                                                </ListItemIcon>
                                                <ListItemText primary="TO ACCOUNT" />
                                            </ListItemButton>
                                        </Link>

                                        <Link to='/cart' className='link'>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <ShoppingCart />
                                                </ListItemIcon>
                                                <ListItemText primary="TO CART" />
                                            </ListItemButton>
                                        </Link>

                                        <Link to='/' className='link'>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <Home />
                                                </ListItemIcon>
                                                <ListItemText primary="TO HOME PAGE" />
                                            </ListItemButton>
                                        </Link>
                                    </List>
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

                                {email && password
                                    ? <span><i>Click on button to login</i></span>
                                    : <span><i>Should provide email and password</i></span>
                                }

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

