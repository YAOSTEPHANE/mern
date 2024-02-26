import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../actions";
import { MaterialButton, MaterialInput } from "../../components/MaterialUI";

/**
 * @author
 * @function AddressForm
 **/


const AddressForm = (props) => {
        const { initialData } = props;
        const [name, setName] = useState(initialData ? initialData.name : "");
        const [mobileNumber, setMobileNumber] = useState(
          initialData ? initialData.mobileNumber : ""
        );
        const [locality, setLocality] = useState(
          initialData ? initialData.locality : ""
        );
        const [address, setAddress] = useState(
          initialData ? initialData.address : ""
        );
        const [cityDistrictTown, setCityDistrictTown] = useState(
          initialData ? initialData.cityDistrictTown : ""
        );
        const [state, setState] = useState(initialData ? initialData.state : "");
        const [landmark, setLandmark] = useState(
          initialData ? initialData.landmark : ""
        );
        const [alternatePhone, setAlternatePhone] = useState(
          initialData ? initialData.alternatePhone : ""
        );
        const [addressType, setAddressType] = useState(
          initialData ? initialData.addressType : ""
        );
        const dispatch = useDispatch();
        const user = useSelector((state) => state.user);
        const [submitFlag, setSubmitFlag] = useState(false);
        const [id, setId] = useState(initialData ? initialData._id : "");
      
        const inputContainer = {
          width: "100%",
          marginRight: 10,
        };

   const onAddressSubmit = (e) => {
    const payload = {
      address: {
        name,
        mobileNumber,
        locality,
        address,
        cityDistrictTown,
        state,
        landmark,
        alternatePhone,
        addressType,
      },
    };
    console.log(payload);
    if (id) {
      payload.address._id = id;
    }
    dispatch(addAddress(payload));
    setSubmitFlag(true);
  };

  useEffect(() => {
    console.log("addressCount", user.address);
    if (submitFlag) {
      console.log("où sommes-nous", user);
      let _address = {};
      if (id) {
        _address = {
          _id: id,
          name,
          mobileNumber,
          locality,
          address,
          cityDistrictTown,
          state,
          landmark,
          alternatePhone,
          addressType,
        };
      } else {
        _address = user.address.slice(user.address.length - 1)[0];
      }

      props.onSubmitForm(_address);
    }
  }, [user.address]);

    const renderAddressForm = () => {
        return (
            <>
                <div className="flexRow">
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Nom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Numéro de téléphone à 10 chiffres"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flexRow">
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Commune"
                            value={locality}
                            onChange={(e) => setLocality(e.target.value)}
                        />
                    </div>
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Quartier"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flexRow">
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Sous-quartier"
                            value={cityDistrictTown}
                            onChange={(e) => setCityDistrictTown(e.target.value)}
                        />
                    </div>
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Pays"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flexRow">
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Point de repère"
                            value={landmark}
                            onChange={(e) => setLandmark(e.target.value)}
                        />
                    </div>
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Numéro de téléphone alternatif (Optionnel)"
                            value={alternatePhone}
                            onChange={(e) => setAlternatePhone(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label>Type d'adresse</label>
                    <div className="flexRow">
                        <div>
                            <input
                                type="radio"
                                onClick={() => setAddressType('home')}
                                name='addressType'
                                value='home'
                            />
                            <span>Domicile</span>
                            <input
                                type="radio"
                                onClick={() => setAddressType('work')}
                                name='addressType'
                                value='work'
                            />
                            <span>Travail</span>
                        </div>
                    </div>
                </div>
                <div className="flexRow">
                    <MaterialButton
                        title="Enregistrer et livrer ici"
                        onClick={onAddressSubmit}
                        style={{
                            width: '250px',
                            margin: '20px 0'
                        }}
                    />
                </div>
            </>
        );
    };

    if (props.withoutLayout) {
        return <div>{renderAddressForm()}</div>;
    }

    return (

        <div className="checkoutStep" style={{ background: '#f5faff' }}>
            <div className={`checkoutHeader`}>
                <div>
                    <span className="stepNumber">+</span>
                    <span className="stepTitle">AJOUTER NOUVELLE ADDRESSE</span>
                </div>
            </div>
            <div style={{
                padding: '0 60px',
                paddingBottom: '20px',
                boxSizing: 'border-box'
            }}>
                {renderAddressForm()}
            </div>
        </div>

    );
}

export default AddressForm;