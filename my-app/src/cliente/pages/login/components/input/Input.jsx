import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: theme.spacing.unit * 50,
        height: theme.spacing.unit * 9,
        border: [2, 'solid', theme.borderColor.input],
        borderRadius: theme.spacing.unit * 2,
        color: theme.color.title,
    },
    input: {
        border: 'none',
        outline: 'none',
        fontSize: theme.font.size.subtitle,
        width: theme.spacing.unit * 45,
    },
    [`@media (min-width: ${theme.spacing.tablet}px)`]: {},
    [`@media (min-width: ${theme.spacing.desktop}px)`]: {
        container: {
            width: theme.spacing.unit * 70,
            height: theme.spacing.unit * 9,
        },
        input: {
            width: theme.spacing.unit * 60,
        },
    }
})

class Input extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div>
                <p>{this.props.children}</p>
                <div className={classes.container}>
                    <input className={classes.input} type={this.props.type} placeholder={this.props.placeholder}/>
                </div>
            </div>

        );
    }
}

export default injectSheet(styles)(Input);
