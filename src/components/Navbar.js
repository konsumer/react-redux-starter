import React from 'react'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'
import {Nav, Navbar, NavItem} from 'react-bootstrap'

export const A = ({children, to}) => (
  <LinkContainer to={to}>
    {children}
  </LinkContainer>
)

export default class NavbarComponent extends React.Component {
  render () {
    return (<Navbar fixedTop>
      <Navbar.Header>
        <Link to='/'><Navbar.Brand>LOGO</Navbar.Brand></Link>
      </Navbar.Header>
      <div className='pull-right' style={{lineHeight: '50px'}}>
        1-800-000-0000
      </div>
    </Navbar>)
  }
}
