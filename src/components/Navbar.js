import { Link } from "react-router-dom";

function NavScrollExample() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active mx-3" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3" to="/menu">MENU</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3" to="/story">OURY STORY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3" to="/contact">CONTACT US</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2 w-50 h-50 mx-3" style={{ borderRadius: '20px' }} type="search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavScrollExample;