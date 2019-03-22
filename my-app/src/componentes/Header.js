import React from 'react';
import injectSheet from 'react-jss';
import Login from './Login';
import {Row, Col} from 'react-bootstrap';

const styles = {
    h1:{
        color: '#51AC9B'
    }
}

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Row>
                <Col >
                    <h1 className={classes.h1}>Adopt</h1>
                </Col>
                <Col>
                    <Login/>
                </Col>
            </Row>
        );
    }
}

export default injectSheet(styles)(Header);
