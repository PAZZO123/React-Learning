import Logo from "/src/assets/react.jpg";


export default function Header() {
    return (
        <header className="header">
            <img src={Logo} width="40px" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
