import '../index.css'

const SpeakerItem = (props) => {

    return ( 
        <div class="speaker-item">
            <a
            href="/"
            className="speaker-link">
            <img src = {`speakers/${ props.imageUrl }`} alt= { props.name } className='speaker-image' />
            <h3 className = "speaker-title"> {props.name}</h3>
            <p className = "speaker-position"> {props.position}</p>
            <p className = "speaker-company"> {props.company}</p>
            </a>
        </div>
     );
}
 
export default SpeakerItem;