
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaYoutube } from 'react-icons/fa6';

const ProductCard = ({ product, lang }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPct = x / rect.width;
        const yPct = y / rect.height;
        const xRot = (0.5 - yPct) * 20;
        const yRot = (xPct - 0.5) * 20;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    };

    return (
        <motion.article
            ref={cardRef}
            className="product-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="product-image-container">
                <img src={product.image} alt={product.title[lang]} />
            </div>
            <h2>{product.title[lang]}</h2>
            <p>{product.description[lang]}</p>
            <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`cta-button ${product.type === 'pdf' ? 'pdf' : ''}`}
            >
                {product.type === 'pdf' ? <FaFilePdf /> : <FaYoutube />}
                {lang === 'en' ? (product.type === 'pdf' ? 'Open Here' : 'Watch Video') : (product.type === 'pdf' ? 'यहाँ खोलें' : 'वीडियो देखें')}
            </a>
        </motion.article>
    );
};

export default ProductCard;
