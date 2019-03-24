import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import {Button, Col, Form, Row} from "react-bootstrap";
import Header from "./componentes/Header";

const styles = {
    form: {
        marginTop: '20%',
        border: '3px solid #17A2B8',
        borderRadius: '5px',
        padding: '5%'
    },
    button: {
        marginTop: '5%',

    }
}

class Login extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Header nameButton={'Registrarse'} hrefButton={'/Register'} sizeButton={'lg'}/>
                <Row>
                    <Col xs={{span: 10, offset: 1}} sm={{span: 12}} md={{span: 4, offset: 4}}>
                        <Form className={classes.form}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control color={'#17A2B8'} type="email"
                                              name='email'
                                              placeholder="Ingrese su email"/>
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Ingrese su Password"/>
                            </Form.Group>
                            <Button className={classes.button} size={'lg'} variant="info" href={'/home'}>
                                Iniciar Sesion
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default injectSheet(styles)(Login);
