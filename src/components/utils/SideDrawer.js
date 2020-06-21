import React from 'react';
import { useHistory } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AdbIcon from '@material-ui/icons/Adb';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing(1),
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('lg')]: {
      paddingTop: "64px",
    },
  },
  divider: {
    backgroundColor: '#505c94',
  },
  red: {
    color: 'red'
  }
}));

const SideDrawer = props => {
    let history = useHistory();
    const classes = useStyles();
    const theme = useTheme();

    const pushLink = link => {
      history.push(link);
      props.handleDrawerToggle();
    }

    const drawer = (
        <div style={{ background: 'linear-gradient(90deg, rgba(45,55,90,1) 4%, rgba(37,47,80,1) 18%, rgba(33,40,66,1) 38%, rgba(28,35,62,1) 82%)'}}>
            <ListItem classes={{root: classes.root}} button>
                <ListItemIcon><AppsIcon color="primary" fontSize="large" /></ListItemIcon>
                <Typography color="primary" style={{ fontSize: '25px', fontWeight: '500' }}>
                    Console
                </Typography>
              </ListItem>
          <Divider className={classes.divider} />
          <List>
            <ListItem button onClick={() => {pushLink('/')}}>
              <ListItemIcon><Avatar><DashboardIcon fontSize='small' /></Avatar></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><Avatar><AccessibilityIcon fontSize='small' /></Avatar></ListItemIcon>
                <ListItemText primary="Activity" />
              </ListItem>
          </List>
          <Divider className={classes.divider} />
          <List>
            <ListSubheader component="div">
              Handwriting Recognition
            </ListSubheader>  
            <ListItem button>
                  <ListItemIcon><Avatar><AssignmentIcon fontSize='small' /></Avatar></ListItemIcon>
                  <ListItemText primary="HTR Documentation" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><Avatar><AdbIcon fontSize='small' /></Avatar></ListItemIcon>
                  <ListItemText primary="Demo" />
                </ListItem>
            </List>
          <Divider className={classes.divider} />
          <List>
          <ListSubheader component="div">
            Question and Answers
          </ListSubheader>  
          <ListItem button onClick={() => {pushLink('/store')}}>
                <ListItemIcon><Avatar><AssignmentIcon fontSize='small' /></Avatar></ListItemIcon>
                <ListItemText primary="Q/A Documentation" />
              </ListItem>
              <ListItem button onClick={() => {pushLink('/upload')}}>
                <ListItemIcon><Avatar><AdbIcon fontSize='small' /></Avatar></ListItemIcon>
                <ListItemText primary="Demo" />
              </ListItem>
          </List>
          <Divider className={classes.divider} />
          <List>
          <ListSubheader component="div">
            CDQA
          </ListSubheader>  
          <ListItem button>
                <ListItemIcon><Avatar><AssignmentIcon fontSize='small' /></Avatar></ListItemIcon>
                <ListItemText primary="cdqa Documentation" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><Avatar><AdbIcon fontSize='small' /></Avatar></ListItemIcon>
                <ListItemText primary="Demo" />
              </ListItem>
          </List>
          <Divider className={classes.divider} />
        </div>
      );

    return (
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden lgUp>
          <Drawer
            container={props.container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav> 
  );
}

export default SideDrawer;