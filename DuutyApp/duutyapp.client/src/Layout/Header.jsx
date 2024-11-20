const Header = () => {
    return (
        <header className="sticky-header">
            <div className="header-container">
                {/* Logo on the left */}
                <div className="logo">
                    <img src="../../public/logo.jpg" alt="Logo" className="logo-image" />
                </div>

                {/* Navigation links on the right */}
                <nav className="nav-links">
                    <ul>
                        <li><a href="about">About Us</a></li>
                        <li><a href="login">Login</a></li>
                        <li><a href="logout">Logout</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;