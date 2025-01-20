import { useEffect } from 'react'

import MobileButton from '../../../app/MobileButton'

import interests from '../../../data/interests'

function Interests() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0})
      }, [])

    return(
        <div className='page interests'>

            <MobileButton />

            <h2 className='page__title'>
                Interests
            </h2>

            {interests.map((intObj) => {
                return(
                    <div className='card' key={intObj.id}>
                        {/* Image */}
                        <div className='card__image--interest-containr'>

                        
                            <img className='card__image' src={intObj.img} alt={intObj.name}/>
                        </div>
                        
                        {/* Name */}
                        <div className='card__title'>{intObj.name}</div>

                        {/* Details */}
                        {intObj.description}

                        <br /><br />

                        {/* Link text */}
                        <div className='flex-center'>
                            <a className='interests__social-btn' href={intObj.link} target='_blank'>
                                <span class="interests__social-btn--shadow"></span>
                                <span class="interests__social-btn--edge"></span>
                                <span class="interests__social-btn--front interests__social-btn--text"> {intObj.linkText}</span>
                            </a>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default Interests