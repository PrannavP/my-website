export const Header = () => {
    return(
        <header className="header">
            <div className="header-content">
                <div className="logo">Prannav Panta</div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#skills" className="nav-link">Skills</a></li>
                        <li><a href="#projects" className="nav-link">Projects</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};