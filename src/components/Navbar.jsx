
import React from 'react';
import { FaShareNodes } from 'react-icons/fa6';

const Navbar = ({ lang, toggleLang, setSearchQuery }) => {

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Astroji Product Usage Guide',
                    text: 'Check out this guide for Astroji spiritual products!',
                    url: window.location.href
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            alert('Sharing is not supported on this browser. Copy the URL to share!');
        }
    };

    return (
        <div className="sticky-nav-wrapper">
            <nav className="sticky-nav">
                <a href="#" className="nav-logo-container">
                    <img
                        src="https://astroji.thefuture.university/assets/assets/images/logo.f4052b287762d9b75dd6b6d53e471448.png"
                        alt="Astroji Logo"
                        className="nav-logo"
                    />
                    <span className="nav-title">Astroji</span>
                </a>
                <div className="search-box">
                    <input
                        type="search"
                        id="search-input"
                        placeholder={lang === 'en' ? "Search products... (e.g., 'protection', 'peace')" : "उत्पाद खोजें... (जैसे, 'सुरक्षा', 'शांति')"}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button className="lang-switcher" onClick={toggleLang} title="Change Language">
                    {lang === 'en' ? 'हिन्दी' : 'English'}
                </button>
                <button className="share-btn" onClick={handleShare} title="Share this Guide">
                    <FaShareNodes />
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
