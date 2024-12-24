import React, {
    lazy,
    Suspense,
    useDeferredValue,
    useEffect,
    useState,
} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './Components/Header'
// import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Cart from './Components/Cart'
import Error from './Components/Error'
import Body from './Components/Body'
import RestaurantMenu from './Components/RestaurantMenu'
import UserContext from './utils/UserContext'
// import Grocery from './Components/Grocery'
const AboutUs = lazy(() => import('./Components/AboutUs'))
const Grocery = lazy(() => import('./Components/Grocery'))

function AppLayout() {
    const [userName, setUserName] = useState()
    useEffect(() => {
        //API to get name
        const name = 'VeeyaReeya'
        setUserName(name)
    }, [])
    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/', element: <Body /> },
            {
                path: '/about',
                element: <AboutUs />,
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <AboutUs />
                    </Suspense>
                ),
            },
            { path: '/contact', element: <ContactUs /> },
            { path: '/cart', element: <Cart /> },
            {
                path: '/grocery',
                element: <Grocery />,
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            { path: '/restaurants/:resId', element: <RestaurantMenu /> },
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
