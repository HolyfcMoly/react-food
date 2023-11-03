import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";

function Recipe() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    const ingredients = Object.keys(recipe)
        .filter(
            (ingredient) =>
                ingredient.startsWith("strIngredient") && recipe[ingredient]
        )
        .map((ingredient) => recipe[ingredient]);

    const measures = Object.keys(recipe)
        .filter(
            (measure) => measure.startsWith("strMeasure") && recipe[measure]
        )
        .map((measure) => recipe[measure]);

    const ingredientsRows = ingredients.map((ingredient, index) => {
        return (
            <tr className="ingredient-row" key={index}>
                <td>{ingredient}</td>
                <td>{measures[index]}</td>
            </tr>
        );
    });

    useEffect(() => {
        getMealById(id).then((data) => {
            setRecipe(data.meals[0]);
        });
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="card recipe-card">
                    <div className="card-image">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    <div className="card-content">
                        <span className="card-title">{recipe.strMeal}</span>
                        <span>Category: {recipe.strCategory}</span>
                        <span className="right">Area: {recipe.strArea}</span>
                        <table className="ingredients">
                            <tbody>
                                <tr className="table-header">
                                    <th>Ingredients</th>
                                    <th>Measure</th>
                                </tr>
                                {ingredientsRows}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-content">
                        <p>{recipe.strInstructions}</p>
                        {recipe.strYoutube ? (
                        <div className='iframe center'>
                            <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
                        </div>
                        ) : null}
                    </div>
                </div>
            )}
            <button
                className="btn purple darken-3"
                onClick={() => navigate(-1)}
            >
                Go back
            </button>
        </>
    );
}

export { Recipe };
