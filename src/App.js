import React from 'react';

import { Button } from 'react-bootstrap';

import { Nav } from 'react-bootstrap';

import { Navbar } from 'react-bootstrap';

import { NavItem } from 'react-bootstrap';

import { NavDropdown } from 'react-bootstrap';

import { MenuItem } from 'react-bootstrap';

import {Product} from './Components/Product.js';

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
                <Navbar>
                 <Navbar.Header>
                   <Navbar.Brand>
                     <a href="#">Production Analyzing</a>
                   </Navbar.Brand>
                 </Navbar.Header>
                 <Nav>
                  <NavItem eventKey={1} href="#">Project Intro</NavItem>
                   <NavItem eventKey={2} href="#">Machine</NavItem>
                   <NavItem eventKey={3} href="#">Statistics</NavItem>
                   <NavDropdown eventKey={4} title="More" id="basic-nav-dropdown">
                     <MenuItem eventKey={4.1}>Team</MenuItem>
                     <MenuItem eventKey={4.2}>Technologies</MenuItem>
                     <MenuItem divider />
                     <MenuItem eventKey={3.3} href="https://github.com/4lexBaum/projekt-5s-dhbw">Github link</MenuItem>
                   </NavDropdown>
                 </Nav>
                </Navbar>
                <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                  <NavItem eventKey="1" href="/home">Live Data</NavItem>
                  <NavItem eventKey="2" title="Item">Analyses</NavItem>
                  <NavItem eventKey="3" disabled>Functions</NavItem>
                </Nav>
                <h1>Product Listing</h1>
                { this._products.map(function(p,i) { return <Product title={p.title} price={p.price} nr={i} /> }) }
                <Button bsStyle="primary">Primary</Button>
                <Button bsStyle="success">Success</Button>
                <Button bsStyle="info">Info</Button>
                <Button bsStyle="warning">Warning</Button>
                <Button bsStyle="danger">Danger</Button>
                <Button bsStyle="link">Link</Button>
              </div>
            )
        }

}
