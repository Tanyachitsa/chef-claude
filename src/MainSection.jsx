import React from "react";
import IngredientsList from "./components/IngredientsList";
import { getRecipeFromMistral } from "./ai";
import ClaudeRecipe from "./components/ClaudeRecipe";
import { TypeAnimation } from "react-type-animation";

export default function MainSection() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <div className="main-section">
        <TypeAnimation
          sequence={[
            "Hi! 👋 Im AI Chef Claude. Fancy a Slow cooked lamb?",
            1000,
            "Hi! 👋 Im AI Chef Claude. Or a summer salad?",
            1000,
            "Hi! 👋 Im AI Chef Claude. And a sweet treat after?",
            1000,
            "Hi! 👋 Im AI Chef Claude. Add the ingredients on hand below.",
            4000,
          ]}
          wrapper="span"
          speed={20}
          style={{
            fontSize: "2.3em",
            display: "inline-block",
            color: "white",
            paddingBottom: "25px",
            textAlign: "center",
          }}
          repeat={Infinity}
          className="intro-title"
        />
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button>Add ingredient</button>
        </form>
        {ingredients.length > 0 && (
          <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
        )}
      </div>
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
