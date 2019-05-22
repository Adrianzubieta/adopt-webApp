import React from 'react';
import withStyles from 'react-jss';
import {FaPaw} from 'react-icons/fa';
import Button from '../../components/button/Button';

const styles = theme => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: theme.background.primary,
        boxShadow: theme.styles.shadowBorder,
        color: theme.color.subtitle,
        borderRadius: theme.spacing.unit * 2,
        height: theme.spacing.unit * 20,
    },
    logo: {
        display: 'flex',
        paddingRight: theme.spacing.unit * 4,
        paddingTop: theme.spacing.unit * 2,
        fontSize: theme.spacing.unit * 10,
    },
    buttons: {
        display: 'flex',
        alignItems: 'center'
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
            flexDirection: 'row',
        },
        logo: {
            fontSize: theme.spacing.unit * 15,
        }
    }
})

const Header = ({classes}) => (

    <div className={classes.header}>
        <div className={classes.logo}>
            <FaPaw/>
        </div>
        <h1>Adopt</h1>
        <div className={classes.buttons}>
            <Button name={'Acceder'} styles={classes.buttonLogin}/>
            <Button name={'Registrarse'} styles={classes.buttonRegister}/>
        </div>

    </div>
)

export default withStyles(styles)(Header)