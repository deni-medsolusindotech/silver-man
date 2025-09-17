import { Link, useLocation } from 'react-router-dom';

function NavLinkComponent({ isopen, to, icon, label }) {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <>
            <li className=" mt-3">
                {isopen && (
                    <Link
                        to={to}
                        className={`${isActive ? 'bg-gradient-to-r ' : ''} flex items-center  p-2 from-indigo-500 via-purple-500 to-pink-500  hover:scale-110 duration-700 hover:bg-gradient-to-r  text-gray-200 whitespace-nowrap rounded `}
                    >
                        <i
                            className={` ${icon} bg-gray-800  border-gray-800   text-2xl border rounded-full p-2`}
                        ></i>
                        <span className=" ml-3">{label}</span>
                    </Link>
                )}
                {!isopen && (
                    <Link
                        to={to}
                        className={`  text-gray-200 bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center  p-1 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-800  bg-gray-800  rounded-full  `}
                    >
                        <i
                            className={`${icon} ${isActive ? 'bg-gradient-to-r from-indigo-500 to-pink-500' : 'bg-gray-800  '} border-gray-800  text-2xl rounded-full p-3 `}
                        ></i>
                    </Link>
                )}
            </li>
        </>
    );
}

export default NavLinkComponent;
