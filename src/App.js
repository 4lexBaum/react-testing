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
                     <a href="#">React-Bootstrap</a>
                   </Navbar.Brand>
                 </Navbar.Header>
                 <Nav>
                   <NavItem eventKey={1} href="#">Link</NavItem>
                   <NavItem eventKey={2} href="#">Link</NavItem>
                   <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                     <MenuItem eventKey={3.1}>Action</MenuItem>
                     <MenuItem eventKey={3.2}>Another action</MenuItem>
                     <MenuItem eventKey={3.3}>Something else here</MenuItem>
                     <MenuItem divider />
                     <MenuItem eventKey={3.3}>Separated link</MenuItem>
                   </NavDropdown>
                 </Nav>
                </Navbar>
                <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                  <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
                  <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
                  <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
                </Nav>
                <h1>Product Listing</h1>
                { this._products.map(function(p,i) { return <Product title={p.title} price={p.price} nr={i} /> }) }
                <Button bsStyle="primary">Primary</Button>
              </div>
            )
        }

}
