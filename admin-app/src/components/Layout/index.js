import React from 'react';
import Header from './../Header/index';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';


/** 
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <>
            <Header />
            {
                props.sidebar ?
                    <Container fluid>
                        <Row>
                            <Col md={2} className="sidebar">
                                <ul>
                                    <li><NavLink exact to={`/`}>Accueil</NavLink></li>
                                    <li><NavLink to={`/page`}>Pages</NavLink></li>
                                    <li><NavLink to={`/category`}>Categories</NavLink></li>
                                    <li><NavLink to={`/products`}>Produits</NavLink></li>
                                    <li><NavLink to={`/orders`}>Commande</NavLink></li>
                                </ul>
                            </Col>
                            <Col md={10} style={{ marginLeft: 'auto', paddingTop:'60px'}}>
                                {props.children}
                            </Col>
                        </Row>
                    </Container>
                    :
                    props.children
            
        
        }


        </>
    )

}

export default Layout;
