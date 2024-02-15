import React, { useEffect, useState } from 'react';
import './style.css';
import flipkartLogo from '../../images/logo/flipkart.png';
import goldenStar from '../../images/logo/golden-star.png';
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();


  const userLogin = () => {
    dispatch(login({ email, password }));
  }

  useEffect(() => {
    //if(auth.authenticate){
    //}
  }, [auth.authenticate]);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a className="fullName">
            {auth.user.fullName}
          </a>
        }
        menus={[
          { label: 'Mon profil', href: '', icon: null },
          { label: 'Zone Supercoin', href: '', icon: null },
          { label: 'Batirem Plus Zone', href: '', icon: null },
          { label: 'Commandes', href: '', icon: null },
          { label: 'Liste de souhaits', href: '', icon: null },
          { label: 'Coupons', href: '', icon: null },
          { label: 'Récompenses', href: '', icon: null },
          { label: 'Notifications', href: '', icon: null },
          { label: 'Cartes-cadeaux', href: '', icon: null },
          { label: 'Deconnecter-vous', href: '', icon: null },
        ]}
      />
    );
  }

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a className="loginButton" onClick={() => setLoginModal(true)}>
            Se Connecter
          </a>
        }
        menus={[
          { label: 'Mon profil', href: '', icon: null },
          { label: 'Batirem Plus Zone', href: '', icon: null },
          { label: 'Commandes', href: '', icon: null },
          { label: 'Liste de souhaits', href: '', icon: null },
          { label: 'Récompenses', href: '', icon: null },
          { label: 'Cartes-cadeaux', href: '', icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>Nouveau client?</span>
            <a style={{ color: '#2874f0' }}>S’enregistrer</a>
          </div>
        }
      />
    );
  }


  return (
    <div className="header">
      <Modal
        visible={loginModal}
        onClose={() => setLoginModal(false)}
      >
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Se Connecter</h2>
              <p>Accédez à vos commandes, à votre liste de souhaits et à vos recommandations</p>
            </div>
            <div className="rightspace">


              <MaterialInput
                type="text"
                label="Entrer Email/Numero Telephone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <MaterialInput
                type="password"
                label="Mot de Passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              //rightElement={<a href="#">Oublié ?</a>}
              />
              <MaterialButton
                title="Se Connecter"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{
                  margin: '40px 0 20px 0'
                }}
                onClick={userLogin}
              />

              <p>Ou</p>

              <MaterialButton
                title="Demande OTP"
                bgColor="#ffffff"
                textColor="#2874f0"
                style={{
                  margin: '20px 0'
                }}
              />



            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        {/* logo start */}
        <div className="logo">
          <a href="">
            <img src={flipkartLogo} className="logoimage" alt="" />
          </a>
          <a style={{ marginTop: '-10px' }}>
            <span className="exploreText">Explore</span>
            <span className="plusText">Plus</span>
            <img src={goldenStar} className="goldenStar" alt="" />
          </a>
        </div>
        {/* logo end */}

        {/* search component start here */}
        <div style={{
          padding: '0 10px'
        }}>
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={'Rechercher des produits, des marques et plus encore'}
            />
            <div className="searchIconContainer">
              <IoIosSearch style={{
                color: '#2874f0'
              }} />
            </div>

          </div>
        </div>
        {/* search component end here */}
        {/* right menu start */}
        <div className="rightMenu">
          {
            auth.authenticate ?
              renderLoggedInMenu() : renderNonLoggedInMenu()
          }

          <DropdownMenu
            menu={
              <a className="more">
                <span>Plus</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: 'Préférence de notification', href: '', icon: null },
              { label: 'Vendre sur Batirem', href: '', icon: null },
              { label: 'Service client 24h/24 et 7j/7', href: '', icon: null },
              { label: 'Annoncer', href: '', icon: null },
              { label: 'Telecharger App', href: '', icon: null }
            ]}
          />
          <div>
            <a className="cart">
              <IoIosCart />
              <span style={{ margin: '0 10px' }}>Panier</span>
            </a>
          </div>
        </div>
        {/* right menu end */}

      </div>
    </div>
  )

}

export default Header;