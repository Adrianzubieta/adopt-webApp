import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        border: [2, 'solid', theme.borderColor.button],
        borderRadius: theme.spacing.unit * 2,
        width: theme.spacing.unit * 23,
        height: theme.spacing.unit * 9,
        padding: theme.spacing.unit,
        backgroundColor: theme.background.primary,
        borderColor: theme.background.primary,
        cursor: 'pointer',
    },
    button: {
        border: 'none',
        outline: 'none',
        background: 'none',
        color: 'white',
        width: theme.spacing.unit * 20,
        height: theme.spacing.unit * 9,
        cursor: 'pointer',
    },
    [`@media (min-width: ${theme.spacing.tablet}px)`]: {},
    [`@media (min-width: ${theme.spacing.desktop}px)`]: {
        container: {},
        button: {},
    }
})

class Button extends React.Component {

    render() {
        const {classes , onClick} = this.props;
        return (
            <div className={`${classes.container} ${this.props.styles}`} onClick={ onClick }>
                <div className={this.props.stylesIcon}>
                    {this.props.children}
                </div>
                <button className={classes.button}>
                    {this.props.name}
                </button>
            </div>
        );
    }
}

export default injectSheet(styles)(Button);