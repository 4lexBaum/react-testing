import React from 'react';

var analysisBarChart = require('../Charts/analysisBarChart.js');

export class ChartContainer extends React.Component {

        constructor(props) {
            super(props);
        }

        componentDidMount(){
          analysisBarChart.createChart(this.props.analysisName, this.props.socketName, this.props.bindTo);
        }

        handleClick(){
          var container = this.props.containerId;
          alert("bin geklickt worden: " + container);
        }

        render() {
          return (
            <div onClick={this.handleClick.bind(this)} id={this.props.containerId} bindTo={this.props.bindTo} analysisName={this.props.analysisName} socketName={this.props.socketName}></div>
          )
        }
}
