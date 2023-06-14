import '../index.css'
import redalogo from '../images/reda-logo.png'

function Navbar() {

    return (
        <nav className='container-fluid'>
        <div className="container">
          <img src={ redalogo } className="redalogo" alt="Reda 2023 Logo"/>
          <div>
          <button className="dropbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
          <i className="fa-solid fa-bars"></i>
          </button>
  
          <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="staticBackdropLabel">REDA23 MENU</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className="offcanvas-content">
                <a href="#">about reda</a>
                <a href="">sub themes</a>
                <a href="">speakers</a>
                <a href="">conference agenda</a>
                <a href="">sponsor/exhibition</a>
                <a href="">register</a>
                <a href="">download</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </nav>

    )
}

export default Navbar