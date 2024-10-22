import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MySwiper from "./components/swiper";
import ItemsList from "./components/itemsList";
import Layout from "./components/layout";
import ProductMen from "./components/men";
import ProductWomen from "./components/women";
import Help from "./components/help";
import JoinUs from "./components/joinUs";
import SignIn from "./components/signIn";
import Products from "./components/products";
import MenShoes from "./components/menShoes";
import MenClothes from "./components/menClothes";
import MenBags from "./components/menBags";
import MenAccessories from "./components/menAccessories";
import WomenShoes from "./components/womenShoes";
import WomenClothes from "./components/womenClothes";
import WomenBags from "./components/womenBags";
import WomenAccessories from "./components/womenAccessories";
import ProductKids from "./components/kids";
import KidsShoes from "./components/kidShoes";
import KidsClothes from "./components/kidsClothes";
import KidsBags from "./components/kidsBags";
import KidsAccessories from "./components/kidsAccessories";
import SingleItem from "./components/singleItem";
import { CartProvider } from "./components/cartContext";
import ShoppingBag from "./components/shoppingBag";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <MySwiper />
            <ItemsList />
          </>
        )
      },
      {
        path: "/help",
        element: (<Help />)
      },
      {
        path: "/men",
        element: (<ProductMen />)
      },
      {
        path: "/join-us",
        element: (<JoinUs />)
      },
      {
        path: "/sign-in",
        element: (<SignIn />)
      },
      {
        path: "/products",
        element: (<Products />)
      },
      {
        path: "/men-shoes",
        element: (<MenShoes />)
      },
      {
        path: "/men-clothes",
        element: (<MenClothes />)
      },
      {
        path: "/men-bags",
        element: (<MenBags />)
      },
      {
        path: "/men-accessories",
        element: (<MenAccessories />)
      },
      {
        path: "/women",
        element: (<ProductWomen />)
      },
      {
        path: "/women-shoes",
        element: (<WomenShoes />)
      },
      {
        path: "/women-clothes",
        element: (<WomenClothes />)
      },
      {
        path: "/women-bags",
        element: (<WomenBags />)
      },
      {
        path: "/women-accessories",
        element: (<WomenAccessories />)
      },
      {
        path: "/kids",
        element: (<ProductKids />)
      },
      {
        path: "/kids-shoes",
        element: (<KidsShoes />)
      },
      {
        path: "/kids-clothes",
        element: (<KidsClothes />)
      },
      {
        path: "/kids-bags",
        element: (<KidsBags />)
      },
      {
        path: "/kids-accessories",
        element: (<KidsAccessories />)
      },
      {
        path: "/single-item",
        element: (<SingleItem />)
      },
      {
        path: "/shoppingBag",
        element: (<ShoppingBag />)
      }
    ]
  }
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
