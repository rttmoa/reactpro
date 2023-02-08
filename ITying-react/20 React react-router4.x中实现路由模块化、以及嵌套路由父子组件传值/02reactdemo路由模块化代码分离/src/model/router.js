
import Home from '../components/Home';
import User from '../components/User';
import Shop from '../components/Shop';
import News from '../components/News';


let routes = [
    {
      path: "/",
      component: Home,
      exact:true
    },
    {
      path: "/shop",
      component: Shop
    },
    {
      path: "/user",
      component: User
    },
    {
      path: "/news",
      component: News
    }
];

export default routes;