const searchspringArray = [
    {
        id: 1,
        name: 'Javascript',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        id: 2,
        name: 'Preact',
        img: 'https://preactjs.com/app-icon.png',
        link: 'https://preactjs.com/'
    },
    {
        id: 3,
        name: 'HTML 5',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
    },
    {
        id: 4,
        name: 'CSS',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
        link: 'https://www.w3.org/TR/CSS/#css'
    },
    {
        id: 5,
        name: 'Groovy script',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Groovy-logo.svg/1024px-Groovy-logo.svg.png',
        link: 'https://groovy-lang.org/',
        width: 72
    },
    {
        id: 6,
        name: 'JSON',
        img: 'https://i.imgur.com/Z3Nkh8S.png',
        link: 'https://www.json.org/json-en.html'
    },
    {
        id: 7,
        name: 'AWS',
        img: 'https://github.com/user-attachments/assets/ea8a56ab-3684-4a88-a65c-66573a777280',
        link: 'https://aws.amazon.com/',
        width: 72
    },
    {
        id: 8,
        name: 'Shopify',
        img: 'https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png',
        link: 'https://www.shopify.com'
    },
    {
        id: 9,
        name: 'Magento',
        img: 'https://seeklogo.com/images/M/magento-logo-7F3911AE9E-seeklogo.com.png',
        link: 'https://business.adobe.com/products/magento/magento-commerce.html'
    },
    {
        id: 10,
        name: 'BigCommerce',
        img: 'https://seeklogo.com/images/B/bigcommerce-logo-6907DF6845-seeklogo.com.png',
        link: 'https://www.bigcommerce.com'
    },
    {
        id: 11,
        name: 'Git',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
        link: 'https://git-scm.com'
    }
]

function Searchspring() {
    return(
        <div className='searchspring experience__section'>

                <div className='searchspring__header'>
                    <img src='https://i.imgur.com/jGcPONP.png' alt='Searchspring logo' />
                    <div className='searchspring__header--sub'>
                        <div className='job-title'>
                            Software Engineer
                        </div>
                        <div>
                            <span>March 2024 - Present</span>
                            <span>San Antontio, Texas - Remote</span>
                        </div>
                    </div>
                </div>

                <ul className='searchspring__details'>
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