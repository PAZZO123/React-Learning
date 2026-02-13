import Header from './components/Heads'
import Main from './components/Main'
import dataArr from './data'

const Alldata=dataArr.map((data)=>{
   return (<Main 
    key={data.id}
    img={{
   src:data.img.src,
   alt:data.img.alt}}
   title={data.title}
   href={data.href}
   text={data.text}
   date={data.date}
   country={data.country}/>)
})

export default function App(){
  return(<>
  <Header/>
  {Alldata}
   
</>
  )
}