import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import './App.css';
const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setUser(userData);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <Loading text="Loading bookings data" />
            </div>
        );
    }
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    );
};

export default App;
