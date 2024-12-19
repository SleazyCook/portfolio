import skills from '../../data/techSkills'

function Searchspring() {

    const searchspring = ['Javascript', 'Preact', 'HTML 5', 'CSS 3', 'Groovy Script', 'AWS', 'Shopify', 'Magento', 'BigCommerce', 'Git']

    const searchspringArray = skills.filter(skill => 
        searchspring.includes(skill.name)
    )

    return(
        <div className='searchspring experience__section'>

                <div className='searchspring__header'>
                    <img src='https://i.imgur.com/jGcPONP.png' alt='Searchspring logo' />
                    <div className='searchspring__header--sub'>
                        <div className='job-title'>
                            Software Engineer
                        </div>
                        <div>
                            <span>Feb 2024 - Present</span>
                            <span>San Antontio, TX - Remote</span>
                        </div>
                    </div>
                </div>

                <ul className='experience__details'>
                    <li>Respond to customer inquiries and assist in troubleshooting and resolving challenges</li>
                    <li>Research, diagnose, troubleshoot and identify solutions to resolve customer issues</li>
                    <li>Provide prompt and accurate feedback to customers</li>
                    <li>Review and publish code to production</li>
                    <li>Document knowledge in the form of knowledge base tech notes and articles</li>
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

            </div>
    )
}

export default Searchspring