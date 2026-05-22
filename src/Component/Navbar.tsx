import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>('EN');

    const navItems = [
        { label: 'Destinations', path: '/' },
        { label: 'Hotels', path: '/hotels' },
        { label: 'Flights', path: '/flights' },
        { label: 'Bookings', path: '/bookings' },
    ];

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `rounded-md px-3 py-2 text-sm font-semibold transition ${
            isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
        }`;

    const toggleLanguage = () => {
        setLanguage((current) => (current === 'EN' ? 'BN' : 'EN'));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navigate = useNavigate();

    const closeNavbarAndNavigate = (path: string) => {
        navigate(path);
        setIsSidebarOpen(false);
    };

    return (
        <header className='sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur'>
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <button
                    className="flex items-center gap-2 rounded-md text-left"
                    onClick={() => navigate('/')}
                    aria-label="Go to homepage"
                >
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-amber-500 text-lg font-black text-white">J</span>
                    <span className="text-xl font-black tracking-tight text-slate-950">Jadoo Travel</span>
                </button>

                <div className="hidden items-center gap-1 lg:flex">
                    {navItems.map((item) => (
                        <NavLink key={item.path} to={item.path} className={linkClass}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden items-center gap-3 lg:flex">
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                        aria-label="Toggle language"
                    >
                        <FiGlobe />
                        {language}
                    </button>
                    <button
                        className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                    <button
                        className="rounded-md bg-amber-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-sm hover:bg-amber-400"
                        onClick={() => navigate('/signup')}
                    >
                        Sign Up
                    </button>
                </div>

                <div className="flex lg:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-slate-700"
                        aria-label="Open menu"
                    >
                        <AiOutlineMenu className="text-2xl" />
                    </button>
                </div>
            </nav>

            <div
                className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transform ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <div className="flex justify-between items-center p-5 border-b">
                    <h2 className="text-lg font-bold text-slate-950">Menu</h2>
                    <button onClick={toggleSidebar} aria-label="Close menu">
                        <AiOutlineClose className="text-2xl text-slate-700" />
                    </button>
                </div>
                <ul className="flex flex-col p-5 space-y-2">
                    {navItems.map((item) => (
                        <li
                            key={item.path}
                            className="cursor-pointer rounded-md px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                            onClick={() => closeNavbarAndNavigate(item.path)}
                        >
                            {item.label}
                        </li>
                    ))}
                    <li className="cursor-pointer rounded-md px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100" onClick={() => closeNavbarAndNavigate('/login')}>
                        Login
                    </li>
                    <li className="mt-2 cursor-pointer rounded-md bg-amber-500 px-4 py-3 font-bold text-slate-950" onClick={() => closeNavbarAndNavigate('/signup')}>
                        Sign Up
                    </li>
                </ul>
            </div>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-950/40 lg:hidden z-40"
                    onClick={toggleSidebar}
                ></div>
            )}
        </header>
    );
};

export default Navbar;
