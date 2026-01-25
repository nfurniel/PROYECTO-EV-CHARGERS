import './Header.css'
import { Login } from '../../modales/Login.tsx'
import { Register } from '../../modales/Register.tsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
    onLogin: () => void;
}

export function Header({ onLogin }: HeaderProps) {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const handleOpenModal = () => setIsLoginOpen(true);
    const handleCloseModal = () => setIsLoginOpen(false);

    const handleOpenRegister = () => setIsRegisterOpen(true);
    const handleCloseRegister = () => setIsRegisterOpen(false);

    return (
        <div className="header-container">
            <div className="logo">
                <img src="logo.png" alt="imagen" />
            </div>

            <div className="header-links">
                <Link to="/">Home</Link>
                <a href="#">About us</a>
                <Link to="/map">Map</Link>
                <a href="#">Cargadores</a>
            </div>

            <div className="header-buttons">
                <button id='login' onClick={handleOpenModal}>
                    Login
                </button>
                <button id='signup' onClick={handleOpenRegister}>
                    Sign up
                </button>
            </div>

            {/*  Si Esta a true, renderizo el modal que tengo creado del login */}
            {isLoginOpen && (
                <Login
                    isOpen={isLoginOpen}
                    onClose={handleCloseModal}
                    onLogin={onLogin}
                />
            )}

            {isRegisterOpen && (
                <Register
                    isOpen={isRegisterOpen}
                    onClose={handleCloseRegister}
                    onLogin={onLogin}
                />
            )}
        </div>
    )
}