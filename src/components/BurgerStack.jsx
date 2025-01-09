import Ingredient from "./Ingredient";

const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        stack.length ? (
            <ul>
                {stack.map((ingredient, index) => (
                    <Ingredient key={index} ingredient={ingredient} onClick={() => removeFromBurger(index)} buttonLabel={'X'} />
                ))}
            </ul>
        ) : (
            <p style={{ backgroundColor: "darkblue", width: "100%", padding: "8px", borderRadius: "8px", textAlign: "center" }}>No Ingredients</p>
        )
    )
};

export default BurgerStack;