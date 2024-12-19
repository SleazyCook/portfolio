import { useState } from 'react'
import { useOutletContext } from "react-router-dom"

import MobileHome from './MobileHome'
import Name from "../../components/Name"
import Quote from "../../components/Quote"
import Skills from "./Skills"
import Resume from "../experience/Resume"

function Home() {
    const {quoteObj: [quote, setQuote]} = useOutletContext()

    // Window Size
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    return (
        <div className='page home'>

            {windowSize.width < 1000 ? 
                <MobileHome /> 
                : 
                <div className='home__content'>

                    <Name />

                    {/* QUOTES api */}
                    {quote?.content?.length && <Quote />}
                    
                    {/* Include skills - see github */}
                    <Skills />

                    <Resume />

                </div>
            }

            </div>
    )
}

export default Home