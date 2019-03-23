import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import Login from './Login';
import {Col, Navbar} from 'react-bootstrap';

const styles = {
    h1: {
        color: '#17A2B8',
        fontSize: '4em',
        paddingLeft: '10%'
    },
    i: {
        paddingLeft: '3%'
    }
}

class Header extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Col xs={8} sm={6} md={10} lg={10}>
                        <h1 className={classes.h1} ref="#home">
                            {this.props.title}
                            <i className={'fas fa-paw fa-1x ' + classes.i}>
                            </i>
                        </h1>
                    </Col>
                    <Col xs={4} sm={6} md={2} lg={2}>
                        <Login/>
                    </Col>
                </Navbar>
            </Fragment>
        );
    }
}

export default injectSheet(styles)(Header);
