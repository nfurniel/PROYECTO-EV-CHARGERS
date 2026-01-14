import './Header.css'

export function Header() {

    return (
        <div className="header-container">
            <div className="logo" > <img src="logo.png" alt="imagen" /></div>
            <div className="header-links">
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Map</a>
                <a href="#">Cargadores</a>
            </div>
            <div className="header-buttons">
                <button id='login'>Login</button>
                <button id='signup'>Sign up</button>
            </div>
        </div>
    )
}