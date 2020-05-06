import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Balance from '../Balance/Balance'
import {AccountBox, PaymentOutlined, CloudDownload} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        height: 240,
        width: "100%",
        background: "linear-gradient(90deg, rgba(231,237,238,1) 0%, rgba(201,214,226,1) 100%)",
        borderRadius:"0%"
      },
      control: {
        padding: theme.spacing(2),
      }
  }));

const Balances = (props) => {
  console.log(props.values)
  const {capitalAmount,profit,total} = props.values
    const [spacing, setSpacing] = React.useState(3);
    const classes = useStyles();
    return(
        <Grid container className={classes.root} spacing = {spacing}>
            <Grid item md={4}  xs={12} >
              <Balance color = "#627a85" icon = {AccountBox} name = "Capital" value={capitalAmount>999?capitalAmount.toLocaleString():capitalAmount}/>
            </Grid>
            <Grid item md={4}  xs={12} >
              <Balance color = "#858562" icon = {PaymentOutlined} name = "Profit" value={profit>999?profit.toLocaleString():profit} />
            </Grid>
            <Grid item md={4}  xs={12} >
              <Balance color = "#786285"  icon = {CloudDownload} name = "Total" value={total>999?total.toLocaleString():total} />
            </Grid>
      </Grid>
    )
}

export default Balances;