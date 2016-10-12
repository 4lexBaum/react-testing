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
                      <Tile containerId="drillingTile" streamId="drill" icon="https://image.freepik.com/free-icon/pneumatic-road-drill_318-34720.png" value="100" unit="°C" title="Drilling Temperature" status="stopped"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="millingTile" streamId="mill" colors="#1e90ff,#00bfff,#60B044,#F6C600,#FF0000" icon="https://d30y9cdsu7xlg0.cloudfront.net/png/170362-200.png" value="100" unit="°C" title="Milling Temperature" status="stopped"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="drillingTile2" streamId="drill" borders="150,200,250,300" icon="https://image.freepik.com/free-icon/pneumatic-road-drill_318-34720.png" value="100" unit="°C" title="Drilling Temperature" status="stopped"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="millingTile2" streamId="mill" borders="150,200,250,300" colors="#1e90ff,#00bfff,#60B044,#F6C600,#FF0000" icon="https://d30y9cdsu7xlg0.cloudfront.net/png/170362-200.png" value="100" unit="°C" title="Milling Temperature" status="stopped"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="drillingTile3" streamId="drill" borders="150,200,250,300" colors="#1e90ff,#00bfff,#60B044,#F6C600,#FF0000" icon="https://image.freepik.com/free-icon/pneumatic-road-drill_318-34720.png" value="100" unit="°C" title="Drilling Temperature" status="stopped"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="millingTile3" streamId="mill" borders="150,200,250,300" colors="#1e90ff,#00bfff,#60B044,#F6C600,#FF0000" icon="https://d30y9cdsu7xlg0.cloudfront.net/png/170362-200.png" value="100" unit="°C" title="Milling Temperature" status="stopped"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="drillingTile4" streamId="drill" borders="150,200,250,300" colors="#1e90ff,#00bfff,#60B044,#F6C600,#FF0000" icon="https://image.freepik.com/free-icon/pneumatic-road-drill_318-34720.png" value="100" unit="°C" title="Drilling Temperature" status="stopped"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="millingTile4" streamId="mill" borders="150,200,250,300" colors="#1e90ff,#00bfff,#60B044,#F6C600,#FF0000" icon="https://d30y9cdsu7xlg0.cloudfront.net/png/170362-200.png" value="100" unit="°C" title="Milling Temperature" status="stopped"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="drillingTile5" streamId="drill" borders="150,200,250,300" colors="#1e90ff,#00bfff,#60B044,#F6C600,#FF0000" icon="https://image.freepik.com/free-icon/pneumatic-road-drill_318-34720.png" value="100" unit="°C" title="Drilling Temperature" status="stopped"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="millingTile5" streamId="mill" borders="150,200,250,300" colors="#1e90ff,#00bfff,#60B044,#F6C600,#FF0000" icon="https://d30y9cdsu7xlg0.cloudfront.net/png/170362-200.png" value="100" unit="°C" title="Milling Temperature" status="stopped"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="drillingTile6" streamId="drill" borders="150,200,250,300" colors="#1e90ff,#00bfff,#60B044,#F6C600,#FF0000" icon="https://image.freepik.com/free-icon/pneumatic-road-drill_318-34720.png" value="100" unit="°C" title="Drilling Temperature" status="stopped"></Tile>
                    </Col>
                    <Col md={3}>
                      <Tile containerId="millingTile6" streamId="mill" borders="150,200,250,300" colors="#1e90ff,#00bfff,#60B044,#F6C600,#FF0000" icon="https://d30y9cdsu7xlg0.cloudfront.net/png/170362-200.png" value="100" unit="°C" title="Milling Temperature" status="stopped"></Tile>
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
