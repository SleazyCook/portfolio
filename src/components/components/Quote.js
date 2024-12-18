import { useState, useEffect } from 'react'

const URL = 'https://zenquotes.io/api/quotes/'

function Quote() {

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL, {mode: 'no-cors'})
            console.log(result)
        }
        fetchData()
    })

    return(
        <div className='quote'>

            Quote - API Response
        </div>
    )
}

export default Quote