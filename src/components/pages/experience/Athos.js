import ImageGallery from './ImageGallery'

import skills from '../../../data/techSkills'
import imageArray from '../../../data/image-gallery'

import AthosLogo from "../../components/AthosLogo";

const Athos = () => {

    // tech skills icons
    const searchspring = ['Javascript', 'Preact', 'HTML 5', 'CSS 3', 'Groovy Script', 'AWS', 'Shopify', 'Magento', 'BigCommerce', 'Git']
    const searchspringArray = skills.filter(skill => 
        searchspring.includes(skill.name)
    )

    // gallery images
    const searchImages = ['athos website', 'athos generative discovery']
    const gallery = imageArray.filter(image =>
        searchImages.includes(image.alt)
    )

    return(
        <div className='card'>
            

                <div className='athos__header'>
                    <a href="https://athoscommerce.com" target="_blank"><AthosLogo /></a>
                    <div className='searchspring__header--sub'>
                        <a href='https://athoscommerce.com/' className='job-title card__title card__link' target='_blank'>
                            Software Engineer
                        </a>
                        <div>
                            <span>Jul 2025 - Present</span>
                            <span>San Antontio, TX - Remote</span>
                        </div>
                    </div>
                </div>

                <ul className='experience__details'>
                    <li>Respond to customer inquiries with timely, helpful support, assisting in troubleshooting and resolving technical issues</li>
                    <li>Research, diagnose, and identify effective solutions for a wide range of customer challenges</li>
                    <li>Deliver prompt and accurate feedback to ensure a positive customer experience</li>
                    <li>Peer review and publish to production</li>
                    <li>Contribute to internal knowledge sharing by creating and maintaining technical documentation and knowledge base articles</li>
                </ul>

                <div className='techstack'>
                    <span>Tech Stack:</span>
                    <div className='experience__skills-container'>
                        {searchspringArray.map((searchspringObj) => {
                            return(
                                <a className='skill-icon' href={searchspringObj.link}  key={searchspringObj.id} target='_blank'>
                                    <img src={searchspringObj.img} alt={searchspringObj.name} style={{width: `${searchspringObj.width}px`}}/>
                                </a>
                            )
                        })}
                    </div>
                </div>

                <ImageGallery gallery={gallery}/>



        </div>
    )
}

export default Athos;