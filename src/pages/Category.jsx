import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            setMeals(data.meals);
        });
    }, [name]);
    return <>
    <button className="btn purple darken-3" onClick={() => navigate(-1)}>Go back</button>
    {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>;
}

export { Category };
