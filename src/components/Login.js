import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../redux/apiCalls.js';
import './login.css';
import { Error } from '@mui/icons-material';


const LoginDialog = () => {
    const [open, setOpen] = useState(false);

    // const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isFetching, error, currentUser } = useSelector((state) => state.user);

    const userSubmit = (e) => {
        e.preventDefault()
        login(dispatch, { email, password })
    };

    // const toAccount = () => {
    //     navigate('/account', { replace: true });
    //     // navigate('/loading', { replace: true });
    // };

    const toAccount = () => {
        if (currentUser) {
            navigate('/account', { replace: true });
        }
    };

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <div>
            <Link className='link' onClick={openDialog}> {currentUser ? `${currentUser.username}` : 'Login'} </Link>
            <Dialog open={open} onClose={closeDialog} >
                <div className='dialog-wrapper'>
                    <DialogTitle>{currentUser ? 'GO TO ACCOUNT' : 'LOGIN'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To login to this website, please enter your email and password here. We
                            will continue to send you updates of our products.
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

                    </DialogContent>
                    <DialogActions>
                        <div className='dialog-actions'>
                            <Button onClick={closeDialog}>Cancel</Button>



                            <Button onClick={(e) => {
                                userSubmit(e);
                                toAccount()
                            }}
                                disabled={isFetching}>{currentUser ? 'Account' : 'Login'}</Button>
                            <span>{error && <Error/>}</span>

                            {/* setTimeout(() => {
    console.log('This will run after 1 second!')
  }, 1000); */}

                        </div>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}

export default LoginDialog;

