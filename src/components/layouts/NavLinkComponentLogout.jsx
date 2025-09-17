import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext';
import axiosAdmin from '../../lib/axiosAdmin';

function NavLinkComponentLogout({ isopen, to, icon, label }) {
    const location = useLocation();
    const isActive = location.pathname === to;
    const formRef = useRef();
    const { logout } = useAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Ambil data user dari local storage
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            // await axiosClient.get('/sanctum/csrf-cookie'); // penting sebelum login

            const response = await axiosAdmin.post('/user-logout');
            logout(); // Clear localStorage, context, dll.
            Navigate('/login'); // Arahkan ke halaman login
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };
    return (
        <>
            <li className=" mt-3">
                {isopen && (
                    <button
                        type="button"
                        onClick={handleLogout}
                        className={`${isActive ? 'bg-gradient-to-r ' : ''} flex items-center w-full  p-2 from-indigo-500 via-purple-500 to-pink-500  hover:scale-110 duration-700 hover:bg-gradient-to-r  text-gray-200 whitespace-nowrap rounded `}
                    >
                        <i
                            className={` ${icon} bg-gray-800  border-gray-800   text-2xl border rounded-full p-2`}
                        ></i>
                        <span className=" ml-3">{label}</span>
                    </button>
                )}
                {!isopen && (
                    <button
                        type="button"
                        onClick={handleLogout}
                        className={`  text-gray-200 bg-gradient-to-r w-full from-indigo-500 to-pink-500 flex items-center  p-1 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-800  bg-gray-800  rounded-full  `}
                    >
                        <i
                            className={`${icon} ${isActive ? 'bg-gradient-to-r from-indigo-500 to-pink-500' : 'bg-gray-800  '} border-gray-800  text-2xl rounded-full p-3 `}
                        ></i>
                    </button>
                )}
            </li>
            <li className="text-center my-2">
                {isopen && (
                    <>
                        <button
                            type="button"
                            onClick={handleLogout}
                            className={`  text-gray-200 bg-gradient-to-r w-full from-indigo-500 to-pink-500 flex items-center  p-1 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-800  bg-gray-800  rounded-full  `}
                        >
                            <i
                                className={`${isActive ? ' bx bx-user bg-gradient-to-r from-indigo-500 to-pink-500' : 'bg-gray-800  '} border-gray-800  text-2xl rounded-full p-3 me-2`}
                            ></i>
                            {user ? user.name : 'Guest'}
                        </button>
                    </>
                )}
            </li>
        </>
    );
}

export default NavLinkComponentLogout;
