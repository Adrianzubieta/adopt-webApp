import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import {DropdownButton, ButtonGroup, Dropdown} from 'react-bootstrap';
import Axios from 'axios';


const styles = {
    ButtonGroup: {
      paddingLeft: '10%'
    },
    DropdownButton: {
        paddingTop: '20%'
    }
}

class Filtros extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            provinces: [],
            cities: []
        };
    }

    componentWillMount (){
        this.createFilterProvince()
        this.createFilterCity()
    }


    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <ButtonGroup className={classes.ButtonGroup} vertical>
                    <DropdownButton className={classes.DropdownButton} size="lg" variant='info' as={ButtonGroup} title="Provincia">
                        {this.state.provinces}
                    </DropdownButton>
                    <DropdownButton className={classes.DropdownButton} variant='info' as={ButtonGroup} title="Ciudad">
                        {this.state.cities}
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

    getProvinces = async () => {
        let response = await Axios.get('http://localhost:8080/api/countries/1/states');
        return response.data;
    };

    getCities = async (cityId) => {
        let response = await Axios.get('http://localhost:8080/api/states/'+cityId+'/cities');
        return response.data;
    }

    createFilterProvince = async () =>{
        let provinces = await this.getProvinces();

        let dropdownItem = [];

        for (let i = 0; i < provinces.length; i++) {
            dropdownItem.push(<Dropdown.Item id={provinces[i].name}>
                {provinces[i].name}
            </Dropdown.Item>)
        }

        this.setState({
            provinces : dropdownItem
        })
    }

    createFilterCity = async () =>{
        let cities = await this.getCities(24);

        let dropdownItem = [];

        for (let i = 0; i < cities.length; i++) {
            dropdownItem.push(<Dropdown.Item id={cities[i].name}>
                {cities[i].name}
            </Dropdown.Item>)
        }

        this.setState({
            cities : dropdownItem
        })
    }


}

export default injectSheet(styles)(Filtros);