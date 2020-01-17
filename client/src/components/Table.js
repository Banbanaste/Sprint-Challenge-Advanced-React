/* boiler plate */
import React, { useState } from "react";

/* material ui */
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  chart: {
    maxWidth: "700px",
    margin: "40px auto 0"
  },
  darkChart: {
    maxWidth: "700px",
    margin: "40px auto 0",
    backgroundColor: "#272236",
    color: "#fff"
  }
});

const TableChart = props => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.darkChart}>
      <Table className={classes.darkChart} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.darkChart}>Name</TableCell>
            <TableCell align="right" className={classes.darkChart}>
              Country
            </TableCell>
            <TableCell align="right" className={classes.darkChart}>
              Searches
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!props.loading &&
            props.data.map(row => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.darkChart}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right" className={classes.darkChart}>
                  {row.country}
                </TableCell>
                <TableCell align="right" className={classes.darkChart}>
                  {row.searches}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableChart;
