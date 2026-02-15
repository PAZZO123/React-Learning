import icon from '../assets/Chef Claude Icon.png'
//comment

export default function Header(){
    return (<header className='header'>
        <img src={icon} alt="Claude Chief Icon" />
        <span className='chief'>Chef Claude</span> 
         
    </header>)
}