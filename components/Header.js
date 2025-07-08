import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>
             <div className="flex items-center text-xl justify-between pl-2 pr-2 pt-3 pb-3 ml-8 mr-8">
                <div>
                    <a className="font-semibold text-5xl" style={{color: '#59ab6e '}} href="index.html">
                        Zay
                    </a>
                        {/* <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                         </button> */}
                    </div>
             {/**Nav Menu */}            
            <div className="flex text-center" id="templatemo_main_nav">
                    <ul className="nav flex gap-40 text-gray-700">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="shop.html">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
                {/** Nav Menu icons */}
                    <div className="flex gap-3.5">
                        <a className="" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                        <FontAwesomeIcon icon={faSearch} className="text-gray-800 w-5 text-center" />
                        </a>
                        <a className="" href="#">
                            <FontAwesomeIcon icon={faCartArrowDown} className="text-gray-800 w-5 text-center" />
                            <span className=""></span>
                        </a>
                        <a className="" href="#">
                        <FontAwesomeIcon icon={faUser} className="text-gray-800 w-5 text-center" />
                            <span className=""></span>
                        </a>
                    </div>
                </div>
     </>
    )
}

export default Header;