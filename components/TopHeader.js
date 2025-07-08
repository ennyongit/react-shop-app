import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const TopHeader = () => {
    return(
        <div className="bg-gray-800 text-white">
          <nav className="" id="templatemo_nav_top flex">
            <div className="text-light w-full">
                <div className="flex justify-between pt-2 pb-2 pl-3 pr-3">
                    <div className="flex gap-2">
                        <div className="flex justify-center items-center gap-2">
                        <FontAwesomeIcon icon={faEnvelope} style={{width: '11.81px', color: '#cfd6e1'}}/>
                        <a 
                            className="text-sm text-gray-300" 
                            href="mailto:info@company.com"
                        >
                            info@company.com</a>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                        <FontAwesomeIcon icon={faPhone} style={{width: '11.81px', color: '#cfd6e1'}}/>
                            <a 
                            className="text-sm text-gray-300" 
                            href="tel:010-020-0340"
                            >
                              010-020-0340</a>
                        </div>
                    
                    </div>
                    <div className="flex gap-3">
                        <a className="text-light" 
                            href="https://fb.com/templatemo" target="_blank" rel="sponsored">
                            <i className="fab fa-facebook-f"></i>
                                <FontAwesomeIcon icon={faFacebookF} style={{color: '#cfd6e1', width: '7.65px'}}/>
                            </a>
                        <a className="text-light" 
                            href="https://www.instagram.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                                <FontAwesomeIcon icon={faInstagram}  style={{color: '#cfd6e1' , width:'11.28px'}}/>
                                </a>
                        <a className="text-light" 
                            href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter"></i>
                                <FontAwesomeIcon icon={faTwitter}  style={{color: '#cfd6e1', width:'11.28px'}}/>
                            </a>
                        <a className="text-light" 
                            href="https://www.linkedin.com/" target="_blank">
                                <i className="fab fa-linkedin"></i>
                                <FontAwesomeIcon icon={faLinkedin}  style={{color: '#cfd6e1', width:'11.28px'}}/>
                                </a>
                    </div>
                </div>
            </div>
    </nav>  
        </div>
    )
}

export default TopHeader;