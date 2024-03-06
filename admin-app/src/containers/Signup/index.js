import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';



/** 
* @author
* @function Signup
**/



const Signup = (props) => {
   
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!user.loading) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        }
    }, [user.loading]);
    

    const userSignup = (e) => {
        e.preventDefault();
        const user = {
            firstName, lastName, email, password
        }
    
    dispatch(signup(user));
}

    if (auth.authenticate) {
        return <Redirect to={`/`} />;
    }
    if(user.loading){
    return <p>Loading...!</p>;
    }

    return (
        <Layout>
            <Container>
            {user.message}
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userSignup}>

                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="Prénoms"
                                        placeholder="Prénoms"
                                        value={firstName}
                                        type="text"
                                        onChange={(e) =>  setFirstName(e.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Nom"
                                        placeholder="Nom de famille"
                                        value={lastName}
                                        type="text"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Form.Group>
                                <Input
                                    label="Email"
                                    placeholder="Adresse email"
                                    value={email}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Input
                                label="Mot de passe"
                                placeholder="Mot de passe"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                S'incrire
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout>
    );
};

export default Signup;
