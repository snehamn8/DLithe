import React, { useState } from "react";
import FoodCategories from "./FoodCategories";
import FoodList from "./FoodList";
import FoodDescription from "./FoodDescription";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import "./App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFoodId, setSelectedFoodId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);
  const [page, setPage] = useState("categories");

  // Function to add items to cart
  const addToCart = (food) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.idMeal === food.idMeal);
      if (existingItem) {
        return prevItems.map((item) =>
          item.idMeal === food.idMeal ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { 
          ...food, 
          quantity: 1, 
          price: food.price ? food.price : Math.floor(Math.random() * 300) + 100
        }];
      }
    });
    setPage("cart");
  };

  // Function to add/remove items from wishlist
  const toggleWishlist = (food) => {
    let updatedWishlist;
    if (wishlist.some((item) => item.idMeal === food.idMeal)) {
      updatedWishlist = wishlist.filter((item) => item.idMeal !== food.idMeal);
    } else {
      updatedWishlist = [...wishlist, food];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <h1 className="app-title">Food Delivery App 🍔</h1>

      {/* Navbar */}
      <nav className="navbar">
        <button onClick={() => setPage("categories")}>🏠 Home</button>
        <button onClick={() => setPage("wishlist")}>❤️ Wishlist</button>
        <button onClick={() => setPage("cart")}>🛒 Cart</button>
      </nav>

      {page === "categories" && (
        <FoodCategories 
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            setPage("foodList");
          }} 
          cartItems={cartItems}
          setPage={setPage} // ✅ Ensure setPage is passed
        />
      )}

      {page === "foodList" && selectedCategory && (
        <>
          <button className="back-btn" onClick={() => setPage("categories")}>
            ⬅ Back to Categories
          </button>
          <FoodList
            category={selectedCategory}
            onSelectFood={(foodId) => {
              setSelectedFoodId(foodId);
              setPage("foodDescription");
            }}
            cartItems={cartItems}
            onNavigateToCart={() => setPage("cart")} // ✅ Fix navigation to cart
          />
        </>
      )}

      {page === "foodDescription" && selectedFoodId && (
        <>
          <button className="back-btn" onClick={() => setPage("foodList")}>
            ⬅ Back to Food List
          </button>
          <FoodDescription
            foodId={selectedFoodId}
            addToCart={addToCart}
            goToCart={() => setPage("cart")}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        </>
      )}

      {page === "cart" && (
        <>
          <button className="back-btn" onClick={() => setPage("categories")}>
            ⬅ Back to Categories
          </button>
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </>
      )}

      {page === "wishlist" && (
        <>
          <button className="back-btn" onClick={() => setPage("categories")}>
            ⬅ Back to Categories
          </button>
          <Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} />
        </>
      )}
    </div>
  );
};

export default App;