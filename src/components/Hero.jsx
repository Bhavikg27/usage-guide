
import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ lang }) => {
    return (
        <header className="hero">
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                src="https://astroji.thefuture.university/assets/assets/images/logo.f4052b287762d9b75dd6b6d53e471448.png"
                alt="Astroji Logo"
                className="hero-logo"
            />
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {lang === 'en' ? 'Astroji Product Usage Guide' : 'एस्ट्रोजी उत्पाद उपयोग मार्गदर्शिका'}
            </motion.h1>
        </header>
    );
};

export default Hero;
