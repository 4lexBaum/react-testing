import React from 'react';

import { ChartContainer } from '../Components/ChartContainer.js';

var customerQualityChart = require('../Charts/customerQualityChart.js');

export class QualityData extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount(){
    customerQualityChart.createChart();
  }

  render() {
      return (
        <div>
          <div>
            <p>Customer Quality</p>
            <ChartContainer containerId="customer-quality-chart"></ChartContainer>
          </div>
        </div>
      )
  }
}
