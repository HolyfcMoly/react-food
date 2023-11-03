import { Link } from "react-router-dom";
import { useState } from "react";

function CategoryItem(props) {
    const { strCategory, strCategoryDescription, strCategoryThumb } = props;
    const [showText, setShowText] = useState(false);

    const showFullText = () => {
        setShowText(!showText);
    };

    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategoryThumb} />
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p onClick={showFullText}>
                    {showText
                        ? strCategoryDescription
                        : strCategoryDescription.slice(0, 60) + "..."}
                </p>
            </div>
            <div className="card-action">
                <Link
                    to={`/category/${strCategory}`}
                    className="btn purple darken-3"
                >
                    Watch category
                </Link>
            </div>
        </div>
    );
}
export { CategoryItem };
