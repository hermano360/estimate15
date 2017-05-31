import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {Navbar,Icon,NavItem} from 'react-materialize'






class Nav extends Component {


  render() {
    return (
      <Navbar brand='Esti-mate' right>
        <NavItem>Main</NavItem>
        <NavItem>Contact</NavItem>
      </Navbar>
      )
  }
}

export default Nav

