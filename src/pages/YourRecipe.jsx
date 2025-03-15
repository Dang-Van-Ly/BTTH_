import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/YourRecipe.css";
import avt from "../assets/avt.png";

const API_URL = "https://67c821fd0acf98d070850937.mockapi.io/recipes";

const YourRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched recipes:", data);
                setRecipes(data);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="recipe-container">
            <Header />
            <div className="user-info">
                <img src={avt} alt="Logo" className="avatar" />
                <div className="user-details">
                    <h1>Emma Gonzalez's Recipe Box</h1>
                    <p>
                        Emma Gonzalez is a deputy editor at Cheffify, bringing her expertise as a former cooking editor 
                        at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks 
                        and food publications. Originally from East Los Angeles, Emma now resides in New York City, 
                        where she explores a wide range of culinary delights.
                    </p>
                    <div className="subscribe-share">
                        <span>6.5k Subscribers</span>
                        <button className="share-btn">Share</button>
                    </div>
                </div>
            </div>

            <div className="nav-tabs">
                <span className="active">Saved Recipes</span>
                <span>Folders</span>
                <span>Recipes by Genevieve</span>
            </div>

            {loading && <p className="loading">Loading recipes...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && recipes.length === 0 && <p className="no-recipes">No recipes found.</p>}

            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <img className="recipe-image" src={recipe.image} alt={recipe.name} />
                        <h3>{recipe.name}</h3>
                        <p>{recipe.time} minutes</p>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>10</button>
                <button>11</button>
            </div>

            <Footer />
        </div>
    );
};

export default YourRecipe;
