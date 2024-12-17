import Navigation from "./Navigation"
import Spotify from '../components/Spotify'

const iconArray = [
    {
        id: 1,
        name: "GitHub",
        link: "https://github.com/sleazycook",
        icon: "https://i.imgur.com/cXbOLY5.png"
    },
    {
        id: 2,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/developedbydrewford/",
        icon: "https://i.imgur.com/LryOdUs.png"
    },
    {
        id: 3,
        name: "Discord",
        link: "https://www.discordapp.com/users/sleazydilettante",
        icon: "https://i.imgur.com/sGZMTIv.png"
    },
    {
        id: 4,
        name: "Instagram",
        link: "https://www.instagram.com/developedbydrewford/",
        icon: "https://i.imgur.com/15CKT3S.png"
    },
    {
        id: 5,
        name: "Letterboxd",
        link: "https://letterboxd.com/sleazycook/",
        icon: "https://i.imgur.com/gEucxoX.png"
    }
]

function Sidebar() {
    return (
        <div className='sidebar'>

            {/* Avatar */}
            <img className='avatar' src='https://i.imgur.com/3QFCSt3.png' />
            <br />

            {/* Name */}
            Andrew Cook 

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