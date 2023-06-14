import "../index.js"

const Video = () => {
    return (
        <section id="about-reda23" className="container-fluid">

            <div className="container mycontainer">
            <h2 className="section-title">REDA2022 Highlight</h2>
          <div className="videoWrapper">
            <iframe width="560"
                height="315"
                src="https://www.youtube.com/embed/VUi_9QmgDKo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
          </div>
            </div>
            
        </section>
    )
}
 
export default Video;