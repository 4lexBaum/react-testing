import React from 'react';

import { ChartContainer } from '../Components/ChartContainer.js';

var analysisBarChart = require('../Charts/analysisBarChart.js');

export class QualityData extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount(){
    analysisBarChart.createChart();
  }

  render() {
      return (
        <div className="tile">
          <p>Customer Quality</p>
          <ChartContainer containerId="customer-quality-chart" bindTo="customer-quality-chart" analysisName="Customer Quality" socketName="QualityCustomer"></ChartContainer>
        </div>
      )
  }
}
