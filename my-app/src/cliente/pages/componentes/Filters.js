import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';


const styles = {
    select: {
        marginTop: '10%',
        border: '3px solid #17A2B8',
        borderRadius: '10px',
        height: '40px',
    },
    filters: {
        marginTop: '10%',
        marginLeft: '15%'
    }
}

class Filters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            provinces: [],
            cities: [],
            disabledCity: true
        };
    }

    componentWillMount (){
        this.createProvinceFilter()
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.filters} >
                    <select className={"col-md-8 "+classes.select} onChange={this.changeProvince} >
                        <option selected disabled>Provincias</option>
                        {this.state.provinces}
                    </select>
                    <select className={"col-md-8 "+classes.select} disabled={this.state.disabledCity}>
                        <option selected disabled>Ciudad</option>
                        {this.state.cities}
                    </select>
                    <select className={"col-md-8 "+classes.select} >
                        <option selected disabled>Tipo</option>
                        <option value="1">Perro</option>
                        <option value="2">Gato</option>
                    </select>
                    <select className={"col-md-8 "+classes.select} >
                        <option selected disabled>Genero</option>
                        <option value="1">Macho</option>
                        <option value="2">Hembra</option>
                    </select>
                    <select className={"col-md-8 "+classes.select} >
                        <option selected disabled>Tamaño</option>
                        <option value="1">Pequeño</option>
                        <option value="2">Mediano</option>
                        <option value="2">Grande</option>
                    </select>
                </div>
            </Fragment>
        );

    }

    getProvinces = async () => {
        let response = await axios.get('http://localhost:8080/api/countries/1/states');
        return response.data;
    };

    getCities = async (provinceId) => {
        let response = await axios.get('http://localhost:8080/api/states/'+provinceId+'/cities');
        return response.data;
    }

    createProvinceFilter = async () =>{
        let provinces = await this.getProvinces();
        let option = [];

        for (let i = 0; i < provinces.length; i++) {
            option.push(<option value={provinces[i].id}>
                {provinces[i].name}
            </option>)
        }

        this.setState({
            provinces : option
        })
    }

    createCitiesFilter = async (provinceId) =>{
        let cities = await this.getCities(provinceId);
        let option = [];

        for (let i = 0; i < cities.length; i++) {
            option.push(<option value={cities[i].id}>
                {cities[i].name}
            </option>)
        }

        this.setState({
            cities : option
        })
    }

    changeProvince = (e) => {
        let idProvince = e.nativeEvent.target.selectedIndex;
        this.createCitiesFilter(idProvince)
        this.setState({
            disabledCity : false
        })
    }
}

export default injectSheet(styles)(Filters);