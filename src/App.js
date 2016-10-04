import React from 'react';

import { Product } from './Components/Product.js';

import { ChartContainer } from './Components/ChartContainer.js';

import { Header } from './Components/Header.js';

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

        // const gridInstance = (
        //   <Grid>
        //     <Row className="show-grid">
        //       <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
        //       <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        //     </Row>
        //
        //     <Row className="show-grid">
        //       <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        //       <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        //       <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
        //     </Row>
        //
        //     <Row className="show-grid">
        //       <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
        //     </Row>
        //
        //     <Row className="show-grid">
        //       <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
        //       <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
        //     </Row>
        //   </Grid>
        // );


// ReactDOM.render(, mountNode);
// <div style={{padding: '20px'}}>
// </div>

        render() {
            return (
              <Grid fluid='true'>
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
                    <Col md={ 6}>
                      <ChartContainer containerId="pie-chart"></ChartContainer>
                    </Col>
                  </Row>

              </Grid>
            )
        }

}
