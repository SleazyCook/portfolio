import iconArray from "../data/social"
import Navigation from "./Navigation"
import Spotify from '../components/Spotify'

function Sidebar() {

    return (
        <div className='sidebar'>

            {/* Avatar */}
            <img className='avatar' src='https://i.imgur.com/T09m2sD.png' />
            <br />

            {/* Name */}
            Andrew Cook <br />
            Houston, TX

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

            {/* Navigation Menu */}
            <Navigation />

            <Spotify />
            
        </div>
    )
}

export default Sidebar