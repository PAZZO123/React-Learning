import map from '../assets/loc.png'
export default function Main(prop) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src= {prop.img.src}//"https://scrimba.com/links/travel-journal-japan-image-url" 
                    alt={prop.img.alt} 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={map} 
                    alt="map  icon"
                />
                <span className="country">{prop.country}</span>
                <a href={prop.href}>View on Google Maps</a>
                <h1 className="entry-title">{prop.title}</h1>
                <h4 className="trip-dates">{prop.date}</h4>
                <p className="entry-text">{prop.text}</p>
            </div>
            
        </article>
    )
}