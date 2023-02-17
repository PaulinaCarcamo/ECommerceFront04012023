import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { VpnKey } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { logoutUser } from '../redux/userRedux.js';
import './cartModal.css'

export default function LogoutModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutUser())
            .then(
                navigate('/', { replace: true })
            )
    }

    return (
        <div>
            <Link onClick={handleOpen} className='txt-flex'> <VpnKey /> LOG OUT</Link>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='box'>
                    <div>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Are you sure?
                        </Typography>
                        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Click on the buttons to logout.
                        </Typography> */}
                    </div>
                    <div>
                        <Button onClick={() => { logout(); }}>YES</Button>
                        <Button onClick={() => { handleClose() }}>NO</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}