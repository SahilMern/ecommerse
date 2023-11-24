import Cart from "./customer/components/Cart/Cart"
import Footer from "./customer/components/Footer/Footer"
import Navigation from "./customer/components/Navigation/Navigation"
// import Products from "./customer/components/Products/Products"
// import ProductsDetails from "./customer/components/productsDetails/productsDetails"
// import HomePages from "./customer/components/pages/HomePages/HomePages"

const App = () => {
  return (
    <div className="app">
      <Navigation />
    <div className="home">
      {/* <HomePages /> */}
      {/* <Products /> */}
      {/* <ProductsDetails /> */}
      <Cart />
      <br />
    </div>
    <Footer />
    </div>
  )
}

export default App