import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import Card from './components/Card'

const styles = {

}

class Home extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Card />
        );
    }
}

export default injectSheet(styles)(Home);
