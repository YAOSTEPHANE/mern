import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import { getAddress, getCartItems } from '../../actions';
import { Anchor, MaterialButton, MaterialInput } from "../../components/MaterialUI";
import AddressForm from './AddressForm';
import PriceDetails from '../../components/PriceDetails';
import CartPage from "../CartPage";
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
};

const Address = ({
  adr,
  selectAddress,
  enableAddressEditForm,
  confirmDeliveryAddress,
  onAddressSubmit
}) => {
  return (
    <div className='flexRow addressContainer'>
      <div>
        <input name="address" onClick={() => selectAddress(adr)} type="radio" />
      </div>
      <div className="flexRow sb addressinfo">
        {!adr.edit ? (
          <div style={{ width: "100%" }}>
            <div className='addressDetail'>
              <div>
                <span className='addressName'>{adr.name}</span>
                <span className='addressType'>{adr.addressType}</span>
                <span className='addressMobileNumber'>{adr.mobileNumber}</span>
              </div>
              {adr.selected && (
                <Anchor
                  name="MODIFIER"
                  onClick={() => enableAddressEditForm(adr)}
                  style={{
                    fontWeight: '500', color: "#2874f0",
                  }}
                />
              )}
            </div>
            <div className='fullAddress'>
              {adr.address} <br /> {`${adr.state}`}

            </div>
            {adr.selected && (
              <MaterialButton
                title="LIVRER ICI"
                onClick={() => confirmDeliveryAddress(adr)}
                style={{ width: '200px', margin: '10px 0' }}
              />
            )}
          </div>
        ) : (
          <AddressForm
            withoutLayout={true}
            onSubmitForm={onAddressSubmit}
            initialData={adr}
            onCancel={() => { }}
          />
        )}
      </div>
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
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onAddressSubmit = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  }
  const selectAddress = (addr) => {
    //console.log(addr);
    const updatedAddress = address.map(adr =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  };

  const confirmDeliveryAddress = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };

  const enableAddressEditForm = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };

  const userOrderConfirmation = () => {
    setOrderConfirmation(true);
    setOrderSummary(false);
    setPaymentOption(true);
  };

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
    auth.authenticate && dispatch(getCartItems());
  }, [auth.authenticate, dispatch]);


  useEffect(() => {
    const address = user.address.map(adr => ({
      ...adr,
      selected: false,
      edit: false
    }));
    setAddress(address);
    //user.address.length === 0 && setNewAddress(true);
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
              auth.authenticate ? (
                <div className="loggedInId">
                  <span style={{ fontWeight: 500 }}>{auth.user.fullName}</span>
                  <span style={{ margin: '0 5px' }}>{auth.user.email}</span>
                </div>
              ) : (
                <div>
                  <MaterialInput label="Email" />
                </div>
              )
            }
          />

          <CheckoutStep
            stepNumber={'2'}
            title={'ADDRESSE DE LIVRAISON'}
            active={!confirmAddress && auth.authenticate}
            body={
              <>
                {confirmAddress ? (
                  <div className="stepCompleted">{`${selectedAddress.name}  ${selectedAddress.address} - ${selectedAddress.mobileNumber}`}</div>
                ) : (
                  address.map((adr) => (
                    <Address
                      selectAddress={selectAddress}
                      enableAddressEditForm={enableAddressEditForm}
                      confirmDeliveryAddress={confirmDeliveryAddress}
                      onAddressSubmit={onAddressSubmit}
                      adr={adr}
                    />
                  ))
                )}
              </>
            }
          />
          {/* AddressForm */}
          {
            confirmAddress ? null : newAddress ? (
              <AddressForm onSubmitForm={onAddressSubmit} onCancel={() => { }} />
            ) : (
              <CheckoutStep
                stepNumber={'+'}
                title={'AJOUTER NOUVELLE ADDRESSE'}
                active={false}
                onClick={() => setNewAddress(true)}
              />
            )}

          <CheckoutStep
            stepNumber={'3'}
            title={'RESUME DE LA COMMANDE'}
            active={orderSummary}
            body={
              orderSummary ? (
                <CartPage onlyCartItems={true} />
              ) : orderConfirmation ? (
                <div className="stepCompleted">{Object.keys(cart.cartItems).length} articles</div>) : null
            }
          />
          {
            orderSummary && (<Card style={{
              margin: "10px 0",
            }}>
              <div className='flexRow sb'
                style={{
                  padding: '20px',
                  alignItems: "center",

                }}>
                <p style={{
                  fontSize: "12px",

                }}>La confirmation email sera envoyé a{" "} <strong>{auth.user.email}</strong></p>
                <MaterialButton
                  title="CONTINUER"
                  onClick={userOrderConfirmation}
                  style={{
                    width: "200px",

                  }} wi
                />
              </div>
            </Card>
            )
          }

          <CheckoutStep
            stepNumber={'4'}
            title={'OPTIONS DE PAIEMENT'}
            active={paymentOption}
            body={
              paymentOption && (
                <div className="stepCompleted">
                  <div className="flexRow" style={{
                    alignItems: "center",
                    padding: "20px",
                  }}>
                    <input type="radio" name="Options de paiement" value="cod" />
                    <div>Payer à la livraison</div>
                  </div>
                  <MaterialButton 
                  title="CONFIRMER LA COMMANDE" style={{ width: "200px", margin: "0 0 20px 20px"}}
                   />
                </div>
              )
            }
          />

        </div>
        <PriceDetails
          totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
            return qty + cart.cartItems[key].qty;
          }, 0)}
          totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, keys) => {
            const { price, qty } = cart.cartItems[keys];
            return totalPrice + price * qty;
          }, 0)}
        />
      </div>
    </Layout>
  );

}

export default CheckoutPage;