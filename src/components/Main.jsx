import { useState } from "react"
import { getRecipeFromMistral } from '../ai'
import Ingredient from "./SubComponents/Ingreadient"
import Recipe from "./SubComponents/Recipe"


export default function Main(){


const [Items, setItems]=useState([])
const listItems=Items.map(item=><li key={item}>{item}</li>)

function handleSubmit(formData){
    //event.preventDefault()
    console.log('Form Submitted')
    //const formData=new FormData(event.currentTarget)
    const forItem=formData.get('ingredient')
    setItems(items=>[...items, forItem])
}

const [recipeShown, setRecipeShown]=useState("")

async function handleRecipe(){
    console.log("HF Key:", import.meta.env.VITE_HF_API_KEY)
    //setRecipeShown(prev=>!prev)
    let recipe = await getRecipeFromMistral(Items)
    console.log(recipe)
    setRecipeShown(recipe)
}
    return (<main>
       <form action={handleSubmit}  className="form"> 
        <input  type="text"
               placeholder="e.g Oregano"
               aria-label="Add ingredient"
               name='ingredient' />
         <button>Add Ingredient</button>
          </form>
           
         { Items.length>0 && <Ingredient handleRecipe={handleRecipe}
          Ingredients={listItems}
          length={Items.length}/> }

        <Recipe recipe={recipeShown}/>
    </main>)
}