import React from 'react';
import injectSheet from 'react-jss';
import Login from './Login'

const styles = {
    header:{
        display: 'flex',
    },
    h1:{
        color: '#51AC9B',
    }
}

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.header}>
                <h1 className={classes.h1}>Adopt</h1>
                <Login/>
            </div>

        );
    }
}

export default injectSheet(styles)(Header);
