import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="page-footer purple lighten-3">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <Link className="grey-text text-lighten-4 right" to="https://github.com/HolyfcMoly/react-shop" target="_blank" rel="noreferrer">
                        More Links
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
