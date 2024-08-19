import React, { useEffect } from 'react'
import Catalog from '../components/catelog/Catalog';

const Mini_stickers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Catalog />
        </div>
    )
}

export default Mini_stickers