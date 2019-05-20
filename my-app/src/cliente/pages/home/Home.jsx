import React, {Fragment} from 'react';
import injectSheet from 'react-jss';


const styles = {}

class Home extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <h1>Home</h1>
            </Fragment>
        );
    }
}

export default injectSheet(styles)(Home);
