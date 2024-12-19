import { useOutletContext } from "react-router-dom"

import Name from "../../components/Name"
import Skills from "./Skills"
import Quote from "../../components/Quote"

function Home() {
    const {quoteObj: [quote, setQuote]} = useOutletContext()

    return (
        <div className='page home'>

            <Name />
            
            {/* Include skills - see github */}
            <Skills />

            {/* QUOTES api */}
            {quote.content.length && <Quote />}

            </div>
    )
}

export default Home