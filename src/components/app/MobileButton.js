import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MobileButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1000);
        };

        // Call the function once on mount to set the initial value
        handleResize();

        // Add event listener for resize events
        window.addEventListener('resize', handleResize);

        // Clean up event listener on unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

  if (!isMobile) return null;

    return(
        <div className='mobile-btn__container'>
            <Link to='/' className='mobile-btn'>
              X
            </Link>
        </div>
    )
}

export default MobileButton