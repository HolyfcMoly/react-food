import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="purple darken-1">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        React Shop
                    </Link>
                    <ul className="right">
                        <li>
                        <Link to="/" className="">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://github.com/HolyfcMoly/react-shop"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Repo
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export { Header };
