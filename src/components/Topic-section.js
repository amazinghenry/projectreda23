import '../index.css'
import Data from '../topic-data.js'
import TopicItem from './Topic-item'


function TopicComponent() {

  const topics = Data.map((data)=> {
    return <
      TopicItem
      topic = { data.topic }
      key = { data.id }
      />
    })

    return (
        <section id="reda23-topics">
        <div className="container mycontainer">
          <h2 className="section-title">reda23 topics</h2>
          <div className="topic-list">
              <ul>{ topics }</ul>
          </div>
        </div>
      </section>
    )
}
export default TopicComponent;





