import { Welcome, Product, Cart, Navbar, Footer } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    
    <Footer />
    <Product />
    <Cart />
  </div>
);

export default App;
