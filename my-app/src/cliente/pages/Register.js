import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import {Button, Col, Form, Row} from "react-bootstrap";
import Header from "./componentes/Header";

const styles = {
    form: {
        marginTop: '5%',
        border: '3px solid #17A2B8',
        borderRadius: '5px',
        padding: '5%'
    },
    button: {
        marginTop: '5%',

    },
    h1:{
        marginTop: '10%',
        color: '#17A2B8'
    }
}

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValidityEmail: '',
        };
    }

    handleChange = () => {
        this.setState({
            isValidationEmail: 'true'
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Header nameButton={'Registrarse'} hrefButton={'/Registrarse'} sizeButton={'lg'}/>
                <Row className={classes.h1+ ' text-center'} >
                    <h1>Registro</h1>
                </Row>
                <Row>
                    <Col xs={{span: 10, offset: 1}} sm={{span: 12}} md={{span: 4, offset: 4}}>
                        <Form className={classes.form}>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control type="email" name='name' placeholder="Ingrese Nombre"/>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Ingrese su email"/>
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Ingrese su Password"/>
                            </Form.Group>
                            <Button className={classes.button} variant="info" href={'/Home'}>
                                Registrarse
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default injectSheet(styles)(Register);
