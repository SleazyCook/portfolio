import { Link } from 'react-router-dom'

import navArray from '../data/nav.js'

function Navigation() {
    return(
        <div className="navigation">

        {navArray.map((navObj) => {
            return(
                <Link className='navigation__link' key={navObj.id} to={navObj.link}>
                    <span>{navObj.name}</span>
                </Link>
            )
        })}

        </div>
    )
}

export default Navigation