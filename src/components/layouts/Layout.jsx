import { Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcumbs';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Loading from '../Loading';

function Layout() {
    const [user, setUser] = useState(null);
    const [isSidebarReady, setIsSidebarReady] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setUser(userData);
        setLoading(false);
        setIsSidebarReady(true);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
                <Loading text="Loading data" />
            </div>
        );
    }

    return (
        <div>
            <div className="overflow-hidden font-sans antialiased bg-gray-100">
                <div className="relative flex w-screen h-screen ">
                    {/* <!-- Sidebar --> */}
                    {isSidebarReady && <Sidebar user={user} />}

                    <div className="absolute h-full min-w-14/15 overflow-scroll ms-20  hover:z-10 overflow-y-scroll overflow-x-hidden">
                        <div className="block w-full  bg-slate-600 ">
                            <Breadcrumbs />

                            <div className="bottom-0 w-full min-h-[calc(100vh-190px)]  p-4 bg-white shadow-md main animate__animated animate__fadeIn animmate__slower animate__genieIn rounded-b-md">
                                <Outlet />
                            </div>

                            {/* footer */}
                            <div className="mt-10  pb-16">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
