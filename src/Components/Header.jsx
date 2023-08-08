import './Header.css';

const Header = () => {
    return(
        <>
        <div className="titleDiv">
        <h1 className="title">Tutormon</h1>
        <h2 className="subtitle">Experienced Freelance Math Tutor</h2>
        </div>
        <nav>
            <ul className="nav-list">
                <li className="nav-itm">Home</li>
                <li className="nav-itm">Getting Started</li>
                <li className="nav-itm">Prices</li>
                <li className="nav-itm">Reviews</li>
                <li className="nav-itm">Services</li>
                <li className="nav-itm">About</li>
            </ul>
        </nav>
        </>
    )
}

export default Header;