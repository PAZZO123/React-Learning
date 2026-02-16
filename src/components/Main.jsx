import { useState } from "react"



//let Items=


export default function Main(){


const [Items, setItems]=useState(['Cucumber','Carrot','Cabbage'])
const listItems=Items.map(item=><li key={item}>{item}</li>)

function handleSubmit(event){
    event.preventDefault()
    console.log('Form Submitted')
    const formData=new FormData(event.currentTarget)
    const forItem=formData.get('ingredient')
    setItems(items=>[...items, forItem])
}
    return (<main>
       <form onSubmit={handleSubmit} action="" className="form"> 
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