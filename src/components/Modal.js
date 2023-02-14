import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { resetCart } from '../redux/cartRedux.js';
import './modal.css'
import { Check, Clear } from '@mui/icons-material';

export default function ConfirmationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  return (
    <div>
      <Link onClick={handleOpen} classname='link'>RESET CART</Link>
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
            Click on the buttons to clear cart.
          </Typography> */}
          </div>
          <div>
            <Button onClick={() => dispatch(resetCart())}>YES <Check /></Button>
            {/* <Link onClick={() => dispatch(resetCart())}>RESET CART</Link> */}
            <Button onClick={() => { handleClose() }}>NO <Clear /></Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}