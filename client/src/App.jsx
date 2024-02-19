import { Welcome, Product, Cart, Navbar, Services, Transactions, Footer } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
    <Product />
    <Cart />
  </div>
);

export default App;
