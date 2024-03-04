import App from '../App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BeerLoader from '../Components/Beer/Beer.loader';
import Beer from '../Components/Beer/Beer';

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <h1>Ha habido un error.</h1>
        }, 
        {
            path: '/beer/:id',
            element: <Beer />,
            loader: BeerLoader,
            errorElement: <h1>Ha habido un error.</h1>
        }, 
        {
            path: '*',
            element: <h1>Error 404: esta página no existe.</h1>
        }
    ])

    return <RouterProvider router={router}/>
}

export default AppRoutes

