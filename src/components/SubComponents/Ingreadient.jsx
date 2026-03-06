export default function Ingredient( props){
    return (
         <section>
            <h2> Ingredients on hands:</h2>
            <ul className='ingredients-list' arial-live='polite'>{props.Ingredients}</ul>
            { props.length>3&&<div className="get-recipe-container">
            <div ref={props.ref}>
                <h3>Ready for Recipe?</h3>
                <p>Generate a recipe from your list of Ingredients.</p>
            </div>
            <button onClick={props.handleRecipe}>Get a recipe</button>
            </div>}
           </section>
    )
}