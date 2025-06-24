import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import './App.css';
import Header from './components/Header';
import { AppBody } from './components/AppBody';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ErrorPage from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import RecipesDetail from './components/RecipesDetail';
import { lazy, Suspense, useContext } from 'react';
import  {UserProvider} from './utils/UserContext';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import {Provider} from "react-redux"
import appStore from './utils/appStore';
import Cart from './components/Cart';

/*Header
Logo
Nav Item
**Body
-Search
---Name of res, Star rating, cuisine, diliver time
**footer
copyright
links
Address
contact*/

const Grocery = lazy(()=> import("./components/Grocery"));


function App() {

  // const {defultUser} = useContext(UserContext);

  
  return (
    //providing store to the app 
    <Provider store={appStore}> 
    <UserProvider>
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
      </div>
      </UserProvider>
      </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  children: [
    {
      path:'/',
      element: <AppBody />
    },
    {
      path:'/about',
      element: <About />
    },
    {
      path:'/contact',
      element: <Contact />
    },
     {
      path:'/login',
      element: <LoginPage />
    },
    {
      path:'/grocery',
      element: <Suspense fallback={<h1 className='text-2xl text-red-400'>Loading....</h1>}><Grocery /></Suspense>
    },
    {
      path:'/recipes/:userId',
      element: <RecipesDetail />
    },
     {
      path:'/cart',
      element: <Cart />
    }
  ],
  errorElement: <ErrorPage />,
  },
 
]);






const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);