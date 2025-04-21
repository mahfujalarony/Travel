import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [language, setLanguage] = useState<string>('English');
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navigate = useNavigate();

    const closeNavbarAndNavigate = ( path: string ) => {
        navigate(path);
        toggleSidebar();
    } 

    return (
        <div className='sticky top-0 z-50'>
            <div className="flex  justify-between mx-8 xl:justify-around mt-3">
                <div className="text-3xl font-semibold px-4 py-2 cursor-pointer"
                onClick={() => navigate('/')}
                >
                    Jads<span className="text-yellow-500">oo</span>
                </div>
                <div>
                    <ul className="xl:flex hidden text-xl space-x-5">
                        <li className= " cursor-pointer px-4 py-2 hover:border-2 hover:rounded-lg hover:bg-slate-100 active:bg-slate-200 active:scale-95"
                        onClick={() => navigate('/')}
                        >
                            Destinations
                        </li>
                        <li className="px-4 py-2 cursor-pointer hover:border-2 hover:rounded-lg hover:bg-slate-100 active:bg-slate-200 active:scale-95">
                            Hotels
                        </li>
                        <li className="px-4 py-2 hover:border-2 cursor-pointer hover:rounded-lg hover:bg-slate-100 active:bg-slate-200 active:scale-95">
                            Flights
                        </li>
                        <li className="px-4 py-2 hover:border-2 hover:rounded-lg cursor-pointer hover:bg-slate-100 active:bg-slate-200 active:scale-95">
                            Bookings
                        </li>
                        <li className=" cursor-pointer px-4 py-2 hover:border-2 hover:rounded-lg hover:bg-slate-100 active:bg-slate-200 active:scale-95"
                        onClick={() => navigate('/login')}
                        >
                            Login
                        </li>
                        <li className="border-2 px-4 cursor-pointer py-2 rounded-lg border-black hover:bg-slate-100 active:bg-slate-200 active:scale-95"
                        onClick={() => navigate('/signup')}
                        >
                            Sign Up
                        </li>
                        <li className='cursor-pointer'>
                            <Dropdown>
                                <Dropdown.Toggle variant="Light" id="dropdown-language">
                                    {language}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => changeLanguage('Bangla')}>
                                        Bangla
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => changeLanguage('Arabic')}>
                                        Arabic
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => changeLanguage('Italian')}>
                                        Italian
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>

                <div className="flex xl:hidden">
                    <button onClick={toggleSidebar}>
                        <img src="./bars-solid.svg" className="w-6" alt="Menu" />
                    </button>
                </div>
            </div>

            
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out xl:hidden z-50`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold">Menu</h2>
                    
                        <AiOutlineClose onClick={toggleSidebar} className="text-2xl cursor-pointer" />
                      
                    
                </div>
                <ul className="flex flex-col p-4 space-y-4">
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg active:bg-slate-200 active:scale-95"
                    onClick={() => closeNavbarAndNavigate('/')}
                    >
                        Destinations
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg active:bg-slate-200 active:scale-95">
                        Hotels
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg active:bg-slate-200 active:scale-95">
                        Flights
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg active:bg-slate-200 active:scale-95">
                        Bookings
                    </li>
                    <li className="px-4 py-2 hover:bg-slate-100 rounded-lg active:bg-slate-200 active:scale-95"
                    onClick={() => closeNavbarAndNavigate('/login')}
                    >
                        Login
                    </li>
                    <li className="border-2 px-4 py-2 rounded-lg border-black hover:bg-slate-100 active:bg-slate-200 active:scale-95"
                    onClick={() => closeNavbarAndNavigate('/signup')}
                    >
                        Sign Up
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="Light" id="dropdown-language-sidebar">
                                {language}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => changeLanguage('Bangla')}>
                                    Bangla
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => changeLanguage('Arabic')}>
                                    Arabic
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => changeLanguage('Italian')}>
                                    Italian
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>


            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 xl:hidden z-40"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default Navbar;