import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import {DropdownButton, ButtonGroup, Dropdown} from 'react-bootstrap';


const styles = {
    ButtonGroup: {
      paddingLeft: '10%'
    },
    DropdownButton: {
        paddingTop: '20%'
    }
}

class Filtros extends React.Component {


    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <ButtonGroup className={classes.ButtonGroup} vertical>
                    <DropdownButton className={classes.DropdownButton} size="lg" variant='info' as={ButtonGroup} title="Provincia">
                        <Dropdown.Item eventKey="1">Provincia1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Provincia2</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton className={classes.DropdownButton} variant='info' as={ButtonGroup} title="Ciudad">
                        <Dropdown.Item eventKey="1">Cuidad1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Cuidad1</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton className={classes.DropdownButton} variant='info' as={ButtonGroup} title="Tipo">
                        <Dropdown.Item eventKey="1">Perro</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Gato</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton className={classes.DropdownButton} variant='info' as={ButtonGroup} title="Genero">
                        <Dropdown.Item eventKey="1">Macho</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Hembra</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton className={classes.DropdownButton} variant='info' as={ButtonGroup} title="Tamaño">
                        <Dropdown.Item eventKey="1">Chico</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Medio</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Grande</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </Fragment>
        );

    }
}

export default injectSheet(styles)(Filtros);