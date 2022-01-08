import React, { Component } from 'react'
import oferts from '../../oferts.json';
import SpecialOfertsList from '../SpecialOfertsList/SpecialOfertsList';

export class SpecialOferts extends Component {
    constructor(){
        super();
        this.state={
            oferts:[]
        }
    }
    componentDidMount(){
        this.setState({oferts:oferts})
    }
    render() {
        return (
            <div>
                <SpecialOfertsList oferts={this.state.oferts} />
            </div>
        );
    }
}

export default SpecialOferts;
