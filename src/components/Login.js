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

const LoginDialog = () => {
    const [open, setOpen] = useState(false);

    // const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isFetching, error } = useSelector((state) => state.user);

    console.log(error);

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { email, password })
    };

    const navigateToAccount = () => {
        navigate('/account', { replace: true });
    };

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <div>
            <Link className='link' onClick={openDialog}> Login </Link>
            <Dialog open={open} onClose={closeDialog}>
                <DialogTitle>LOGIN</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To login to this website, please enter your email and password here. We
                        will send updates of our products occasionally.
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
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Cancel</Button>
                    {/* { error && <error>Somenthing went wrong</error>} */}
                    <Button onClick={(e) => {
                        handleClick(e);
                        navigateToAccount()
                    }}
                        disabled={isFetching}>Login</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default LoginDialog;

