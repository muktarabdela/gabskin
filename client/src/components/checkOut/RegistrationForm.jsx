import { Button, TextField } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { MultiStepContext } from "../../Context/checkoutContext";
import { selectRegistration, } from '../../store/registrationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectDelivery } from '../../store/deliverySlice';
import { selectCartItems } from "../../store/CartSlice";
import { selectTotalPrice } from '../../store/CartSlice';

import { setUserId, setErrorData } from '../../store/userSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { userRegister } from "../../api/userApi";
import PasswordCriteria from "../PasswordCriteria";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const { currentStep, DeliveryData, setDeliveryData, setStep, submitRegisterData, registerData, setRegisterData } = useContext(MultiStepContext)
    console.log(registerData.password, "registerData");
    const deliveryData = useSelector(selectDelivery);
    const registrationData = useSelector(selectRegistration);
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector((state) => selectTotalPrice(state));
    const [passwordTouched, setPasswordTouched] = useState(false);

    // Use Redux state for error data
    const dispatch = useDispatch();
    const [nameError, setNameError] = useState(null);
    const [emailErrorInput, setEmailErrorInput] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [passwordConfirmError, setPasswordConfirmError] = useState(null);

    const handleRegistration = async () => {
        try {
            const userData = {
                name: registrationData.name,
                email: registrationData.email,
                phone: deliveryData.phoneNumber,
                password: registrationData.password,
                confirmPassword: registrationData.confirmPassword,
                totalPrice: totalPrice,

                deliveryInfo: {
                    firstName: deliveryData.firstName,
                    lastName: deliveryData.lastName,
                    phone: deliveryData.phoneNumber,
                    subCity: deliveryData.subCity,
                    deliveryLocation: deliveryData.deliveryLocation,
                },
                orders: [
                    {
                        stickers: cartItems.map(item => ({
                            id: item.id,
                            price: item.price,
                            size: item.size,
                            name: item.name,
                            quantity: item.quantity,
                            category: item.category,
                            imageUrl: item.imageUrl,
                        })),
                    },
                ],
            }
            // make API 
            const response = await userRegister(userData)
            console.log(response)
            if (response.message === 'User registered successfully') {
                const token = response.token;
                console.log("token", token)
                localStorage.setItem('token', token);
                const newUserId = response.newUser._id;
                dispatch(setUserId(newUserId));
            }
            dispatch(setErrorData(response.data.error || response.data.message));
        } catch (error) {
            console.log(error)
        }

    }

    const validateInput = () => {
        let isValid = true;

        // Validate  name
        if (!DeliveryData["firstName"]) {
            setNameError("First name is required");
            isValid = false;
        } else {
            setNameError(null);
        }

        // Validate email
        if (!registerData["Email"]) {
            setEmailErrorInput("email required");
            isValid = false;
        }
        else {
            setEmailErrorInput(null);
        }

        // Validate password
        if (!registerData["password"]) {
            setPasswordError("Phone number is required");
            isValid = false;
        } else {
            setPasswordError(null);
        }

        // Validate confirmPassword and check if it matches password
        if (!registerData["confirmPassword"]) {
            setPasswordConfirmError("Confirm Password is required");
            isValid = false;
        } else if (registerData["password"] !== registerData["confirmPassword"]) {
            setPasswordConfirmError("Password and Confirm Password do not match");
            isValid = false;
        } else {
            setPasswordConfirmError(null);
        }
        return isValid;
    };
    useEffect(() => {
        if (currentStep === 2) {
            submitRegisterData();
            registrationData
        }
    }, [currentStep, submitRegisterData, handleRegistration]);
    return (
        <div className="w-[19em] md:w-[22em] lg:w-[28em]  mx-auto  bg-white">
            <>
                <p className="text-md text-gray-700 leading-tight text-center dark:text-gray-500 mb-5">
                    {" "}
                    you need account to mange your order
                </p>
                <p className="text-red-500">{emailErrorInput}</p>

                <div className={`mb-2 ${nameError ? 'error' : ''}`}>
                    <TextField
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        className={`w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-400 ${nameError ? 'border-red-500 bg-red-100' : ''
                            }`}
                        onInput={() => setNameError(null)}
                        value={DeliveryData["firstName"]}
                        onChange={(e) => setDeliveryData({ ...DeliveryData, "firstName": e.target.value })}
                        onFocus={() => setPasswordTouched(false)}
                    />

                </div>

                <div className={`mb-2 ${emailErrorInput ? 'error' : ''}`}>
                    <TextField
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        className={`w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-400 ${emailErrorInput ? 'border-red-500 bg-red-100' : ''
                            }`}
                        onInput={() => setEmailErrorInput(null)}
                        value={registerData["Email"]}
                        onChange={(e) => setRegisterData({ ...registerData, "Email": e.target.value })}
                        onFocus={() => setPasswordTouched(false)}
                    />
                </div>

                <div className='relative'>
                    <div className={`mb-2 ${passwordError ? 'error' : ''}`}>
                        <TextField
                            type={showPassword ? "text" : "password"} label="Password"
                            margin="normal"
                            variant="outlined"
                            color="secondary"
                            className={`w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-400 ${passwordError ? 'border-red-500 bg-red-100' : ''
                                }`}
                            onInput={() => setPasswordError(null)}
                            value={registerData["password"]}
                            onChange={(e) => setRegisterData({ ...registerData, "password": e.target.value })}
                            onFocus={() => setPasswordTouched(true)}
                        />
                        {passwordTouched && <PasswordCriteria password={registerData.password} />}
                    </div>
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-[2.5em] right-4 transform -translate-y-1/2 focus:outline-none"
                    >
                        {showPassword ? (
                            // Lock Icon
                            <VisibilityOffIcon
                                className='mt-3 text-black'
                            />
                        ) : (
                            // Eye Icon
                            <VisibilityIcon
                                className='mt-3 text-black'
                            />
                        )}
                    </button>



                </div>

                <div >


                    <div className='relative'>

                        <div className={`mb-2 ${passwordConfirmError ? 'error' : ''}`}>
                            <p className="text-red-400">{passwordConfirmError}</p>
                            <TextField
                                type={showConfirmPassword ? "text" : "password"} label="Confirm password"
                                margin="normal"
                                variant="outlined"
                                color="secondary"
                                className={`w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-400 ${passwordConfirmError ? 'border-red-500 bg-red-100' : ''
                                    }`}
                                onInput={() => setPasswordConfirmError(null)}
                                value={registerData["confirmPassword"]}
                                onChange={(e) => setRegisterData({ ...registerData, "confirmPassword": e.target.value })}
                                onFocus={() => setPasswordTouched(false)}

                            />
                        </div>
                        <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                        >
                            {showConfirmPassword ? (
                                // Lock Icon
                                <VisibilityOffIcon
                                    className='mt-3 text-black'
                                />
                            ) : (
                                // Eye Icon
                                <VisibilityIcon
                                    className='mt-3 text-black'
                                />
                            )}
                        </button>
                    </div>

                    <div className="flex mt-7">
                        <div className=" mx-auto" >
                            <Button onClick={() => setStep(1)} variant="contained" color="primary"> Back</Button>
                        </div>
                        <div className="mx-auto">
                            <Button
                                className=""
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    if (validateInput()) {
                                        setRegisterData({ ...registerData, "Email": registerData["Email"] });
                                        setStep(3);
                                        submitRegisterData();
                                        handleRegistration();
                                    }
                                }}
                            >
                                Register
                            </Button>
                        </div>
                    </div>
                </div>

            </>
        </div >
    );
};

export default RegisterForm;