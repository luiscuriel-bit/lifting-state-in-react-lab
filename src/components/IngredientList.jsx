import Ingredient from "./Ingredient";
import { availableIngredients } from "../App";

const IngredientList = ({ addToBurger }) => {
    return <ul>
        {availableIngredients.map((ingredient, index) => (
            <Ingredient key={index} ingredient={ingredient} onClick={() => addToBurger(ingredient)} buttonLabel={'+'} />
        ))}
    </ul>;
};

export default IngredientList;
