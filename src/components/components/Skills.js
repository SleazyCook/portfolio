function Skills() {

    const codeArray = [
        {
            id: 1,
            name: 'Javascript',
            img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            id: 2,
            name: 'Typescript',
            img: 'https://github.com/user-attachments/assets/0f66057f-e906-4c07-b2b9-dcdd8034c947',
            link: 'https://www.typescriptlang.org/'
        },
        {
            id: 3,
            name: 'Python',
            img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg',
            link: 'https://www.python.org/'
        },
        {
            id: 4,
            name: 'Groovy Script',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Groovy-logo.svg/1024px-Groovy-logo.svg.png',
            link: 'https://groovy-lang.org/',
            width: '72'
        },
        {
            id: 5,
            name: 'PostgreSQL',
            img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg',
            link: 'https://www.postgresql.org/'
        },
        {
            id: 6,
            name: 'HTML 5',
            img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
            link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
        },
        {
            id: 7,
            name: 'CSS 3',
            img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
            link: 'https://www.w3.org/TR/CSS/#css'
        }        
    ]

    const devArray = [
        {
            id: 1,
            name: 'Node.js',
            img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
            link: 'https://nodejs.org/en/'
        },
        {
            id: 2,
            name: 'React.js',
            img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
            link: 'https://reactjs.org/'
        },
        {
            id: 3,
            name: 'Preact',
            img: 'https://preactjs.com/app-icon.png',
            link: 'https://preactjs.com/'
        },
        {
            id: 4,
            name: 'Next.js',
            img: 'https://github.com/user-attachments/assets/e2fb92e6-7948-4eda-bb5c-a46e4304ae35',
            link: 'https://nextjs.org/'
        },
        {
            id: 5,
            name: 'Sassy CSS',
            img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg',
            link: 'https://sass-lang.com'
        },
        {
            id: 6,
            name: 'Tailwind CSS',
            img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg',
            link: 'https://tailwindcss.com'
        },
        {
            id: 7,
            name: 'Netlify',
            img: 'https://static-00.iconduck.com/assets.00/netlify-icon-2045x2048-j2yz3d5y.png',
            link: 'https://www.netlify.com/'
        },
        {
            id: 8,
            name: 'Render',
            img: 'https://tutorials.yax.com/assets/images/articles/render-logo.png',
            link: 'https://render.com/'
        }
    ]

    const toolsArray = [
        {
            id: 1,
            name: 'Git',
            img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
            link: 'https://git-scm.com'
        },        
        {
            id: 2,
            name: 'AWS',
            img: 'https://github.com/user-attachments/assets/ea8a56ab-3684-4a88-a65c-66573a777280',
            link: 'https://aws.amazon.com/',
            width: '72'
        },        
        {
            id: 3,
            name: 'ChatGPT',
            img: 'https://freepnglogo.com/images/all_img/1700403373logo-chatgpt-png.png',
            link: 'https://openai.com/index/chatgpt/'
        },        
        {
            id: 4,
            name: 'Figma',
            img: 'https://blog.greggant.com/images/posts/2019-04-25-figma/Figma.png',
            link: 'https://www.figma.com/'
        },        
        {
            id: 5,
            name: 'Shopify',
            img: 'https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png',
            link: 'https://www.shopify.com'
        },        
        {
            id: 6,
            name: 'Magento',
            img: 'https://seeklogo.com/images/M/magento-logo-7F3911AE9E-seeklogo.com.png',
            link: 'https://business.adobe.com/products/magento/magento-commerce.html'
        },        
        {
            id: 7,
            name: 'BigCommerce',
            img: 'https://seeklogo.com/images/B/bigcommerce-logo-6907DF6845-seeklogo.com.png',
            link: 'https://www.bigcommerce.com'
        }
    ]

    return(
        <div className='skills'>

            Coding Languages
            <div className='skill-icon__container'>
                {codeArray.map((codeObj) => {
                    return(
                        <a className='skill-icon' href={codeObj.link}  key={codeObj.id} target='_blank'>
                            <img src={codeObj.img} alt={codeObj.name} style={{width: `${codeObj.width}px`}}/>
                        </a>
                    )
                })}
            </div>

            Web Development
            <div className='skill-icon__container'>
                {devArray.map((devObj) => {
                    return(
                        <a className='skill-icon' href={devObj.link}  key={devObj.id} target='_blank'>
                            <img src={devObj.img} alt={devObj.name} style={{width: `${devObj.width}px`}}/>
                        </a>
                    )
                })}
            </div>

            Tools
            <div className='skill-icon__container'>
                {toolsArray.map((toolsObj) => {
                    return(
                        <a className='skill-icon' href={toolsObj.link}  key={toolsObj.id} target='_blank'>
                            <img src={toolsObj.img} alt={toolsObj.name} style={{width: `${toolsObj.width}px`}}/>
                        </a>
                    )
                })}
            </div>

        </div>
    )
}

export default Skills