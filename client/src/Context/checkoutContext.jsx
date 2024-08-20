import { createContext, useState, useContext, useEffect } from 'react';
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
import { jwtDecode } from 'jwt-decode';
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

    const getToken = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token');
        }
        return null;
    };

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    const logoutCheck = () => {
        const token = getToken();
        if (token) {
            try {
                const decoded = jwtDecode(token);
                const admin = decoded.role === 'admin';
                const isAdmin = decoded.isAdmin === true;
                console.log("Admin:", admin, "Is Admin:", isAdmin);
                if (admin || isAdmin) {
                    const expDate = new Date(decoded.exp * 1000);
                    console.log("Token Expiration Date:", expDate.toUTCString());
                    if (decoded.exp * 1000 < Date.now()) {
                        logout();
                    }
                }
            } catch (e) {
                console.error("Invalid token", e);
            }
        }
    }

    useEffect(() => {
        const intervalId = setInterval(logoutCheck, 1000);
        return () => clearInterval(intervalId);
    }, []);


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
