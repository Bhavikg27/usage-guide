
import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGrid = ({ lang, searchQuery }) => {
    const filteredProducts = products.filter(product => {
        const query = searchQuery.toLowerCase();
        const titleEn = product.title.en.toLowerCase();
        const titleHi = product.title.hi.toLowerCase();
        const tags = product.tags.toLowerCase();
        return titleEn.includes(query) || titleHi.includes(query) || tags.includes(query);
    });

    return (
        <main className="container">
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} lang={lang} />
                    ))
                ) : (
                    <div id="no-results" style={{ display: 'block' }}>
                        {lang === 'en' ? 'No products found matching your search.' : 'आपकी खोज से मेल खाने वाला कोई उत्पाद नहीं मिला।'}
                    </div>
                )}
            </div>
        </main>
    );
};

export default ProductGrid;
