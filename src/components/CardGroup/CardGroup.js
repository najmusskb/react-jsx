import React from 'react';
import Card from './Card/Card';

const CardGroup = () => {

    const Products = [

        { id: 1, name: 'mac book', price: 250000, img: "https://media-cdn.tripadvisor.com/media/photo-s/0d/37/3c/3b/hakaluki-haor-moulvibazar.jpg" },
        { id: 2, name: 'mac pro', price: 250000, img: "https://media-cdn.tripadvisor.com/media/photo-s/0d/37/3c/3b/hakaluki-haor-moulvibazar.jpg" },
        { id: 3, name: 'mac gro', price: 250000, img: "https://media-cdn.tripadvisor.com/media/photo-s/0d/37/3c/3b/hakaluki-haor-moulvibazar.jpg" },
        { id: 4, name: 'mac tro', price: 250000, img: "https://media-cdn.tripadvisor.com/media/photo-s/0d/37/3c/3b/hakaluki-haor-moulvibazar.jpg" },
        { id: 5, name: 'mac cro', price: 250000, img: "https://media-cdn.tripadvisor.com/media/photo-s/0d/37/3c/3b/hakaluki-haor-moulvibazar.jpg" }

    ]
    return (
        <div className="card-group">

            {
                Products.map(product => <Card key={product.id} product={product}></Card>)
            }

        </div>
    );
};

export default CardGroup;