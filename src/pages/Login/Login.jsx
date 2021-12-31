import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Mininavbar from "../../components/Mininavbar/Mininavbar";
import "../Login/Login.css";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChangeEmail(event) {
    const newEmail = event.target.value;
    this.setState({ email: newEmail });
  }
  handleChangePassword(event) {
    const newPassword = event.target.value;
    this.setState({ password: newPassword });
  }
  handleSubmit(event) {
    // prevenirea comportamentului default al formularului
    event.preventDefault();
    // la submiterea formularului se reseteaza cele doua inputuri din cadrul formularului de login
    this.setState({
      email: "",
      password: "",
    });
  }
  render() {
    return (
      <div className="login">
        <Header />
        <Navbar />
        <Mininavbar />
        <h2>Contul meu</h2>
        <form
          className="container"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          {/* <h2>Utilizatori recurenți</h2> */}
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            // adaug value pentru a avea control 100% asupra inputului
            value={this.state.email}
            onChange={(event) => this.handleChangeEmail(event)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Parola"
            // adaug value pentru a avea control 100% asupra inputului
            value={this.state.password}
            onChange={(event) => this.handleChangePassword(event)}
          />
          <div className="input-checkbox">
            <input type="checkbox" name="" id="checkbox" />
            <label htmlFor="checkbox">Ține-mă minte</label>
          </div>
          <input type="submit" value="CONECTARE" />
        </form>
      </div>
    );
  }
}

export default Login;
