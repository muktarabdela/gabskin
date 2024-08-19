import React, { useEffect } from 'react'
import ContactCard from '../components/Contact/ContactCard'

const Contact = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <div><ContactCard /></div>
    )
}

export default Contact