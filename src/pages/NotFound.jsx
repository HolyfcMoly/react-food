
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1>Page, not found</h1>
            <Link to='/'>Home</Link>
        </>
        )
}

export {NotFound}