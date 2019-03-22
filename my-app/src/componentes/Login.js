import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    a:{
        color: '#51AC9B',
    }
}

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Iniciar Sesion',
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <a className={classes.a}>
                {this.state.name}
            </a>
        );
    }
}

export default injectSheet(styles)(Login);