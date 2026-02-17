import { useState } from "react"

export default function Main(){


const [Items, setItems]=useState(['Cucumber','Carrot','Cabbage'])
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
          <ul>
            {listItems}
          </ul>
    </main>)
}