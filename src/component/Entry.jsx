import location from '../assets/loc.png'

export default function Entry(){
    return (<main className='main' >
        <div className='main-image-container'><img  className='main-image' src='https://scrimba.com/links/travel-journal-japan-image-url' alt="Japan Image"/></div>
        <div>
            <div className='loc'>   
                <img src={location} alt='Location icon' height='20px'/>
                <span>JAPAN</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
            </div>
            <h1>Mount Fungi</h1>
            <h6>27 May, 2023 - 8 Jun, 2023</h6>
            <p>
                The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.
            </p>
        </div>
    
    </main>)
}