import React from 'react';

const Card = ({ product }) => {

    return (

        <div className="card">
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}}</h5>
                <p className="card-text">{product.id}</p>
                <p className="card-text"><small className="text-muted">{product.price}</small></p>
                <p className="card-text"><small className="text-muted">{product.img}</small></p>
            </div>
        </div>
    );
};

export default Card;