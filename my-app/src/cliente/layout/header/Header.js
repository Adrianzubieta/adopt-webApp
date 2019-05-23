import React from 'react';
import injectSheet from 'react-jss';
import {FaPaw} from 'react-icons/fa';
import Button from '../../components/button/Button';

const styles = theme => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.background.primary,
        boxShadow: theme.styles.shadowBorder,
        color: theme.color.subtitle,
        borderRadius: theme.spacing.unit * 2,
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        fontSize: theme.spacing.unit * 10,
        padding: theme.spacing.unit * 2,
    },
    titleLogo:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '65%',
        cursor: 'pointer'
    },
    buttons: {
        display: 'flex',
        width: '35%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'column',
    },
    buttonRegister: {
        backgroundColor: theme.background.primary,
    },
    buttonLogin: {
        backgroundColor: theme.background.primary,
    },
    [`@media (min-width: ${theme.spacing.tablet}px)`]: {
        header: {},
    },
    [`@media (min-width: ${theme.spacing.desktop}px)`]: {
        header: {
            height: theme.spacing.unit * 20,
        },
        logo: {
            paddingRight: theme.spacing.unit * 4,
            paddingTop: theme.spacing.unit * 2,
            fontSize: theme.spacing.unit * 10,
        },
        titleLogo:{
            width: '55%',
            justifyContent: 'flex-end',
        },
        buttons: {
            justifyContent: 'flex-end',
            width: '45%',
            alignItems: 'center',
            flexDirection: 'row',
        },
        buttonRegister: {
        },
        buttonLogin: {
        },
    }
})



class Header extends React.Component {

    onClickLogin = () => {
        window.location.href = '/login';
    }

    onClickRegister = () => {
        window.location.href = '/register';
    }

    onClickHome = () => {
        window.location.href = '/';
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.header}>
                <div className={classes.titleLogo} onClick={this.onClickHome}>
                    <div className={classes.logo}>
                        <FaPaw/>
                    </div>
                    <h1>Adopt</h1>
                </div>
                <div className={classes.buttons}>
                    <Button name={'Acceder'} styles={classes.buttonLogin} onClick={this.onClickLogin}/>
                    <Button name={'Registrarse'} styles={classes.buttonRegister} onClick={this.onClickRegister} />
                </div>
            </div>
        );
    }
}

export default injectSheet(styles)(Header);