import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from "axios";

const columns = [{
    dataField: 'id',
    text: 'ID',
    hidden: true
}, {
    dataField: 'name',
    text: 'Nombre'
}, {
    dataField: 'description',
    text: 'Descripcion'
}, {
    dataField: 'age',
    text: 'Edad'
}, {
    dataField: 'urlPhoto',
    text: 'Foto'
}, {
    dataField: 'gender.name',
    text: 'Genero'
}, {
    dataField: 'city.name',
    text: 'Ciudad'
}, {
    dataField: 'kind.name',
    text: 'Tipo'
}, {
    dataField: 'size.name',
    text: 'Tamaño'
}];

const styles = {
    bootstrapTable:{
        border: '3px solid #17A2B8',
    },
    table: {
        marginTop: '5%',
        paddingRight: '5%',
    }
}

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            animals: [],
        };
    }

    async componentWillMount() {
        let animals = await this.getAnimals();
        console.log(animals);
        this.setState({
            animals
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.table} >
                    <BootstrapTable wrapperClasses={classes.bootstrapTable} keyField='keyFields' data={this.state.animals} columns={columns}
                                    noDataIndication="No hay ninguna mascota"/>
                </div>
            </Fragment>
        );

    }

    getAnimals = async () => {
        let response = await axios.get('http://localhost:8080/api/animal');
        return response.data.content;
    }

}

export default injectSheet(styles)(Table);