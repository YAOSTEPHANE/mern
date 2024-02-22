import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { getAddress } from '../../actions';
import { MaterialButton, MaterialInput } from "../../components/MaterialUI";
import AddressForm from './AddressForm';
import './style.css';

/**
* @author
* @function CheckoutPage
**/


const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div onClick={props.onClick} className={`checkoutHeader ${props.active && 'active'}`}>
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
}


const CheckoutPage = (props) => {

  const user = useSelector(state => state.user);
  const auth = useSelector(state => state.auth);
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const dispatch = useDispatch();

  const onAddressSubmit = () => {

  }
  const selectAddress = (addr) => {
    //console.log(addr);
    const updatedAddress = address.map(adr => adr._id === addr._id ? {
      ...adr, selected: true
    } : { ...adr, selected: false });
    setAddress(updatedAddress);
  }

  const confirmDeliveryAddress = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
  }

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
  }, [auth.authenticate, dispatch]);


  useEffect(() => {
    const address = user.address.map(adr => ({ ...adr, selected: false, edit: false }));
    setAddress(address);
  }, [user.address]);

  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: 'flex-start' }}>
        <div className="checkoutContainer">
          {/* check if user logged in or not */}
          <CheckoutStep
            stepNumber={'1'}
            title={'CONNECTER'}
            active={!auth.authenticate}
            body={
              auth.authenticate ?
                <div className="loggedInId">
                  <span style={{ fontWeight: 500 }}>{auth.user.fullName}</span>
                  <span style={{ margin: '0 5px' }}>{auth.user.email}</span>
                </div> :
                <div>
                  <MaterialInput
                    label="Email"
                  />
                </div>
            }
          />

          <CheckoutStep
            stepNumber={'2'}
            title={'ADDRESSE DE LIVRAISON'}
            active={!confirmAddress}
            body={
              <>
                {
                  confirmAddress ? JSON.stringify(selectedAddress)
                  : address.map(adr =>
                    <div className='flexRow addressContainer'>
                      <div>
                        <input name="address" onClick={() => selectAddress(adr)} type="radio" />
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
                          {
                            adr.selected && <MaterialButton
                              title="LIVRER ICI"
                              onClick={() => confirmDeliveryAddress(adr)}
                              style={{ width: '250px' }}
                            />
                          }

                        </div>
                        {adr.selected && <div>Modifier</div>}
                      </div>
                    </div>
                  )
                }
              </>
            }
          />
          {/* AddressForm */}
          {
            confirmAddress ? null :
            newAddress ? 
              <AddressForm onSubmitForm={onAddressSubmit}
                onCancel={() => { }}
              /> : <CheckoutStep
                stepNumber={'+'}
                title={'AJOUTER NOUVELLE ADDRESSE'}
                active={false}
                onClick={() => setNewAddress(true)}
              />
          }

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