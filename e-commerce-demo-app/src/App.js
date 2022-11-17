import { Route, Routes } from "react-router-dom";
import AddToCart from "./components/addToCart/AddToCart";
import NewCarousel from "./components/common/NewCarousel";
import ProductDetails from "./components/common/ProductDetails";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NewHome from "./components/home/NewHome";
import NoMatch from "./components/noMatch/NoMatch";
import NewProductDetails from "./components/common/NewProductDetails"

const App = () => {
  return (
    <>
      <h1>Hello</h1>
        {/* <Header /> */}
        {/* <NewProductDetails/> */}
        {/* <Routes>
          <Route path="/" element={<NewHome/>}>Home</Route>
          <Route path="/contactUs" element={<ContactUs />}>Contact Us</Route>
          <Route path="/addToCart" element={<AddToCart />}>Add to Cart</Route>
          <Route path="/newproductdetails/:id" element={<NewProductDetails />}></Route> */}

          {/* //No match page or url */}
          {/* <Route path='*' element={<NoMatch />}></Route>
        </Routes>
        <Footer /> */}
    </>
  );
}

export default App;
