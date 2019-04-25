import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import ProductsListPage from '../pages/ProductsListPage/ProductsListPage';
import BuyPage from '../pages/BuyPage/BuyPage';
import TaskManagerPage from '../pages/TaskManagerPage/TaskManagerPage' 
import ActionProductPage from '../pages/ActionProductPage/ActionProductPage';
const routes = [
    {
        name: 'home-page',
        path: '/',
        exact: true,
        component: ()=>{
            return <HomePage/>
        }
    },
    {
        name: 'products-list-page',
        path: '/products-list-page',
        exact: false,
        component: ()=>{
            return <ProductsListPage/>
        }
    },
    {
        name: 'buy-page',
        path: '/buy-page',
        exact: false,
        component: ()=>{
            return <BuyPage/>
        }
    },
    {
        name: 'task-manager-page',
        path: '/task-manager-page',
        exact: false,
        component: ()=>{
            return <TaskManagerPage/>
        }
    },
    {
        name: 'action-product-page',
        path: '/action-product-page',
        exact: false,
        component: ({history})=>{
            return <ActionProductPage history={history}/>
        }
    },
    {
        name: 'update-product-page',
        path: '/products/:id/update',
        exact: false,
        component: ({match, history})=>{
            return <ActionProductPage history={history} match={match}/>
        }
    }
]

export default routes;