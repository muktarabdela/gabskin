import React, { useEffect } from 'react'
import CartCrd from '../components/cart/CartCrd'

const Cart = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <CartCrd />
    )
}

export default Cart