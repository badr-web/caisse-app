import { useState, useEffect } from 'react';

export default function Navbar() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <nav className="navbar">
            <h1 className="navbar-title">Café POS</h1>
            <div className="navbar-clock">
                {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </div>
        </nav>
    );
}
