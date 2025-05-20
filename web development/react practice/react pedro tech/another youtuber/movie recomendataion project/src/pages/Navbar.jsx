import { Link } from 'react-router-dom'; // Add this import

function Navbar() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
        </>
    )
}

export default Navbar