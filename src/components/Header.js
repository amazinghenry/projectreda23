import '../index.css'
import thinkmintlogo from '../images/tmlogos.png'

function Header() {
    return (
    <header className="container-fluid">
      <div className="container">
        <div className="thinkmint-logos">
          <img src={ thinkmintlogo } alt="Thinkmint group logos" className='thinkmint-logos'/>
        </div>
        <div className="header-text">
          <h1 className='header-event-name'>REDA23</h1>
          <h2 className='header-event-theme'>Theme: New Reality, New Collaborations</h2>
          <h3 className='header-event-date'>Date: 26th and 27th September, 2023 </h3>
          <h3 className='header-event-time'>Time: 10:00AM Daily</h3>
          <h3 className='header-event-venue'>Venue: Eko Hotel and Suites, Victoria Island, Lagos</h3>
        </div>
        <div className="header-buttons">
          <a href="/" className='header-button-getaccess'>Get Exhibition Access</a>
          <a href="/" className='header-button-register'>Register to Attend</a>
        </div>
      </div>
    </header>

    )
}
export default Header