import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar.js'

import '../../styles/app/app.css'
import '../../styles/app/sidebar.css'
import '../../styles/pages/home.css'
import '../../styles/pages/experience.css'

const URL = 'https://api.quotable.io/quotes/random?maxLength=50'

function App() {

    // Window Size
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    // Quote API
    const [quote, setQuote] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setQuote(data[0]); // Assuming the response is an array of quotes
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [])

    return (
        <div className='app'>

            <div className='app__content'>

                {windowSize.width > 1000 ? <Sidebar /> : ''}

                <Outlet context={{
                    quoteObj: [quote, setQuote],
                    errorObj: [error, setError],
                    loadingObj: [loading, setLoading]
                }}
                    />

            </div>

        </div>
    )
}

export default App