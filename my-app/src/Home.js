import React from 'react';
import injectSheet from 'react-jss';
import Header from './componentes/Header';

const styles = {

}

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header  title={'Adopt'} />
            </div>
        );
    }
}

export default injectSheet(styles)(Home);
