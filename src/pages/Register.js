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
// import LoginDialog from '../components/Login.js';

//THIS PAGE SHOWS FORM TO REGISTER NEW USER'S INFORMATION.

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  // const [open, setOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const newUserSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/auth/register",
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

  // submitForm = async (event) => {
  //   this.setState({ submitted: true });
  //   this.props.dispatch(ActionCreators.formSubmittionStatus(true));
  //   const user = this.state.user;
  //   if (user && this.props.profile) {
  //     user.profileImage = this.props.profile.profileImage;
  //   }
  //   event.preventDefault();
  //   if (this.validateForm(this.state.errors) && this.props.profile && this.props.profile.profileImage) {
  //     console.info('Valid Form')
  //     this.props.dispatch(ActionCreators.addProfile(user));
  //     this.props.history.push('/confirm')
  //   } else {
  //     console.log('Invalid Form')
  //   }
  // }


  const toHome = () => {
    if (register) {
      navigate('/', { replace: true });
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
      <Ads />
      <Navbar />

      <div className="reg-container">
        <button variant="outlined" onClick={openDialog}>
          CLICK TO REGISTER
        </button>

        <Dialog open={open} onClose={closeDialog}>
          <div className='dialog-wrapper'>
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
              />
            </DialogContent>

            <DialogActions>
              <div className='dialog-actions'>
                <Button onClick={closeDialog}>Cancel</Button>
                <Button onClick={(e) => {
                  newUserSubmit(e);
                  toHome()
                }} type="submit">{register ? 'To Home' : 'Register'}</Button>
                <span>
                  {/* {register ? (
                    <div>
                      <p className="success-txt"><i>SUCCESS!</i></p> */}
                  {/* <LoginDialog />
                      <Link to="/">HOME PAGE</Link> */}
                  {/* </div>
                  ) : (
                    <p className="failed-txt"><i>Failed to Register</i></p>
                  )} */}


                </span>
                {/* <span>{error && <Error />}</span> */}
              </div>
            </DialogActions>
          </div>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
};