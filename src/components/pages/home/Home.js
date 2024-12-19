import { useOutletContext } from "react-router-dom"

import Name from "../../components/Name"
import Quote from "../../components/Quote"
import Skills from "./Skills"
import Resume from "../experience/Resume"

function Home() {
    const {quoteObj: [quote, setQuote]} = useOutletContext()

    return (
        <div className='page home'>

            <div className='home__content'>

                <Name />

                {/* QUOTES api */}
                {quote?.content?.length && <Quote />}
                
                {/* Include skills - see github */}
                <Skills />

                <Resume />

            </div>

            </div>
    )
}

export default Home