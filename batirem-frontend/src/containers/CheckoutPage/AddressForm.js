import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../actions";
import { MaterialButton, MaterialInput } from "../../components/MaterialUI";

/**
 * @author
 * @function AddressForm
 **/


const AddressForm = (props) => {

    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [locality, setLocality] = useState('');
    const [address, setAddress] = useState('');
    const [cityDistrictTown, setCityDistrictTown] = useState('');
    const [state, setState] = useState('');
    const [landmark, setLandmark] = useState('');
    const [alternatePhone, setAlternatePhone] = useState('');
    const [addressType, setAddressType] = useState('');
    const dispatch = useDispatch();

    const inputContainer = {
        width: "100%",
        marginRight: 10
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
            }
        }
        console.log(payload);
        dispatch(addAddress(payload));
    }


    return (
        <div className="checkoutStep" style={{ background: '#f5faff' }}>
            <div className={`checkoutHeader`}>
                <div>
                    <span className="stepNumber">+</span>
                    <span className="stepTitle">Ajouter une nouvelle adresse</span>
                </div>
            </div>
            <div style={{
                padding: '0 60px',
                paddingBottom: '20px',
                boxSizing: 'border-box'
            }}>
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
                            label="10-digit Numero de telephone"
                            value={mobileNumber}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flexRow">
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Commune"
                            value={locality}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Quartier"
                            value={address}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flexRow">
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Sous-quartier"
                            value={cityDistrictTown}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Pays"
                            value={state}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flexRow">
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Point de repere"
                            value={landmark}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div style={inputContainer}>
                        <MaterialInput
                            label="Numero de telephone alternatif"
                            value={alternatePhone}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label>Adresse Type</label>
                    <div>
                        <input type="radio" onClick={() => setAddressType('home')} name='addressType' value='home' />
                        <span>Domicile</span>
                        <input type="radio" onClick={() => setAddressType('work')} name='addressType' value='work' />
                        <span>Travail</span>
                    </div>
                </div>
            </div>
            <div className="flexRow">
                <MaterialButton 
                title="ENREGISTRER ET LIVRER ICI"
                onClick={onAddressSubmit}
                style={{
                    width: '250px',
                    margin: '20px 0'
                }}
                />
            </div>
            </div>

            );

}


            export default AddressForm;