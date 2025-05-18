import { Link } from "react-router-dom";
import LogoSrc from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="container-wrapper text-center text-surface/75 lg:text-left">
            <div className="py-6 text-center md:text-left">
                <div className="grid-1 grid gap-8 lg:gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    <div className="">
                        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            <span className="">
                                <img
                                    alt="Duuty Logo"
                                    src={LogoSrc}
                                    className="w-[130px]"
                                />
                            </span>
                        </h6>
                        <p>
                            Connecting great kitchens with great talent
                        </p>
                        <div className="flex justify-center sm:justify-start mt-4 space-x-4 mb-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 320 512"
                                >
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                            </a>
                            <a href="https://www.twitter.com" className="[&>svg]:h-5 [&>svg]:w-5" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </a>
                            <a href="https://www.google.com" className="[&>svg]:h-5 [&>svg]:w-5" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 488 512"
                                >
                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h6 className="mb-4 flex justify-center font-bold md:justify-start">
                            Company
                        </h6>
                        <p className="mb-4">
                            <Link to="/about-us">About Us</Link>
                        </p>
                        <p className="mb-4">
                            <Link to="/privacy">Privacy Policy</Link>
                        </p>
                    </div>
                    <div>
                        <h6 className="mb-4 flex justify-center font-bold md:justify-start">
                            Contact
                        </h6>
                        <p className="mb-4">
                            <Link to="/faq">Help/FAQ</Link>
                        </p>
                        <p className="mb-4">
                            <Link to="contact-us">Contact Us</Link>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;