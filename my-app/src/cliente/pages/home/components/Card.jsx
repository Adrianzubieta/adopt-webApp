import React from 'react';
import injectSheet from 'react-jss';


const styles = theme => ({
    card: {
        display : 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        border: [2, 'solid', theme.borderColor.box],
    },
    [`@media (min-width: ${theme.spacing.tablet}px)`]: {},
    [`@media (min-width: ${theme.spacing.desktop}px)`]: {
    }
})

class Card extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.card}>   
                <div>Title</div>
                <div>Content</div>
                <div>Content</div>
            </div>
        );
    }
}

export default injectSheet(styles)(Card);