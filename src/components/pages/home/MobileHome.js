import { Link } from 'react-router-dom'

import Name from '../../components/Name'
import Skills from './Skills.js'

import iconArray from '../../../data/social'
import navArray from '../../../data/nav.js'

function MobileHome() {
    return (
        <div className='mobile-home'>

            {/* Social Icon Links */}
            <div className='social-icons'>
                    {iconArray.map((iconObj) => {
                        return(
                            <a className='social-icons__link' href={iconObj.link} key={iconObj.id} target='_blank' >
                                <img className='social-icons__icon' src={iconObj.icon} alt={iconObj.name}/>
                            </a>
                        )
                    })}
                </div>

            <Name />

            <Skills />



            <div className='mobile-link__container'>
                {navArray.map((item, index) => {
                    // skip 'Home', first index
                    if (index == 0) return null;
                    return(
                        <Link className='mobile-link' to={item.link} key={item.id}>
                            <span>{item.name}</span>
                        </Link>
                    )
                })}
            </div>




        </div>
    )
}
export default MobileHome