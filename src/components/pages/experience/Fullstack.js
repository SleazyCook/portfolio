const fullstackArray = [
    {
        id: 1,
        name: 'React',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
        link: 'https://reactjs.org/'
    },
    {
        id: 1,
        name: 'Javescript',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        id: 1,
        name: 'HTML 5',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
    },
    {
        id: 1,
        name: 'CSS 3',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
        link: 'https://www.w3.org/TR/CSS/#css'
    },
    {
        id: 1,
        name: 'Node.js',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
        link: 'https://nodejs.org/en/'
    },
    {
        id: 1,
        name: 'Git',
        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
        link: 'https://git-scm.com'
    },
    {
        id: 1,
        name: 'Netlify',
        img: 'https://static-00.iconduck.com/assets.00/netlify-icon-2045x2048-j2yz3d5y.png',
        link: 'https://www.netlify.com/'
    },
    {
        id: 1,
        name: 'Render',
        img: 'https://tutorials.yax.com/assets/images/articles/render-logo.png',
        link: 'https://render.com/'
    }
]

function Fullstack() {
    return(
        <div className='fullstack experience__section'>

            <div className='fullstack__header'>
                <img src='https://i.imgur.com/dal0qO4.png' alt='Fullstack Academy logo' />
                <div className='fullstack__header--sub'>
                    <div className='job-title'>
                        Engineering Student
                    </div>
                    <div>
                        <span>March 2024 - Present</span>
                        <span>San Antontio, Texas - Remote</span>
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
                    {fullstackArray.map((fullstackObj) => {
                        return(
                            <a className='skill-icon' href={fullstackObj.link}  key={fullstackObj.id} target='_blank'>
                                <img src={fullstackObj.img} alt={fullstackObj.name} style={{width: `${fullstackObj.width}px`}}/>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Fullstack