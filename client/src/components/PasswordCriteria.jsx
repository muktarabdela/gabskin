import { useEffect, useState } from "react";
import check from "../../public/images/check.png";
const PasswordCriteria = ({ password }) => {
    const [criteria, setCriteria] = useState({
        minLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false,
    });

    useEffect(() => {
        setCriteria({
            minLength: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /\d/.test(password),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        });
    }, [password]);

    const CrossIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            style={{ fill: "rgba(254, 3, 3, 1)", transform: "", msfilter: "" }}
            className="inline-block w-4 h-4 mr-2"
        >
            <path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414 4.242 4.242-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414-4.242-4.242 4.242-4.242z" />
        </svg>
    );

    return (

        <div className='flex flex-col gap-2 px-2 -mt-8'>
            <h3>Password must contain the following:</h3>
            <p className={`messp ${criteria.hasLowerCase ? 'text-green-700' : 'text-red-800'}`}>
                {criteria.hasLowerCase ? <img src={check} alt="valid" className="inline-block w-4 h-4 mr-2" /> : <CrossIcon />}
                A <b>lowercase</b> letter</p>
            <p className={`messp ${criteria.hasUpperCase ? 'text-green-600' : 'text-red-800'}`}>
                {criteria.hasUpperCase ? <img src={check} alt="valid" className="inline-block w-4 h-4 mr-2" /> : <CrossIcon />}
                A <b>capital (uppercase)</b> letter</p>
            <p className={`messp ${criteria.hasNumber ? 'text-green-800' : 'text-red-800'}`}>
                {criteria.hasNumber ? <img src={check} alt="valid" className="inline-block w-4 h-4 mr-2" /> : <CrossIcon />}
                A <b>number</b></p>
            <p className={`messp ${criteria.hasSpecialChar ? 'text-green-800' : 'text-red-800'}`}>
                {criteria.hasSpecialChar ? <img src={check} alt="valid" className="inline-block w-4 h-4 mr-2" /> : <CrossIcon />}
                A <b>symbol</b></p>
            <p className={`messp ${criteria.minLength ? 'text-green-800' : 'text-red-800'}`}>
                {criteria.minLength ? <img src={check} alt="valid" className="inline-block w-4 h-4 mr-2" /> : <CrossIcon />}
                Minimum <b>8 characters</b></p>
        </div>
    );
};

export default PasswordCriteria;
