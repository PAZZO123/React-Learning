import globe from '../assets/Globe.png'

export default function Header(){
  return(<header className='header'>
    <img src={globe}/>
    <span>my travel journal.</span>
  </header>)
}