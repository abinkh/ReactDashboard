import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import {List, ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import NotificationIcon from 'material-ui-icons/Notifications';
import NoteAdd from 'material-ui-icons/NoteAdd';
import SpeakerNotes from 'material-ui-icons/SpeakerNotes';
import ViewModule from 'material-ui-icons/ViewModule';
import PermIdentity from 'material-ui-icons/PermIdentity';
import ViewList from 'material-ui-icons/ViewList';
import HomeIcon from 'material-ui-icons/Home';
import Person from 'material-ui-icons/Person';
import People from 'material-ui-icons/People';
import Reorder from 'material-ui-icons/Reorder';
import Restaurant from 'material-ui-icons/Restaurant';
import RestaurantMenu from 'material-ui-icons/RestaurantMenu';

import FreeBreakfast from 'material-ui-icons/FreeBreakfast';
import School from 'material-ui-icons/School';
import LocalLibrary from 'material-ui-icons/LocalLibrary';
import ContentPaste from 'material-ui-icons/ContentPaste';
import Class from 'material-ui-icons/Class';


import EventNoteIcon from 'material-ui-icons/EventNote';
import {Link} from 'react-router-dom';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';
import Main from '../Main';


const drawerWidth = 240;


const style = {
    backgroundColor: '#222d32',
    textColor: 'white'

}

const styles = theme => ({
    root: {
        width: '100%',
        height: 'auto',
        marginTop: theme.spacing.unit * 3,
        zIndex: 1,
        overflow: 'hidden',
        marginTop: '-0.75%',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        backgroundColor: '#2196f3',
        zIndex: theme.zIndex.navDrawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        backgroundColor: '#222d32',
        color: 'white',
        position: 'relative',
        height: '1000',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        width: 58,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerInner: {
        // Make the items inside not wrap when transitioning:
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        color: 'white',


        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        height: 56,
        [theme.breakpoints.up('sm')]: {
            height: 64,
        },
    },
    textColor: {color: 'white'},
    Icon1: {
        color: 'white',
    },

    content1: {
        width: '100%',
        flexGrow: 1,


        backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

        padding: 24,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
    Text: {
        color: 'white',
        height: '50 px',
        width: '50px',
        marginRight: '10px',
    },
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
    nested: {
        paddingLeft: theme.spacing.unit * 3,

    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.drawer,
            view: false,
            viewLecture: false,
            viewFood: false

        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        this.setState({open: nextProps.drawer})
    }

    handleDrawerOpen() {
        this.setState({open: true});
    };

    handleDrawerClose() {
        this.setState({open: false});
    };

    handleClick() {
        this.setState({view: !this.state.view});
    };


    render() {
        const classes = this.props.classes;
        const FolderListItems = (

            <div style={{color: 'white'}}>

                <ListItem button>
                    <ListItemIcon className={classes.Icon1}>
                        <PermIdentity />
                    </ListItemIcon>
                    <div className={classes.Text}>Login</div>
                </ListItem>

                <ListItem button>
                    <ListItemIcon className={classes.Icon1}>
                        <HomeIcon  />
                    </ListItemIcon>
                    <div className={classes.Text}>Home</div>
                </ListItem>
            </div>
        );


        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                        <Toolbar disableGutters={!this.state.open} style={{backgroundColor: '#3f5c9a'}}>
                            <IconButton
                                color="contrast"
                                aria-label="open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, this.state.open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography type="title" style={{color: "white"}} noWrap>
                                Hello world !
                            </Typography>

                        </Toolbar>

                    </AppBar>

                    <Drawer
                        type="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <div className={classes.drawerInner}>
                            <div className={classes.drawerHeader} style={{color: 'white'}}>
                                <IconButton onClick={this.handleDrawerClose}>
                                    <ChevronLeftIcon style={{color: 'white'}}/>
                                </IconButton>
                            </div>
                            <Divider />
                            {FolderListItems}
                            <Divider />
                        </div>
                    </Drawer>

                    <main className={classes.content1}>
                        <div className="container-fluid" style={{marginTop: '-0.5%'}}>
                            <Main/>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {name: 'MuiDrawer'})(App);

