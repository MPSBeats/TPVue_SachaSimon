import {createRouter,createWebHashHistory} from 'vue-router';
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import ChefPage from './pages/ChefPage.vue';
import CartPage from './pages/CartPage.vue';
import AboutPage from './pages/AboutPage.vue';

const routes = [
    {
        path:'/',
        component:HomePage
    },
    {
        path:'/login',
        component:LoginPage
    },
    {
        path:'/register',
        component:RegisterPage
    },
    {
        path:'/chef/:id',
        component:ChefPage
    },
    {
        path:'/cart',
        component:CartPage
    },
    {
        path:'/about',
        component:AboutPage
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})

export default router