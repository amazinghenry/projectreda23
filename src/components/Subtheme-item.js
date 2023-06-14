import '../index.css'

const ConferenceTheme = (props) => {

    return ( 
        <div className = "theme-item">
            <img src = {`subthemes/${ props.iconImage }`}
            className = ""
            alt = { props.title }  />
            <h3> { props.title } </h3>
        </div>
     );
}
 
export default ConferenceTheme;