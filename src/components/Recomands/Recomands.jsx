import React, { Component } from "react";
import recomands from "../../recomands.json";
import RecomandsList from "../RecomandsList/RecomandsList";
import "../Recomands/Recomands.css";

export class Recomands extends Component {
  constructor() {
    super();
    this.state = {
      // prima data array-ul este un obiect gol
      recomands: [],
    };
  }
  componentDidMount() {
    this.setState({ recomands: recomands });
  }
  render() {
    return (
      <div className="container">
        <h1 className="heading">Recomandări pentru tine</h1>
        <RecomandsList recomands={this.state.recomands} />
        <h1 className="heading">Oferte speciale</h1>
      </div>
    );
  }
}

export default Recomands;
