import { Outlet } from 'react-router-dom'

import Navigation from './Navigation'

import '../../styles/style.css'

function App() {
    return (
        <div>

            <Navigation />

            <Outlet context />

        </div>
    )
}

export default App