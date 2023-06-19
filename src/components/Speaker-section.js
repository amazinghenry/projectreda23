import '../index.css'
import SpeakerItem from './Speaker-item'
import Data from '../speaker-data.js'


const SpeakerComponent = () => {

    const speakers = Data.map((data)=>{
        // console.log(data)
        return <
          SpeakerItem
          key = { data.id }
          name = { data.name }
          position = { data.position }
          company = { data.company }
          imageUrl = { data.imageUrl }
          about = { data.about }
          />
    })

    return (
        <section id="speakers" className = "container-fluid">
        <div className="container mycontainer">
          <h2 className="section-title">reda23 speakers</h2>
          <div className="speaker-group">
           { speakers }
          </div>
        </div>
        </section>
     );

}
 
export default SpeakerComponent;