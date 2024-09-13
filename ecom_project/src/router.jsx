import App from './App.jsx'

import {
  createBrowserRouter
} from "react-router-dom";

import CategoryProducts from './pages/CategoryProducts.jsx';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/categories/:category",
    element:<CategoryProducts/>
  },
  {
    path:"/categories/:category/products/:product",
    element:<Products/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/checkout",
    element:<Checkout/>
  },
]);
export default router;