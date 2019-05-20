import React from 'react';
import withStyles from 'react-jss';
import {FaPaw} from 'react-icons/fa';

const styles = theme => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: theme.background.shadow,
        boxShadow: theme.styles.shadowBorder,
        color: theme.color.subtitle,
        borderRadius: theme.spacing.unit * 2,
        height: theme.spacing.unit * 20,
    },
    logo: {
        display: 'flex',
        paddingRight: theme.spacing.unit * 4,
        paddingTop: theme.spacing.unit * 2,
        fontSize: theme.spacing.unit * 15,
    },
    [`@media (min-width: ${theme.spacing.tablet}px)`]: {
        header: {},
    },
    [`@media (min-width: ${theme.spacing.desktop}px)`]: {
        header: {

        },
        logo: {

        }
    }
})

const Header = ({classes}) => (
    <div className={classes.header}>
        <div className={classes.logo}>
            <FaPaw/>
        </div>
        <h1>Adopt</h1>
    </div>
)

export default withStyles(styles)(Header)