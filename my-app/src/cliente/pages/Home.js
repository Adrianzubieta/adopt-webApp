import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import Header from './componentes/Header';
import Filters from './componentes/Filters';
import Table from './componentes/Table';
import {Col, Row} from 'react-bootstrap';

const styles = {}

class Home extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Header nameButton={'Iniciar Sesion'} hrefButton={'/Login'} sizeButton={'lg'} />
                <Row>
                    <Col lg={2}>
                        <Filters/>
                    </Col>
                    <Col lg={10}>
                        <Table/>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default injectSheet(styles)(Home);
