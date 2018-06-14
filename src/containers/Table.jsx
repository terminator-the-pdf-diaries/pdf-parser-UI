import React, { Component } from 'react';
import { formatCurrency } from '../util';

const ResultTable = props => {

  return (
    <table class="table table-sm">
      <thead>
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(props.data).map(header => {
            return (
              <tr key={header}>
                <th scope="row">{header}</th>
                <td scope="col">{formatCurrency(props.data[header])}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table >
  );
}

export default ResultTable;