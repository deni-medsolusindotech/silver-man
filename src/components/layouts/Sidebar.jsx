import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../navbar.css';
import NavLinkComponent from './NavLinkComponent';
import NavLinkComponentLogout from './NavLinkComponentLogout';
function Sidebar(user) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [isOpen, setIsOpen] = useState(false);
    const handleMouseOver = () => {
        setIsOpen(true);
    };

    const handleMouseOut = () => {
        setIsOpen(false);
    };

    return (
        <aside
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={` ${isOpen ? 'w-64' : 'w-20'} z-50  hide-scrollbar min-h-screen transition-all duration-700 bg-white shadow-md print:hidden lg:h-auto `}
        >
            <div className=" bg-gray-800 min-h-screen">
                <div className=" p-4 border-b border-gray-100">
                    <Link to="#" className=" flex items-center text-gray-200 ms-1">
                        <img
                            src="/logo3.png"
                            alt="logo"
                            className=" object-cover w-10 h-10 rounded-full"
                        />
                        {isOpen && (
                            <img
                                src="/logo2.png"
                                className=" transition-all duration-700 h-[40px] mx-auto"
                                height="100"
                                x-show="isOpen"
                                alt=""
                            />
                        )}
                    </Link>
                </div>
                <div className=" h-full overflow-y-auto hide-scrollbar ">
                    <ul className=" p-3 overflow-y-scroll bg-gray-800 sidebarstyle">
                        {user.user.status == 'super_admin' && (
                            <>
                                <NavLinkComponent
                                    to="/"
                                    icon="bx bx-home"
                                    isopen={isOpen}
                                    label="Dashboard"
                                />
                                <NavLinkComponent
                                    to="/bookings"
                                    icon="bx bx-user-pin"
                                    isopen={isOpen}
                                    label="Bookings"
                                />
                                {/* <NavLinkComponent
                                    to="/reports"
                                    icon="bx bx-detail"
                                    isopen={isOpen}
                                    label="Reports"
                                /> */}
                                <NavLinkComponent
                                    to="/users"
                                    icon="bx bxs-user-detail"
                                    isopen={isOpen}
                                    label="Users"
                                />
                                <NavLinkComponent
                                    to="/set-up"
                                    icon="bx bx-cog"
                                    isopen={isOpen}
                                    label="Set Up"
                                />
                            </>
                        )}
                        {user.user.status == 'admin_hotel' && (
                            <>
                                <NavLinkComponent
                                    to="/hotels/"
                                    icon="bx bx-home"
                                    isopen={isOpen}
                                    label="Hotels"
                                />
                            </>
                        )}
                        {/* <NavLinkComponent
                            to="/log-system"
                            icon="bx bx-history"
                            isopen={isOpen}
                            label="Log System"
                        /> */}
                        <NavLinkComponentLogout
                            icon="bx bx-log-out"
                            isopen={isOpen}
                            label="Logout"
                        />
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
