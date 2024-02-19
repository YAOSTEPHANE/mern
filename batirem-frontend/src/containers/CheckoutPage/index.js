import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { getAddress } from '../../actions';
import { MaterialButton } from '../../components/MaterialUI';
import AddressForm from './AddressForm';
import './style.css';

/**
* @author
* @function CheckoutPage
**/



const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div className={`checkoutHeader ${props.active && 'active'}`}>
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
}


export const CheckoutPage = (props) => {

  const user = useSelector(state => state.user);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onAddressSubmit = () => {

  }

  useEffect(() => {
    dispatch(getAddress());
  }, []);



  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: 'flex-start' }}>
        <div className="checkoutContainer">
          <CheckoutStep
            stepNumber={'1'}
            title={'CONNECTER'}
            active={auth.authenticate}
            body={
              <div className="loggedInId">
                <span style={{ fontWeight: 500 }}>{auth.user.fullName}</span>
                <span style={{ margin: '0 5px' }}>{auth.user.email}</span>
              </div>}
          />
          <CheckoutStep
            stepNumber={'2'}
            title={'ADDRESSE DE LIVRAISON'}
            active={true}
            body={
              <>
                {
                  user.address.map(adr => {
                    <div className='flexRow addressContainer'>
                      <div>
                        <input name="address" type="radio" />
                      </div>
                      <div className="flexRow sb addressinfo">
                        <div>
                          <div>
                            <span>{adr.name}</span>
                            <span>{adr.addressType}</span>
                            <span>{adr.mobileNumber}</span>
                          </div>
                          <div>
                            <span>{adr.address}</span>
                          </div>
                          <MaterialButton
                            title="LIVRAISON ICI"
                            style={{ width: '250px' }}
                          />
                        </div>
                        <div>Modifier</div>
                      </div>
                    </div>
                })
                }
              </>
            }
          />
          {/* AddressForm */}
          <AddressForm onSubmitForm={onAddressSubmit}
          onCancel={() => { }}
           />
          <CheckoutStep
            stepNumber={'3'}
            title={'RESUME DE LA COMMANDE'}
          />
          <CheckoutStep
            stepNumber={'4'}
            title={'OPTIONS DE PAIEMENT'}
          />
        </div>
      </div>
    </Layout>
  )

}

export default CheckoutPage;