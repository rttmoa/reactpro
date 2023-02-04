

import App from '@/App.jsx';
import Home from '@/views/Home.jsx';
import About from '@/views/About.jsx';

export const routes = [
    {
        path: "/",
        component: App,
        routes: [
            {
                path: "/home",
                component: Home
            },
            {
                path: "/about",
                component: About
            }
        ]
    }
];