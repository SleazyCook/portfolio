import { useOutletContext } from "react-router-dom"


function Quote() {
    const {quoteObj: [quote, setQuote]} = useOutletContext()

    return(
        <div className='quote'>

            <span>"{quote?.content}"</span>
            <span>- {quote?.author}</span>

        </div>
    )
}

export default Quote