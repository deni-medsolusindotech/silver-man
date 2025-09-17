import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className="bg-gray-200 dark:bg-gray-800">
            <div className="container flex items-center justify-center py-1 mx-3 overflow-x-auto whitespace-nowrap">
                <Link to="/" className="text-gray-600 dark:text-gray-200">
                    <i className="text-md bx bx-home"></i>
                </Link>

                {pathnames.length === 0 && (
                    <span className="ml-2 text-gray-600 text-sm dark:text-gray-200">Dashboard</span>
                )}

                {pathnames.map((name, index) => {
                    const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
                    const isLast = index === pathnames.length - 1;

                    return (
                        <div key={name} className="flex items-center">
                            <span className="mx-2 text-gray-500 dark:text-gray-300 text-sm">
                                <i className="bx bx-chevron-right mt-1"></i>
                            </span>
                            {isLast ? (
                                <span className="text-gray-600 text-sm dark:text-gray-200">
                                    {decodeURIComponent(name)}
                                </span>
                            ) : (
                                <Link
                                    to={routeTo}
                                    className="text-gray-600 text-sm dark:text-gray-200 hover:underline"
                                >
                                    {decodeURIComponent(name)}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Breadcrumbs;
