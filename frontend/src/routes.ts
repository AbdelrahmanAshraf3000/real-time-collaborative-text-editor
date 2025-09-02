

import Home from './pages/Home'
import type { RouteType } from './types/routes';



const routes : RouteType[] = [
    {
        path: '/',
        element: Home
    },
    
    {
        path: '/home',
        element: Home
    }
]
export default routes;