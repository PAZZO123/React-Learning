import Logo from "/src/assets/react.jpg";


export default function Header() {
    return (
        <header className="header">
            <img src={Logo} width="55px" alt="React logo" />
           <span className="slogon" color="#ffffff">React Facts</span>
        </header>
    )
}
