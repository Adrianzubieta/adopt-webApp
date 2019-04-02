import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import axios from 'axios';


const styles = {
    select: {

    },
    filters: {

    }
}

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            provinces: [],
            cities: [],
            disabledCity: true
        };
    }

    componentWillMount (){
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div className={classes.filters} >

                </div>
            </Fragment>
        );

    }

}

export default injectSheet(styles)(Table);