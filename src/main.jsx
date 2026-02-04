import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { createElement } from "react"
import './index.css'
import NavBar from './App.jsx'
//let name='Patrick straton'



const root =createRoot(document.getElementById('root'))
//const Element=<h1 className='greeting'> Hello {name} How is everything</h1>
root.render(
    <NavBar/>
)

