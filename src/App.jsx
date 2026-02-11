import globe from './assets/Globe.svg'
export default function App(){
  return(<header className='header'>
    <img src={globe}/>
    <span>my travel journal.</span>
  </header>)
}