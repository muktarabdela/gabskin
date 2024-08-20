import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../../store/authSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { loginAdmin } from '../../api/adminApi';
const AdminAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/admin', { replace: true });
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginAdmin(formData);
            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                dispatch(loginSuccess(response.data));
                navigate("/admin");
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <section className=" mt-[5em]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your  admin page
                        </h1>
                        {Error && <p className="text-red-500 text-sm">{Error}</p>}
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
                                />
                            </div>

                            <div>
                                <div className='relative'>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                                    >
                                        {showPassword ? (
                                            // Lock Icon
                                            <VisibilityOffIcon
                                                className='mt-8'
                                            />
                                        ) : (
                                            // Eye Icon
                                            <VisibilityIcon
                                                className='mt-8'
                                            />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                            >
                                LogIn
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AdminAuth