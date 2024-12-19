import { Link } from 'react-router-dom'

function MobileButton() {
    return(
        <div className='mobile-btn__container'>
            <Link to='/' className='mobile-btn'>
              X
            </Link>
        </div>
    )
}

export default MobileButton