import '../index.css'
import ConferenceItem from './Subtheme-item'
import Data from '../subtheme-data.js'

const SubthemeComp = () => {

    const newsubtheme = Data.map((data)=>{
        // console.log(data)
        return <
          ConferenceItem
          key = { data.id }
          title = { data.title }
          iconImage = { data.iconImage }
          />
    })

    return (
        <section id="subtheme" className="container-fluid">
        <div className = "container mycontainer">
            <h2 className = "section-title">conference sub-theme</h2>
            <div className = "theme-group">
                { newsubtheme } 
            </div>
        </div>
    </section>
     );
}
 
export default SubthemeComp;

