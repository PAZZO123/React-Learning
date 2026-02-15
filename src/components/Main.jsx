
let Items=['Cucumber','Carrot','Cabbage']
const listItems=Items.map(item=><li key={item}>{item}</li>)

function handleSubmit(event){
    event.preventDefault()
    console.log('Form Submitted')
    const formData=new FormData(event.currentTarget)
    const forItem=formData.get('ingredient')
    listItems.push(<li key={forItem}>{forItem}</li>)
    console.log(forItem)
    console.log(listItems)
}

export default function Main(){
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