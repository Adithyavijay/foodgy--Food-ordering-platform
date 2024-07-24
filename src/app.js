import React from 'react';
import ReactDOM from 'react-dom/client';
import Header  from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,Outlet,RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestoMenu from './components/RestoMenu'
import { Link } from 'react-router-dom';;
import { lazy,Suspense } from 'react';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const Grocery =lazy(()=>import('./components/Grocery'))

const AppLayout =()=>{
    return (
        <> 
        <Provider store= {appStore}>
        <Header/>
        <Outlet/>
        </Provider>
        </>
        
    )
    
}
const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : '/',
                element : <Body/>
            } ,
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/contact',
                element : <Contact/>
            },
                {
                path :'/rest/:id',
                element :<RestoMenu/>           
            },
            {
                path  : '/grocery',
                element : <Suspense fallback={<h1 className="text-3xl font-bold">LOADING..</h1>}>
                <Grocery />
              </Suspense>
            } ,
            {
                path : '/cart',
                element : <Cart/>
            }
                   ]
    }  
  
]) 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)