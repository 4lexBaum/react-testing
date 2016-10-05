import React from 'react';

import { Product } from './Components/Product.js';

import { ChartContainer } from './Components/ChartContainer.js';

import { Header } from './Components/Header.js';

import { Tile } from './Components/Tile.js';

import { Grid } from 'react-bootstrap';

import { Row } from 'react-bootstrap';

import { Col } from 'react-bootstrap';

export class App extends React.Component {

        constructor(props) {
            super(props);
            this._products = [
              { title: 'Basketball', price: '10€'},
              { price: '8€'}
            ];
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
                    <Col md={3}>
                      <Tile containerId="tile1"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="tile2"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="tile3"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="tile4"></Tile>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <Tile containerId="tile5"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="tile6"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="tile7"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="tile8"></Tile>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <Tile containerId="tile9"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="tile10"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="tile11"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="tile12"></Tile>
                    </Col>
                  </Row>
              </Grid>
            )
        }
}
/*
<!--
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
-->

*/
