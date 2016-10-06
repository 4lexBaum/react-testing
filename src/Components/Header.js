import React from 'react';

import { Nav } from 'react-bootstrap';

import { Navbar } from 'react-bootstrap';

import { NavItem } from 'react-bootstrap';

import { NavDropdown } from 'react-bootstrap';

import { MenuItem } from 'react-bootstrap';

export class Header extends React.Component{

  constructor(props){
    super(props);
  }

  /*handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }*/

  render(){
    return(
      <Navbar>
       <Navbar.Header>
         <Navbar.Brand>
           <a href="/">Production Analyzing</a>
         </Navbar.Brand>
       </Navbar.Header>
         <Nav pullLeft stacked>
          <NavItem eventKey={1} href="/test">Project Intro</NavItem>
           <NavItem eventKey={2} href="#">Machine</NavItem>
           <NavItem eventKey={3} href="#">Statistics</NavItem>
         </Nav>
         <Nav pullRight>
           <NavDropdown eventKey={4} title="More" id="basic-nav-dropdown">
             <MenuItem eventKey={4.1}>Team</MenuItem>
             <MenuItem eventKey={4.2}>Technologies</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey={4.3} href="https://github.com/4lexBaum/projekt-5s-dhbw">GitHub</MenuItem>
           </NavDropdown>
         </Nav>
      </Navbar>
    )
  }

}
