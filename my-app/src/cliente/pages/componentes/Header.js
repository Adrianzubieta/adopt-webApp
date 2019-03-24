import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import {Col, Navbar, Row,Button} from 'react-bootstrap';

const styles = {
    h1: {
        color: '#17A2B8',
        fontSize: '4em',
    },
    i: {
        color: '#17A2B8',
        fontSize: '4em',
        paddingLeft: '5%'
    }
}

class Header extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Col xs={7} sm={6} md={10} lg={10}>
                        <Row>
                            <Navbar.Brand href="/home">
                                <i ref="#home" className={'fas fa-paw fa-1x ' + classes.i}/>
                            </Navbar.Brand>
                            <h1 className={classes.h1}>
                                Adop
                            </h1>
                        </Row>
                    </Col>
                    <Col xs={5} sm={6} md={2} lg={2}>
                        <Button variant="outline-info" href={this.props.hrefButton} size={this.props.sizeButton}>
                            {this.props.nameButton}
                        </Button>
                    </Col>
                </Navbar>
            </Fragment>
        );
    }
}

export default injectSheet(styles)(Header);
