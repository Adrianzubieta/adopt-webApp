import React from 'react';
import injectSheet from 'react-jss';
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import {FaFacebookF, FaGoogle} from 'react-icons/fa';

const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    login: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: theme.spacing.unit * 10,
        width: theme.spacing.unit * 60,
        height: theme.spacing.unit * 90,
        border: [2, 'solid', theme.borderColor.box],
        borderRadius: theme.spacing.unit * 2,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: theme.font.size.title * 2.5,
        fontWeight: 'bold'
    },
    input: {
        display: 'flex',
        justifyContent: 'center',
    },
    buttonLogin: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing.unit * 3,
    },
    buttonsNetwork: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    [`@media (min-width: ${theme.spacing.tablet}px)`]: {},
    [`@media (min-width: ${theme.spacing.desktop}px)`]: {
        login: {
            marginTop: theme.spacing.unit * 15,
            width: theme.spacing.unit * 90,
            height: theme.spacing.unit * 100,
        },
        title: {},
    }
})

class Login extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.login}>
                    <div className={classes.title}>
                        Login
                    </div>
                    <div className={classes.input}>
                        <Input type={'text'} placeholder={'nombre'}>
                            <p>Usuario: </p>
                        </Input>
                    </div>
                    <div className={classes.input}>
                        <Input type={'password'} placeholder={'password'}>
                            <p>Password: </p>
                        </Input>
                    </div>
                    <div className={classes.buttonLogin}>
                        <Button name={'Ingresar'}/>
                    </div>
                    <div className={classes.buttonsNetwork}>
                        <Button name={'Facebook'}>
                        <FaFacebookF />
                    </Button>
                        <Button name={'Google'}>
                            <FaGoogle />
                        </Button>
                    </div>
                </div>
            </div>

        );
    }
}

export default injectSheet(styles)(Login);
