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
        height: theme.spacing.unit * 150,
        border: [2, 'solid', theme.borderColor.box],
        borderRadius: theme.spacing.unit * 2,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: theme.font.size.title * 1.5,
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
        justifyContent: 'space-evenly',
    },
    buttonsGoogle: {
        backgroundColor: theme.background.buttonGoogle,
        color: 'white',
        borderColor: '#D94D3D',
    },
    buttonsFacebook: {
        backgroundColor: theme.background.buttonFacebook,
        color: 'white',
        borderColor: '#4267B2',
    },
    iconButton: {
        display: 'flex',
        fontSize: theme.spacing.unit * 5,
        color: 'white',
        alignItems: 'center',
    },
    [`@media (min-width: ${theme.spacing.tablet}px)`]: {},
    [`@media (min-width: ${theme.spacing.desktop}px)`]: {
        login: {
            marginTop: theme.spacing.unit * 10,
            width: theme.spacing.unit * 90,
            height: theme.spacing.unit * 150,
        },
        title: {
            fontSize: theme.font.size.title * 2.5,
        },
    }
})

class Register extends React.Component {

    onClickLogin = () => {
        console.log('Click')
        window.location.reload();
    }

    onClickFacebook = () => {
        console.log('Click')
        window.location.reload();
    }

    onClickGoogle = () => {
        console.log('Click')
        window.location.reload();
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.login}>
                    <div className={classes.title}>
                        Completá tus datos
                    </div>
                    <div className={classes.input}>
                        <Input type={'text'} placeholder={'Nombre'}>
                            <p>Nombre: </p>
                        </Input>
                    </div>
                    <div className={classes.input}>
                        <Input type={'text'} placeholder={'Apellido'}>
                            <p>Apellido: </p>
                        </Input>
                    </div>
                    <div className={classes.input}>
                        <Input type={'email'} placeholder={'email'}>
                            <p>Email: </p>
                        </Input>
                    </div>
                    <div className={classes.input}>
                        <Input type={'password'} placeholder={'password'}>
                            <p>Password: </p>
                        </Input>
                    </div>
                    <div className={classes.buttonLogin}>
                        <Button name={'Crear Cuenta'} onClick={ this.onClickLogin }>
                        </Button>
                    </div>
                    <div className={classes.buttonsNetwork}>
                        <Button styles={classes.buttonsFacebook} stylesIcon={classes.iconButton}
                                name={'Facebook'} onClick={ this.onClickFacebook }>
                            <FaFacebookF/>
                        </Button>
                        <Button styles={classes.buttonsGoogle} stylesIcon={classes.iconButton}
                                name={'Google'} onClick={ this.onClickGoogle }>
                            <FaGoogle/>
                        </Button>
                    </div>
                </div>
            </div>

        );
    }
}

export default injectSheet(styles)(Register);