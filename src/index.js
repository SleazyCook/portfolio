import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import App from './components/app/App.js'
import ErrorPage from './components/app/ErrorPage.js'

import Home from './components/pages/Home.js'
import Experience from './components/pages/Experience.js'
import Education from './components/pages/Education.js'
import Interests from './components/pages/Interests.js'

const appElement = document.getElementById('app')
const root = createRoot(appElement)

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "experience",
                element: <Experience />
            },
            {
                path: "education",
                element: <Education />
            },
            {
                path: "interests",
                element: <Interests />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />)