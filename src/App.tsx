import "./App.css";
import { Cart } from "./components/Cart";
import { ShopPage } from "./components/ShopPage";
import { CartProvder } from "./components/CartProvider";


function App() {

  return (
    <CartProvder>
      <ShopPage></ShopPage>
      <Cart></Cart>
    </CartProvder>
  );
}

export default App;
