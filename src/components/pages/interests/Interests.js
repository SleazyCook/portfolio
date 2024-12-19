import Instagram from "./Instagram"
import Letterboxd from './Letterboxd'

import interests from '../../data/interests'

function Interests() {

    return(
        <div className='page interests'>

            <h2 className='page__title'>
                Interests
            </h2>

            {/* movies */}
            {/* photography */}
            {/* concerts */}
            {/* d&d */}

            {interests.map((intObj) => {
                return(
                    <div className='card' key={intObj.id}>
                        {/* Image */}
                        <img className='card__image' src={intObj.img} alt={intObj.name}/>

                        {/* Name */}
                        {intObj.name}

                        {/* Details */}
                        {intObj.description}

                        {/* Link text */}
                        <a href={intObj.link} target='_blank'>
                            {intObj.linkText}
                        </a>
                    </div>
                )
            })}

        </div>
    )
}

export default Interests