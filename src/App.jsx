import "./App.css";
import { useState} from "react";
import Navbar from "./components/navbar";
import products from "./data/data.json";
import Products from "./components/Products";
import Order from "./components/Order";

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  
  
  const rechercherProduits = (e) => {
    setSearch(e.target.value);
  };
  
  
  const ajouterProduitCommande = (product) => {
    const existe = cart.find((p) => p.id === product.id);

    if (existe) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };
  
  
  const calculerTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
  };
  
  
  const validerCommande = () => {
    if (cart.length === 0) {
      window.alert("Le panier est vide.");
      return;
    }
    window.print();
  };
  
  
  const annulerCommande = () => {
    if (cart.length === 0) return;
    setCart([]);
  };


  return (
    <>
    <Navbar />
    <div className="container">
      <Products
        products={products}
        search={search}
        onSearchChange={rechercherProduits}
        onAdd={ajouterProduitCommande}
      />

      <Order
        cart={cart}
        total={calculerTotal()}
        onValidate={validerCommande}
        onCancel={annulerCommande}
  /> 
    </div>
    </>
  );
}

export default App;
