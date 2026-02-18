import { useState } from "react"

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
    return (<main>
       <form action={handleSubmit}  className="form"> 
        <input  type="text"
               placeholder="e.g Oregano"
               aria-label="Add ingredient"
               name='ingredient' />
         <button>Add Ingredient</button>
          </form>
           
         { listItems.length>0 &&  <section>
            <h2> Ingredients on hands:</h2>
            <ul className='ingredients-list' arial-live='polite'>{listItems}</ul>
            { listItems.length>3&&<div className="get-recipe-container">
            <div>
                <h3>Ready for Recipe?</h3>
                <p>Generate a recipe from your list of Ingredients.</p>
            </div>
            <button>Get a recipe</button>
            </div>}
           </section>}
    </main>)
}