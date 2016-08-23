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
  constructor (props) {
    super(props)
    this.state = {
      toggled: false
    }
  }

  render () {
    let menuclasses = 'navbar-collapse collapse'
    if (this.state.toggled) {
      menuclasses += ' in'
    }
    return (<Navbar fixedTop>
      <Navbar.Header>
        <Link to='/'><Navbar.Brand>your site</Navbar.Brand></Link>
        <Navbar.Toggle onClick={() => this.setState({toggled: !this.state.toggled})} />
      </Navbar.Header>
      <div className={menuclasses} onClick={() => this.setState({toggled: false})}>
        <Nav pullRight>
          <A to='/foo'><NavItem>Foo</NavItem></A>
          <A to='/bar'><NavItem>Bar</NavItem></A>
        </Nav>
      </div>
    </Navbar>)
  }
}
