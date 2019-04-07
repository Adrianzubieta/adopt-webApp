import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import Header from './componentes/Header';
import Catalog from './componentes/Catalog';
import {Col, Row} from 'react-bootstrap';

const styles = {}

class Home extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Header nameButton={'Iniciar Sesion'} hrefButton={'/Login'} sizeButton={'lg'} />
                <Row>
                    <Catalog/>
                </Row>
            </Fragment>
        );
    }
}

export default injectSheet(styles)(Home);
