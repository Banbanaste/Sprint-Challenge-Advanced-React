/* boiler plate */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

/* axios */
import axios from "axios";

/* material ui */

/* components */
import Table from "./components/Table";
import MenuAppBar from "./components/NavBar";
import Chart from "./components/Chart";

class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => res.data)
      .then(data => this.setState({ data, loading: false }));
  }

  render() {
    return (
      <>
        <MenuAppBar />
        <Chart loading={this.state.loading} data={this.state.data} />
        <Table loading={this.state.loading} data={this.state.data} />
      </>
    );
  }
}

export default App;
