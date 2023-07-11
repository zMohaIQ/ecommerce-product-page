/* eslint-disable no-unused-vars */
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Nav />
      <Hero />
    </CartProvider>
  );
}

export default App;
