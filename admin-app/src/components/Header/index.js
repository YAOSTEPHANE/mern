import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions';


/** 
* @author
* @function Header
**/

const Header = (props) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const logout = () =>{
dispatch(signout());
  }

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        
        <li className="nav-item">
          <span className="nav-link" onClick={logout} >Déconnecter</span>
        </li>
      </Nav>
    )
  }

  const renderNonLoggedInLinks = () =>{
    return (
      <Nav>
        {/*<Nav.Link href="#deets">Connecter</Nav.Link>*/}

        <li className="nav-item">
          <NavLink to='/signin' className="nav-link">Connecter</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/signup' className="nav-link" >S'inscrire</NavLink>
        </li>
      </Nav>
      );
  }

  return (

    <Navbar collapseOnSelect fixed="top" expand="lg" className="bg-danger" style={{ zIndex: 1 }}>
      <Container fluid>
        {/*<Navbar.Brand href="#home">Tableau de Bord</Navbar.Brand>*/}
        <Link to='/' className="navbar-brand">Tableau de Bord</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
                </NavDropdown> */}
          </Nav>
          {auth.authenticate ? renderLoggedInLinks():renderNonLoggedInLinks()}

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )

}

export default Header;
