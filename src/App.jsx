import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MySwiper from "./components/swiper";
import ItemsList from "./components/itemsList";
import Layout from "./components/layout";
import Men from "./components/men"
import Help from "./components/help"
import JoinUs from "./components/joinUs"
import SignIn from "./components/signIn"
import Products from "./components/products"

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
        element : (<Men/>)
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
