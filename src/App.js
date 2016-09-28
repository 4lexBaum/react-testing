import React from 'react';

import { Button } from 'react-bootstrap';

import { Product } from './Components/Product.js';

import { Chart } from './Components/Chart.js';

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
                <Chart></Chart>
                <h1>Product Listing</h1>
                { this._products.map(function(p,i) { return <Product title={p.title} price={p.price} nr={i} /> }) }
              </div>
            )
        }

}
