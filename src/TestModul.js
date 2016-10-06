import React from 'react';

import { Product } from './Components/Product.js';

import { ChartContainer } from './Components/ChartContainer.js';

import { Header } from './Components/Header.js';

import { Grid } from 'react-bootstrap';

import { Row } from 'react-bootstrap';

import { Col } from 'react-bootstrap';

var testChart = require('./testChart.js');
var gaugeChart = require('./gaugeChart.js');
var barChart = require('./barChart.js');
var pieChart = require('./pieChart.js');

export class TestModul extends React.Component {

        constructor(props) {
            super(props);
        }

        componentDidMount(){
          testChart.createChart();
          gaugeChart.createChart();
          barChart.createChart();
          pieChart.createChart();
        }

        componentWillUnmount(){
          socket.removeAllListeners();
        }

        render() {
            return (
              <Grid>
              <Row className="show-grid">
                <Col md={16}>
                  <Header></Header>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <ChartContainer containerId="test-chart"></ChartContainer>
                </Col>
                <Col md={6} id="gauge">
                  <ChartContainer containerId="gauge-chart"></ChartContainer>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <ChartContainer containerId="bar-chart"></ChartContainer>
                </Col>
                <Col md={6}>
                  <ChartContainer containerId="pie-chart"></ChartContainer>
                </Col>
              </Row>
              </Grid>
            )
        }
}
