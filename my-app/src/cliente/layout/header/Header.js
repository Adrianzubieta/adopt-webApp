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
    },
    logo: {
        display: 'flex',
    },
    [`@media (min-width: ${theme.spacing.tablet}px)`]: {
        header: {},
    },
    [`@media (min-width: ${theme.spacing.desktop}px)`]: {
        header: {
            height: theme.spacing.unit * 20,
            borderRadius: theme.spacing.unit * 2,
        },
        logo: {
            paddingRight: theme.spacing.unit * 4,
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
    </div>
)

export default withStyles(styles)(Header)