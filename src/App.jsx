import Header from './components/Heads'
import Main from './components/Main'
import dataArr from './data'

const Alldata=dataArr.map((data)=>{
   return (<Main img={ {
   src:data.img.src,
   alt:data.img.alt}}
   href={data.href}
   text={data.title}
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