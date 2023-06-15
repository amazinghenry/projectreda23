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
        <section id="speakers" class="container-fluid">
        <div class="container mycontainer">
          <h2 class="section-title">reda23 speakers</h2>
          <div class="speaker-group">
           { speakers }
          </div>
        </div>
        </section>
     );

}
 
export default SpeakerComponent;