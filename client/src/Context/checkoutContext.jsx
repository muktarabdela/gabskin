import { createContext, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
    setFirstName,
    setLastName,
    setPhoneNumber,
    setSubCity,
    setDeliveryLocation,
} from '../store/deliverySlice';
// register slice 
import { setName, setEmail, setPassword, setConfirmPassword } from "../store/registrationSlice"
export const MultiStepContext = createContext()

const CheckoutContextProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [currentStep, setStep] = useState(1);
    const [finalData, setFinalData] = useState()

    const [DeliveryData, setDeliveryData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subCity: "",
        DeliveryLocation: ""
    })

    function submitDeliveryData() {
        dispatch(setFirstName(DeliveryData.firstName));
        dispatch(setLastName(DeliveryData.lastName));
        dispatch(setPhoneNumber(DeliveryData.phoneNumber));
        dispatch(setSubCity(DeliveryData.subCity));
        dispatch(setDeliveryLocation(DeliveryData.DeliveryLocation));
    }

    const [registerData, setRegisterData] = useState({
        Name: "",
        Email: "",
        password: "",
        confirmPassword: "", // Add this line

    })

    function submitRegisterData() {
        dispatch(setName(DeliveryData.firstName));
        dispatch(setEmail(registerData.Email));
        dispatch(setPassword(registerData.password));
        dispatch(setConfirmPassword(registerData.confirmPassword));
    }
    return (
        <div>
            <MultiStepContext.Provider
                value={{
                    currentStep, setStep, finalData, setFinalData, DeliveryData, setDeliveryData, submitDeliveryData, submitRegisterData,
                    registerData,
                    setRegisterData
                }}>
                {children}
            </MultiStepContext.Provider>
        </div>
    )
}
export default CheckoutContextProvider;
