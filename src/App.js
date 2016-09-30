import React from 'react';

import { Product } from './Components/Product.js';

import { ChartContainer } from './Components/ChartContainer.js';

import { Header } from './Components/Header.js';


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
              <div style={{padding: '20px'}}>
                <Header></Header>
                <ChartContainer containerId="test-chart"></ChartContainer>
                <ChartContainer containerId="gauge-chart"></ChartContainer>
                <h1>Product Listing</h1>
                { this._products.map(function(p,i) { return <Product title={p.title} price={p.price} nr={i} /> }) }
              </div>
            )
        }

}
