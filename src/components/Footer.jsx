
import React from 'react';
import { FaWhatsapp, FaYoutube, FaInstagram, FaCompass, FaPhone, FaEnvelope } from 'react-icons/fa6';

const Footer = ({ lang }) => {
    return (
        <>
            <div className="container">
                <div className="community-card">
                    <FaWhatsapp className="fa-whatsapp" />
                    <h3>
                        {lang === 'en' ? 'Join the Astroji Inner Circle' : 'एस्ट्रोजी इनर सर्कल से जुड़ें'}
                    </h3>
                    <p>
                        {lang === 'en'
                            ? 'Get exclusive spiritual tips, early access to new products, and festival guidance from our experts.'
                            : 'हमारे विशेषज्ञों से विशेष आध्यात्मिक टिप्स, नए उत्पादों तक शीघ्र पहुंच और त्योहारों पर मार्गदर्शन प्राप्त करें।'}
                    </p>
                    <a href="https://chat.whatsapp.com/KTu3RlGXcx53WnjDunoRoF?mode=wwt" target="_blank" rel="noopener noreferrer" className="cta-button">
                        {lang === 'en' ? 'Join for Free' : 'मुफ़्त में जुड़ें'}
                    </a>
                </div>
            </div>

            <footer className="page-footer">
                <div className="container">
                    <div className="footer-container">
                        {/* Column 1: About */}
                        <div className="footer-column about">
                            <img src="https://astroji.thefuture.university/assets/assets/images/logo.f4052b287762d9b75dd6b6d53e471448.png" alt="Astroji Logo" className="footer-logo" />
                            <p>
                                {lang === 'en'
                                    ? 'Guiding your spiritual journey with authentic products for cosmic well-being and prosperity.'
                                    : 'ब्रह्मांडीय कल्याण और समृद्धि के लिए प्रामाणिक उत्पादों के साथ आपकी आध्यात्मिक यात्रा का मार्गदर्शन।'}
                            </p>
                        </div>

                        {/* Column 2: Links */}
                        <div className="footer-column links">
                            <h3>{lang === 'en' ? 'Support & Info' : 'सहायता और जानकारी'}</h3>
                            <ul>
                                <li className="cta-item">
                                    <a href="https://astroji.com" target="_blank" rel="noopener noreferrer">
                                        <FaCompass />
                                        {lang === 'en' ? 'Explore All Products' : 'सभी उत्पाद देखें'}
                                    </a>
                                </li>
                                <li><a href="tel:7973938627"><FaPhone /> 7973938627</a></li>
                                <li><a href="mailto:support@thefuture.university"><FaEnvelope /> support@thefuture.university</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Connect */}
                        <div className="footer-column connect">
                            <h3>{lang === 'en' ? 'Stay Connected' : 'जुड़े रहें'}</h3>
                            <div className="social-links">
                                <a href="https://www.youtube.com/@astrolearn_app" target="_blank" rel="noopener noreferrer" title="YouTube"><FaYoutube /></a>
                                <a href="https://www.instagram.com/astrojiofficial" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
                                <a href="https://chat.whatsapp.com/KTu3RlGXcx53WnjDunoRoF?mode=wwt" target="_blank" rel="noopener noreferrer" title="WhatsApp"><FaWhatsapp /></a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <a href="https://www.youtube.com/@astrolearn_app" target="_blank" rel="noopener noreferrer" className="fab-option fab-youtube" title="YouTube"><FaYoutube /></a>
                        <a href="https://www.instagram.com/astrojiofficial" target="_blank" rel="noopener noreferrer" className="fab-option fab-instagram" title="Instagram"><FaInstagram /></a>
                        <a href="https://chat.whatsapp.com/KTu3RlGXcx53WnjDunoRoF?mode=wwt" target="_blank" rel="noopener noreferrer" className="fab-option fab-whatsapp" title="Join our Community"><FaWhatsapp /></a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
