
import React, { useState, useEffect } from 'react';
import { FaPlus, FaArrowUp, FaXmark, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa6';

const FAB = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isWiggling, setIsWiggling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
                if (isOpen) setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isOpen && window.scrollY > 300) {
                setIsWiggling(true);
                setTimeout(() => setIsWiggling(false), 1000);
            }
        }, 10000);
        return () => clearInterval(interval);
    }, [isOpen]);

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleMainClick = (e) => {
        e.stopPropagation();
        if (isScrolled && !isOpen) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            toggleMenu(e);
        }
    };

    return (
        <div
            className={`fab-container ${isVisible ? 'visible' : ''} ${isScrolled ? 'is-scrolled' : ''} ${isOpen ? 'active' : ''} ${isWiggling ? 'is-wiggling' : ''}`}
            onClick={() => isOpen && setIsOpen(false)}
        >
            <div className="fab-options">
                <a href="https://chat.whatsapp.com/KTu3RlGXcx53WnjDunoRoF?mode=wwt" target="_blank" rel="noopener noreferrer" className="fab-option fab-whatsapp"><FaWhatsapp /></a>
                <a href="https://www.instagram.com/astrojiofficial" target="_blank" rel="noopener noreferrer" className="fab-option fab-instagram"><FaInstagram /></a>
                <a href="https://www.youtube.com/@astrolearn_app" target="_blank" rel="noopener noreferrer" className="fab-option fab-youtube"><FaYoutube /></a>
            </div>

            <div className="fab-main-button" onClick={handleMainClick}>
                <FaPlus className="icon-plus" />
                <FaArrowUp className="icon-arrow-up" />
                <FaXmark className="icon-close" />
            </div>
        </div>
    );
};

export default FAB;
