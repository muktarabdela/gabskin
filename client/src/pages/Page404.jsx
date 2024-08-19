import React, { useEffect } from 'react'
import Card404 from '../components/404/404Card'

const Page404 = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Card404 />
        </div>
    )
}

export default Page404