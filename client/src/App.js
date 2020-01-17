/* boiler plate */
import React from "react";
import logo from "./logo.svg";
import "./App.css";

/* axios */
import axios from "axios";

/* material ui */
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Searches</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!this.state.loading &&
              this.state.data.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.country}</TableCell>
                  <TableCell align="right">{row.searches}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default App;
