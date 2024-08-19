import React, { useEffect } from 'react'
import WorkCard from '../components/works/WorkCard'

const Works = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <WorkCard />
    </div>
  )
}

export default Works