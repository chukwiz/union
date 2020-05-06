import React,{useState} from 'react';

import {TextField,InputLabel,FormControl} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import {Button,ButtonGroup} from '@material-ui/core';

import classes from './Profile.module.css'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Profile = (props) => {

  const queueRef = React.useRef([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  const processQueue = () => {
    if (queueRef.current.length > 0) {
      setMessageInfo(queueRef.current.shift());
      setOpen(true);
    }
  };

  const handleClick = message => () => {
    queueRef.current.push({
      message,
      key: new Date().getTime(),
    });

    if (open) {
      // immediately begin dismissing current message
      // to start showing new one
      setOpen(false);
    } else {
      processQueue();
    }

    var textField = document.createElement('textarea')
    textField.innerText = `csmwealth.com/signup?ref=${values.referralID}`
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    // handleClick('copied to clipboard!')
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    processQueue();
  };


  const [copySuccess, setCopySuccess] = useState('Copy');
  const [textToCopy,setTextToCopy] = useState('89488839020889579797997549797065708480568780');
  const [id, setId] = useState('');
  const copyToClipboard = () => {
    var textField = document.createElement('textarea')
    textField.innerText = `csmwealth.com/signup?ref=${values.referralID}`
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    handleClick('copied to clipboard!')
    // setCopySuccess('Copied');
  }

  const values= props.values
  console.log(values.referrals)
    return(
        <div className={classes.root}>
      <Grid container spacing = {2} style = {{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper} elevation = {0}>
          <div className = {classes.title}>
            <h3>Personal Information</h3>
          </div>
          <div className = {classes.content}>
          
          <TextField
          className = {classes.field}
          label = "First Name"
          disabled
          id="first-name"
          value = {values.firstName || ""}
        />
        
        <TextField
        className = {classes.field}
          disabled
          label="Last Name"
          value = {values.lastName || ""}
        />
        </div>

        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Email"
          disabled
          value={values.email || ""}
        />
        </div>

        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Job"
          disabled
          value={values.job || ""}
        />
        </div>
        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Age"
          disabled
          value={values.age || ""}
        />
        </div>
        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "City"
          disabled
          value={values.city || ""}
        />
        </div>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
        style = {{marginBottom:"10px"}}
      >
        Edit 
      </Button>
          </Paper>
        </Grid>

        {/* Account Information */}

        <Grid item xs={12} md={9}>
        <Paper className={classes.paper} elevation = {0}>
          <div class = {classes.title} style = {{backgroundColor:"#e6e6e6fb"}}>
            <h3>Account Information</h3>
          </div>
          <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Investor Type"
          disabled
          value={values.investorType || ""}
        />
        </div>
        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Capital"
          disabled
          value={values.capital || ""}
        />
        </div>
        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Funds Type"
          disabled
          value={values.fundsType || ""}
        />
        </div>
        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Bitcoin Address"
          disabled
          value={values.bitaddress || ""}
        />
        </div>
        <div className = {classes.content}>
        <TextField
        className = {classes.field}
        label = "Referrals"
          disabled
          value={values.referrals }
        />
        </div>
        <div className = {classes.content}>
        {/* <TextField
        className = {classes.field}
        label = "Bitcoin Address"
          disabled
          value={values.referralID || ""}
        /> */}
        <ButtonGroup color="primary" aria-label="outlined secondary button group" style={{width:'100%'}}>
      <TextField
          label = "Referral ID"
          style={{width:"100%"}}
          fullWidth
          disabled
          id="filled-disabled"
          value={'csmwealth.com/signup?ref='+values.referralID || ""}
          variant="filled"
        />
        <Button onClick = {handleClick('copied to clipboard!')}>copy</Button>
      </ButtonGroup>
        </div>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SaveIcon />}
        style = {{marginBottom:"10px"}}
      >
        OK 
      </Button>
          </Paper>
        </Grid>
        <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
      </Grid>
      
    </div>
    )
}

export default Profile;