import React from 'react';
import Layout from '../../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import {NavLink} from 'react-router-dom';


/** 
* @author
* @function Home
**/

const Home = (props) => {
    
    return (
        <Layout sidebar>
           
           
            {/*<Container style={{margin: '5rem', background:'#fff'}} className='text-center'>
                <h1>Bienvenue sur le Tableau de Bord</h1>
                <p>C’est un fait établi depuis longtemps qu’un lecteur sera distrait par le contenu lisible d’une page lorsqu’il regardera sa mise en page. L’intérêt de l’utilisation de Lorem Ipsum est qu’il a une distribution plus ou moins normale des lettres, par opposition à l’utilisation de « contenu ici, contenu ici », ce qui le rend lisible en anglais. De nombreux progiciels de publication assistée par ordinateur et éditeurs de pages Web utilisent maintenant Lorem Ipsum comme texte de modèle par défaut, et une recherche de « lorem ipsum » permettra de découvrir de nombreux sites Web qui n’en sont encore qu’à leurs balbutiements. Diverses versions ont évolué au fil des ans, parfois par accident, parfois à dessein (humour injecté et autres).</p>
    </Container>*/}
        </Layout>
    );
};

export default Home;
