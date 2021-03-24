import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const{productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h1>
                Your Product details
                <Product showAddToCart={false} product={product}></Product>
            </h1>
        </div>
    );
};

export default ProductDetails;