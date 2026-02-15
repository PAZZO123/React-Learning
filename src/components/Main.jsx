import map from '../assets/loc.png'
export default function Main({img, country, href, title, date, text }) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src= {img.src}//"https://scrimba.com/links/travel-journal-japan-image-url" 
                    alt={img.alt} 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={map} 
                    alt="map  icon"
                />
                <span className="country">{country}</span>
                <a href={href}>View on Google Maps</a>
                <h1 className="entry-title">{title}</h1>
                <h4 className="trip-dates">{date}</h4>
                <p className="entry-text">{text}</p>
            </div>
            
        </article>
    )
}