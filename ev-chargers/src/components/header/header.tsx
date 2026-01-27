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
    const [usuario, setUsuario] = useState<string | null>(null);

    const abrirLogin = () => setIsLoginOpen(true);
    const cerrarLogin = () => setIsLoginOpen(false);

    const abrirRegistro = () => setIsRegisterOpen(true);
    const cerrarRegistro = () => setIsRegisterOpen(false);

    const guardarUsuario = (email: string) => {
        const nombre = email.split('@')[0];
        setUsuario(nombre);
        onLogin();
        cerrarLogin();
    };

    const guardarRegistro = (email: string) => {
        const nombre = email.split('@')[0];
        setUsuario(nombre);
        onLogin();
        cerrarRegistro();
    };

    return (
        <div className="header-container">
            <div className="logo">
                <img src="logo.png" alt="imagen" />
            </div>

            <div className="header-links">
                <Link to="/">Home</Link>
                <a href="#">About us</a>
                <Link to="/map">Map</Link>
                <Link to="/chargers">Cargadores</Link>
            </div>

            <div className="header-buttons">
                {!usuario ? (
                    <>
                        <button id='login' onClick={abrirLogin}>
                            Login
                        </button>
                        <button id='signup' onClick={abrirRegistro}>
                            Sign up
                        </button>
                    </>
                ) : (
                    <div className="user-info">
                        Hola, {usuario}
                    </div>
                )}
            </div>

            {isLoginOpen && (
                <Login
                    isOpen={isLoginOpen}
                    onClose={cerrarLogin}
                    onLogin={guardarUsuario}
                />
            )}

            {isRegisterOpen && (
                <Register
                    isOpen={isRegisterOpen}
                    onClose={cerrarRegistro}
                    onLogin={guardarRegistro}
                />
            )}
        </div>
    )
}