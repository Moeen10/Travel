import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="d-md-flex text-center footer text-white pb-2 pt-2 mt-5">
                {/* ========== footer course link ========== */}
                <div className="col-md-4 col-12 mt-5 mb-5 ">
                    <h5 className="">Service</h5>
                    <li className="li-style">Consultation</li>
                    <li className="li-style">Medicine</li>
                    <li className="li-style">Pregnant Care</li>
                    <li className="li-style">Baby Care</li>

                </div>
                {/* ============footer nav link ============ */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5>Browse</h5>
                   <Link to="/home"> <li className="li-style ">Home</li></Link>
                   <Link to="/manageServices"> <li className="li-style ">Manage-Service</li></Link>
                   <Link to="/addService"> <li className="li-style ">Add-User</li></Link>
                </div>
                {/* =========== social media =========== */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5>Social Link</h5>
                    <div className="text-info">
                        <i className="fs-2  m-2 fab fa-facebook"></i>
                        <i className="fs-2 m-2 fab fa-youtube ms-3"></i>
                        <i className="fs-2  m-2 fab fa-twitter ms-3"></i>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;