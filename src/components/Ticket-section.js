import '../index.css'

const TicketSection = () => {

    return ( 
        <section id="reda23-tickets">
        <div className="container mycontainer">
          <h2 className="section-title">Reda23 Tickets</h2>
          <p>Whether you are looking for long-term strategies or for the future,
            the ideas and visions of the speakers will inspire you and help you develop
            concrete measures to thrive in the real estate industry.</p>
          <div className="ticket-group">

            <div className="ticket-item">
              <div className="ticket-head">
                <h3 className="regular">N50,000</h3>
              </div>
              <div className="ticket-body">
                <p>X1 Full Access to all Section</p>
                <p>Access to networking events</p>
                <p>Certificate of attendance</p>
                <p>Access to award ceremony</p>
                <a href="/" className="ticket-button">Buy Regular Ticket</a>
              </div>
            </div>

            <div className="ticket-item">
              <div className="ticket-head">
                <h3 className="standard">N100,000</h3>
              </div>
              <div className="ticket-body">
                <p>X1 Full Access to all Section</p>
                <p>Access to networking events</p>
                <p>Certificate of attendance</p>
                <p>Access to award ceremony</p>
                <p>Logo on event brochure and media commmunications</p>
                <a href="/" className="ticket-button">Buy Standard Ticket</a>
              </div>
            </div>

            <div className="ticket-item">
              <div className="ticket-head">
                <h3 className="vip">N120,000</h3>
              </div>
              <div className="ticket-body">
                <p> X1 Full Access to all Section</p>
                <p>Access to networking events</p>
                <p>Certificate of attendance</p>
                <p>Access to award ceremony</p>
                <p>Company profile &#38; logo on event brochure and media communications</p>
                <p></p>
                <a href="/" className="ticket-button">Buy VIP Ticket</a>
              </div>
            </div>

            <div className="ticket-item">
              <div className="ticket-head">
                <h3 className="six">N250,000</h3>
              </div>
              <div className="ticket-body">
                <p>X6 Full Access to all Section</p>
                <p>Access to networking events</p>
                <p>Certificate of attendance</p>
                <p>Access to award ceremony</p>
                <p>Company profile &#38; logo on event brochure</p>
                <p>Display of company branded items</p>
                <a href="/" className="ticket-button">Buy Table for Six Ticket</a>
              </div>
            </div>

          </div>
        </div>
      </section>

    );
}
 
export default TicketSection;