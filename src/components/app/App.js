import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar.js'

import '../../styles/app/app.css'
import '../../styles/app/sidebar.css'
import '../../styles/pages/home.css'
import '../../styles/pages/experience.css'

const URL = 'https://zenquotes.io/api/quotes/[random]'

function App() {

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL, {mode: 'no-cors'})
            console.log(result)
        }
        fetchData()
    }, [])

    return (
        <div className='app'>

            <div className='app__content'>

                <Sidebar />

                <Outlet context />

            </div>

        </div>
    )
}

export default App