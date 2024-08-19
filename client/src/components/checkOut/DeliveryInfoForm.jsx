import { Button, TextField, } from "@material-ui/core";
import { useContext, useState } from "react";
import { MultiStepContext } from "../../Context/checkoutContext";
import { Link } from "react-router-dom";

const DeliveryForm = () => {

    const { setStep, DeliveryData, setDeliveryData, submitDeliveryData } = useContext(MultiStepContext)
    // State variables for input validation
    const [firstNameError, setFirstNameError] = useState(null);
    const [lastNameError, setLastNameError] = useState(null);
    const [phoneNumberError, setPhoneNumberError] = useState(null);
    const [subCityError, setSubCityError] = useState(null);
    const [deliveryLocationError, setDeliveryLocationError] = useState(null);

    const validateInput = () => {
        let isValid = true;

        // Validate first name
        if (!DeliveryData["firstName"]) {
            setFirstNameError("First name is required");
            isValid = false;
        } else {
            setFirstNameError(null);
        }

        // Validate last name
        if (!DeliveryData["lastName"]) {
            setLastNameError("Last name is required");
            isValid = false;
        } else {
            setLastNameError(null);
        }

        // Validate phone number
        if (!DeliveryData["phoneNumber"]) {
            setPhoneNumberError("Phone number is required");
            isValid = false;
        } else {
            setPhoneNumberError(null);
        }

        // Validate delivery location
        if (!DeliveryData["DeliveryLocation"]) {
            setDeliveryLocationError("Delivery location is required");
            isValid = false;
        } else {
            setDeliveryLocationError(null);
        }
        // Validate sub city
        if (!DeliveryData["subCity"]) {
            setSubCityError("Sub city is required");
            isValid = false;
        } else {
            setSubCityError(null);
        }


        return isValid;
    };


    return (
        <div className="w-[19em] md:w-[22em] lg:w-[28em] mx-auto">
            <p className="text-md text-gray-700 leading-tight text-center text-[23px] mb-2">
                Delivery Address
            </p>
            <div className={`mb-2 ${firstNameError ? 'error' : ''}`}>
                <TextField
                    label="First name"
                    margin="normal"
                    variant="outlined"
                    className={`w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-400 ${firstNameError ? 'border-red-500 bg-red-100' : '' // Apply red border and background on error
                        }`}
                    onInput={() => setFirstNameError(null)}
                    value={DeliveryData["firstName"]}
                    onChange={(e) => setDeliveryData({ ...DeliveryData, "firstName": e.target.value })}
                />
            </div>

            <div className={`mb-2 ${lastNameError ? 'error' : ''}`}>
                <TextField
                    label="Last name"
                    margin="normal"
                    variant="outlined"
                    className={`w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-400 ${lastNameError ? 'border-red-500 bg-red-100' : '' // Apply red border and background on error
                        }`}
                    onInput={() => setLastNameError(null)}
                    value={DeliveryData["lastName"]}
                    onChange={(e) => setDeliveryData({ ...DeliveryData, "lastName": e.target.value })}

                />
            </div>
            <div className={`mb-2 ${phoneNumberError ? 'error' : ''}`}>
                <TextField
                    label="Phone Number"
                    margin="normal"
                    variant="outlined"
                    className={`w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-400 ${phoneNumberError ? 'border-red-500 bg-red-100' : ''
                        }`}
                    onInput={() => setPhoneNumberError(null)}
                    value={DeliveryData["phoneNumber"]}
                    onChange={(e) => setDeliveryData({ ...DeliveryData, "phoneNumber": e.target.value })}

                />
            </div>
            <div className={`mb-2 ${subCityError ? 'error' : ''}`}>
                <select
                    name="SubCity"
                    className={`w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-400 ${subCityError ? 'border-red-500 bg-red-100' : ''}`}
                    value={DeliveryData["subCity"]}
                    onChange={(e) => {
                        setDeliveryData({ ...DeliveryData, "subCity": e.target.value });
                        setSubCityError(null); // Set subCityError to null when the user selects a subcity
                    }}
                >
                    <option value="" disabled>Select a Sub City</option>
                    <option value="Addis Ketema">Addis Ketema</option>
                    <option value="Akaky Kaliti">Akaky Kaliti</option>
                    <option value="Arada">Arada</option>
                    <option value="Bole">Bole</option>
                    <option value="Gullele">Gullele</option>
                    <option value="Kiros">Kiros</option>
                    <option value="Kolfie Keranio">Kolfie Keranio</option>
                    <option value="Lideta">Lideta</option>
                    <option value="Nifas Silk-Lafto">Nifas Silk-Lafto</option>
                    <option value="Yeka">Yeka</option>
                    <option value="Lemi Kura">Lemi Kura</option>
                </select>

            </div>



            <div className={`mb-2 ${deliveryLocationError ? 'error' : ''}`}>
                <TextField
                    label="Delivery Location"
                    margin="normal"
                    variant="outlined"
                    className={`w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-400 ${deliveryLocationError ? 'border-red-500 bg-red-100' : ''
                        }`}
                    onInput={() => setDeliveryLocationError(null)}
                    value={DeliveryData["DeliveryLocation"]}
                    onChange={(e) => setDeliveryData({ ...DeliveryData, "DeliveryLocation": e.target.value })}
                />
            </div>

            <div className="flex mx-auto">
                <div className="mx-auto">
                    <Link to="/">
                        <Button variant="contained" color="primary"> Back to shop</Button>
                    </Link>

                </div>
                <div className="mx-auto">
                    <Button
                        className=""
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            if (validateInput()) {
                                submitDeliveryData();
                                setStep(2);
                            }
                        }}
                    >
                        Next
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default DeliveryForm;