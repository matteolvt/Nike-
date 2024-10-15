import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MySwiper from "./components/swiper";
import ItemsList from "./components/itemsList";
import Layout from "./components/layout";
import ProductMen from "./components/men"
import Help from "./components/help"
import JoinUs from "./components/joinUs"
import SignIn from "./components/signIn"
import Products from "./components/products"
import MenShoes from "./components/menShoes";

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : "/",
        element : (
          <>
            <MySwiper/>
            <ItemsList/>
          </>
        )
      },

      {
        path : "/help",
        element : (<Help/>)
      },

      {
        path : "/men",
        element : (<ProductMen/>)
      },

      {
        path : "/join-us",
        element : (<JoinUs/>)
      },

      {
        path : "/sign-in",
        element : (<SignIn/>)
      },

      {
        path : "/products",
        element : (<Products/>)
      },

      {
        path : "/men-shoes",
        element : (<MenShoes/>)
      }
    ]
  }
])

const App = () => {
  return (   
    <>
        <RouterProvider router={router}/>
    </>
  );
};

export default App;
