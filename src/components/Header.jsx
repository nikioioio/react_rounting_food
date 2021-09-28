import {Link} from 'react-router-dom';

export const Header  = () => {
    return (
        <nav className="green">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React Showcase</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/contact">Contacts</Link></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}