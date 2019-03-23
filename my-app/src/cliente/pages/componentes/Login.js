import React from 'react';
import injectSheet from 'react-jss';
import {Button} from 'react-bootstrap';

const styles = {
    login:{

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
            <Button className={classes.login} variant="outline-info" size="lg">
                {this.state.name}
            </Button>
        );
    }
}

export default injectSheet(styles)(Login);