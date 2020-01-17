/* boiler plate */
import React, { useState } from "react";

/* victory */
import { VictoryPie } from "victory";

export const extractData = (array, loading) => {
  if (!loading) {
    let arr = {};
    array.forEach(row => {
      if (!arr[row.country]) {
        arr[row.country] = row.searches;
      } else {
        arr[row.country] = arr[row.country] + row.searches;
      }
    });
    let objArr = [];
    for (const data in arr) {
      objArr.push({ x: data, y: arr[data], label: data });
    }
    console.log(objArr);
    return objArr;
  }
};

const TableChart = props => {
  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <VictoryPie data={extractData(props.data, props.loading)} />
    </div>
  );
};

export default TableChart;
