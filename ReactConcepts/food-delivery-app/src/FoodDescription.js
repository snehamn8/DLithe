import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FoodDescription.css";

const FoodDescription = ({ foodId, addToCart, goToCart }) => {
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
        );
        if (response.data.meals && response.data.meals.length > 0) {
          setFood(response.data.meals[0]);
        } else {
          setFood(null);
        }
      } catch (error) {
        console.error("Error fetching food details:", error);
        setFood(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodDetails();
  }, [foodId]);

   // ✅ Handle Wishlist Toggle
   const toggleWishlist = (food) => {
    setWishlist((prevWishlist) => {
      const isItemInWishlist = prevWishlist.some((item) => item.idMeal === food.idMeal);

      let updatedWishlist;
      if (isItemInWishlist) {
        updatedWishlist = prevWishlist.filter((item) => item.idMeal !== food.idMeal);
      } else {
        updatedWishlist = [...prevWishlist, food];
      }

      // ✅ Update localStorage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      return updatedWishlist; // ✅ Ensure state updates
    });
  };

  if (loading) return <p className="loading shimmer">Loading...</p>;
  if (!food) return <p className="no-data fade-in">No data available for this food item.</p>;

  return (
    <div className="food-container glassmorphism fade-in-up">
      <div className="food-image zoom-in">
        {food.strMealThumb ? (
          <img
            src={food.strMealThumb}
            alt={food.strMeal}
            className="food-img hover-scale glow-border"
          />
        ) : (
          <p className="no-image">No image available</p>
        )}
      </div>
      <div className="food-details slide-up">
        <h2 className="food-title glow-text neon-text">{food.strMeal || "Unknown Food"}</h2>
        <p className="food-price pulse">₹{Math.floor(Math.random() * 300) + 100}</p>
        <p className="food-description fade-in">
          {food.strInstructions
            ? expanded
              ? food.strInstructions
              : `${food.strInstructions.slice(0, 120)}...`
            : "No description available"}
          {food.strInstructions && (
            <button className="read-more pulse shine-effect" onClick={() => setExpanded(!expanded)}>
              {expanded ? " Show Less" : " Read More"}
            </button>
          )}
        </p>
        <div className="button-container">
          <button className="add-to-cart bounce gradient-button" onClick={() => addToCart(food)}>
            Add to Cart 🛒
          </button>
          <button className="view-cart slide-in gradient-button" onClick={goToCart}>
            View Cart
          </button>
          <button
            className={`wishlist-button ${wishlist.some((item) => item.idMeal === food.idMeal) ? "active" : ""}`}
            onClick={() => toggleWishlist(food)}
          >
            {wishlist.some((item) => item.idMeal === food.idMeal) ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDescription;
