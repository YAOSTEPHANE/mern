import Layout from '../../components/Layout';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import {login} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';








/** 
* @author
* @function Signin
**/



const Signin = (props) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const auth = useSelector(state => state.auth);

const dispatch = useDispatch();



    const userLogin = (e) =>{

        e.preventDefault();
        const user = {
            email, password
        }
        dispatch(login(user));
    }
    if(auth.authenticate){
        return <Redirect to={`/`} />
    }

    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Email"
                                placeholder="Adresse email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Mot de passe"
                                placeholder="Mot de passe"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Button variant="primary" type="submit">
                                Connecter
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout>
    );
};

export default Signin;
