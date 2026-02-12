import map from '../assets/loc.png'
export default function Main(prop) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src= {prop.src}//"https://scrimba.com/links/travel-journal-japan-image-url" 
                    alt={prop.name.tolowerCase()} 
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
                <h2 className="entry-title">{prop.name}</h2>
                <p className="trip-dates">{prop.date}</p>
                <p className="entry-text">{prop.description}</p>
            </div>
            
        </article>
    )
}