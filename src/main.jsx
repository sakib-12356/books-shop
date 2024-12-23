import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './components/Home'
import BookDetails from './components/BookDetails/BookDetails'
import ListedBooks from './components/ListedBooks/ListedBooks'
import PagesRead from './components/PagesRead/PagesRead'
import WishList from './components/WishList/WishList'
import ViewList from './components/ViewList/ViewList'


const router = createBrowserRouter([
  {
   path:"/",
   element:<Layout></Layout>,
   children:[
    {
      path:"/",
      element:<Home/>,
     },
     
   {
    path:"/bookDetils/:id",
    loader:()=>fetch("Books.json"),
    element:<BookDetails/>,
  },
  {
    path:"/listedBooks",
    loader:()=>fetch("Books.json"),
    element:<ListedBooks/>
  },
  {
    path:"/pagesRead",
    // loader:()=>fetch("Books.json"),
    element:<PagesRead/>,
  },
  {
    path:"/wishlist",
    loader:()=>fetch("Books.json"),
    element:<WishList/>,
  },
  {
    path:"/viewTheList",
    loader:()=>fetch("Books.json"),
    element:<ViewList/>
  },

  ],},]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
