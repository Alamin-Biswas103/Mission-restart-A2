import { faDiscord, faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-black pt-10 px-[5%] grid sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5 text-gray-400 gap-10 pb-5'>
                <div>
                    <h2 className='text-white font-bold text-lg mb-3'>CS-Ticket System</h2>
                    <p>This webpage helps users manage support tickets efficiently. Users can move tickets to in-progress, mark them as completed, and track task status. It simplifies workflow and improves organization of customer issues.</p>
                </div>

                <div>
                    <h2 className='text-white font-bold text-lg mb-3'>Company</h2>
                    <ul className='flex flex-col gap-5'>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Our Mission</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white font-bold text-lg mb-3'>Services</h2>
                    <ul className='flex flex-col gap-5'>
                        <li><a href="">Products & Services</a></li>
                        <li><a href="">Customer Stories</a></li>
                        <li><a href="">Download Apps</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white font-bold text-lg mb-3'>Information</h2>
                    <ul className='flex flex-col gap-5'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Join Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white font-bold text-lg mb-3'>Company</h2>
                    <ul className='flex gap-5'>
                        <li><a href=""><FontAwesomeIcon icon={faXTwitter} /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faDiscord} /></a></li>

                    </ul>
                </div>

            </div>
            <footer className="footer sm:footer-horizontal footer-center bg-black text-gray-400 border-t-2 border-t-gray-500 pb-10 pt-8">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;