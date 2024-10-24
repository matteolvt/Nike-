import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MySwiper from "./components/swiper";
import ItemsList from "./components/itemsList";
import Layout from "./components/layout";
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
import KidsShoes from "./components/kidShoes";
import KidsClothes from "./components/kidsClothes";
import KidsBags from "./components/kidsBags";
import KidsAccessories from "./components/kidsAccessories";
import SingleItem from "./components/singleItem";
import { CartProvider } from "./components/cartContext";
import ShoppingBag from "./components/shoppingBag";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ProductFilter from "./components/productFilter";
import SuccessPage from "./components/success";

const stripePromise = loadStripe('pk_test_51QCdJgHs61E5vpBsMETOqjZoek8o1TwoHFdB0fNWchZCeXzV50St0LqDKxZ5Lw88nXuMXJGljsEew7yHv8SZqlGz00yIW0GDhY');

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <MySwiper />
            <ItemsList />
          </>
        ),
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/join-us",
        element: <JoinUs />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/men-shoes",
        element: <MenShoes />,
      },
      {
        path: "/men-clothes",
        element: <MenClothes />,
      },
      {
        path: "/men-bags",
        element: <MenBags />,
      },
      {
        path: "/men-accessories",
        element: <MenAccessories />,
      },
      {
        path: "/women-shoes",
        element: <WomenShoes />,
      },
      {
        path: "/women-clothes",
        element: <WomenClothes />,
      },
      {
        path: "/women-bags",
        element: <WomenBags />,
      },
      {
        path: "/women-accessories",
        element: <WomenAccessories />,
      },
      {
        path: "/kids-shoes",
        element: <KidsShoes />,
      },
      {
        path: "/kids-clothes",
        element: <KidsClothes />,
      },
      {
        path: "/kids-bags",
        element: <KidsBags />,
      },
      {
        path: "/kids-accessories",
        element: <KidsAccessories />,
      },
      {
        path: "/single-item/:id",
        element: <SingleItem />,
      },
      {
        path: "/productFilter",
        element: <ProductFilter />,
      },
      {
        path: "/successPage",
        element: <SuccessPage />,
      },
      {
        path: "/shoppingBag",
        element: (
          <Elements stripe={stripePromise}>
            <ShoppingBag />
          </Elements>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      {" "}
      {/* Enveloppez RouterProvider avec CartProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
