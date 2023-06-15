const RegistrationForm = () => {
    return (
        <section id="registration-form" class="container-fluid" >
        <div className="container mycontainer">
          <h2 className="section-title">Register to Attend</h2>
          <form name="submit-to-google-sheet">
            <div class="name-group">
              <input type="text" name = "firstname" className="firstname form-control" placeholder="Your first name" required />
              <input type="text" name = "lastname" className="lastname form-control" placeholder="Your last name" required />
            </div>
  
            <div className="contact-group">
              <input type="email" name = "email" className="email form-control" placeholder="Your email" required />
              <input type="tel" name = "phone" className="phone form-control" placeholder="Phone number" required />
            </div>
  
            <div class="company-group">
              <input type="text" name = "company" className="company form-control" placeholder="Name of company" required />
              <input type="text" name = "position" className="position form-control" placeholder="Position in company" required />
            </div>
  
            <input type="submit" value="Submit" className="form-control submit-button"/>
            
          </form>
          <p id="form-response"></p>
        </div>
        
      </section>

    );
}
 
export default RegistrationForm;