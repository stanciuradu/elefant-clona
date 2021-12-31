import React, { Component } from 'react';
import categories from '../../categories.json';
import CategoriesList from '../CategoriesList';

export class Categories extends Component {
    constructor(){
        super();
        this.state={
            // initial array ul este gol pana ce datale vin de la back end
            categories:[]
        };
    }
    // se face request -ul catre server o singura data pentru preluarea de date
    // metoda componentDidMount inseamna ca, componenta s-a terminat de montat
    componentDidMount(){
        this.setState({categories:categories})
    }
    render() {
        return (
            <div>
                <CategoriesList categories={this.state.categories} />
            </div>
        );
    }
}

export default Categories;
