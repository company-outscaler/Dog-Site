import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="./img/logo (1).png " className="" alt="logo" width="200px" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/service">Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/contact">Contact</Link>
                        </li>


                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-info" type="submit "><i
                            className="fa-solid fa-magnifying-glass text-white"></i></button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar