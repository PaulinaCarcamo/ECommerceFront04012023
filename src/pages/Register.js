import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import './register.css';
import { useSelector } from 'react-redux';
import LoginDialog from '../components/Login.js';
import { Check, VpnKey } from '@mui/icons-material';

//THIS PAGE SHOWS FORM TO REGISTER NEW USER'S INFORMATION.

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  // const [open, setOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const newUserSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "https://another-testing.vercel.app/api/auth/register",
      data: {
        username,
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => { setRegister(true) })
      .catch((error) => { error = new Error() })
  };

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <Ads />
      <Navbar />
      <div className="reg-container">
        {register
          ? <div><button onClick={openDialog}>CLICK TO LOGIN</button></div>
          : <div><button onClick={openDialog}>CLICK TO REGISTER</button></div>
        }

        <Dialog open={open} onClose={closeDialog}>
          <div className='dialog-wrapper'>
            {register
              ?
              <div>
                <DialogTitle>Thanks for joining us! <Check /></DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    We are glad to have you here. Please login to access to your account.
                  </DialogContentText>
                  <div className='dialog-actions'>
                    <DialogActions>
                      <VpnKey />
                      <Link className='link'>
                        <Button> <LoginDialog /> </Button>
                      </Link>
                    </DialogActions>
                  </div>
                </DialogContent>
              </div>
              :
              <div>
                <DialogTitle>CREATE YOUR ACCOUNT</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To register to this website, please enter your name and email address here. We
                    will send updates of our products occasionally.
                  </DialogContentText>

                  <TextField
                    required
                    margin="dense"
                    id="username"
                    label="Name"
                    type="username"
                    fullWidth
                    variant="standard"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={currentUser}
                  />
                  <TextField
                    required
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={currentUser}
                  />
                  <TextField
                    required
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={currentUser}
                  />
                  <div className='dialog-actions'>
                    <DialogActions>
                      <Button onClick={closeDialog}>Cancel</Button>
                      <Button onClick={(e) => {
                        newUserSubmit(e);
                      }}
                        type="submit"
                        disabled={currentUser}
                      >REGISTER</Button>
                    </DialogActions>
                  </div>
                </DialogContent>
              </div>
            }
          </div>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
};