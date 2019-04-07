import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import Filters from './Filters';
import Table from './Table';
import {Col, Row} from 'react-bootstrap';

const styles = {}

class Catalog extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
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

export default injectSheet(styles)(Catalog);