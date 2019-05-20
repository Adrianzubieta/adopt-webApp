import React, {Fragment} from 'react';
import injectSheet from 'react-jss';

const styles = {

}

class Register extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <h1> Register </h1>
            </Fragment>
        );
    }
}

export default injectSheet(styles)(Register);
