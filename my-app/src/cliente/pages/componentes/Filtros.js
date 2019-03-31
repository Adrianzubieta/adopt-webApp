import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import {DropdownButton, ButtonGroup, Dropdown} from 'react-bootstrap';
import Axios from 'axios';
import Querystring from 'query-string'


const styles = {
    ButtonGroup: {
      paddingLeft: '10%'
    },
    DropdownButton: {
        paddingTop: '20%'
    }
}

class Filtros extends React.Component {

    getProvinces = async () => {
        let response = await Axios.get('http://localhost:8080/api/countries/1/states');
        return response.data;
    };

    createFilterProvince = async () =>{
        let province = await this.getProvinces();

        console.log(province)

        let dropdownItem = [];

        for (let i = 0; i < province.length; i++) {
            dropdownItem.push(<Dropdown.Item eventKey={province[i].id.toString()}>
                {province[i].name}
            </Dropdown.Item>)
        }

        return dropdownItem;
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <ButtonGroup className={classes.ButtonGroup} vertical>
                    <DropdownButton className={classes.DropdownButton} size="lg" variant='info' as={ButtonGroup} title="Provincia">
                        {this.createFilterProvince()}
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