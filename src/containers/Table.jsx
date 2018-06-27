import React, { Component } from 'react';
import { formatCurrency } from '../util';

const ResultTable = props => {
  const headers = ['Contributions', 'Distributions', 'Ordinary Income',
    'Realized Gain/Loss', 'Unrealized MTM', 'FX Unrealized MTM', 'Ending Equity Balance']
  return (
    <div>
      <h5> {props.data.name} </h5>
      <table className="table table-sm table-hover" style={{ "marginTop": "30px" }}>
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            headers.map(header => {
              return (
                <tr key={header}>
                  <th scope="row">{header}</th>
                  {
                    props.data[header] ? <td scope="col">{formatCurrency(props.data[header])}</td>
                      : <td scope="col">N/A</td>
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table >
    </div>
  );
}

export default ResultTable;