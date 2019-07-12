import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import Button from '../../../components/button/Button';

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
        const {login} = this.props;
        return (
            <div className={classes.card} >   
                <Button hidden={login} />
                <div>Title</div>
                <div>Content</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      login : state
    }
  }
  

const ConnectLogin = connect(
    mapStateToProps
  )(Card);
  
export default injectSheet(styles)(ConnectLogin);