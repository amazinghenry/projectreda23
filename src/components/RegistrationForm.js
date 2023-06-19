import React, { useState, useRef } from "react"



const RegistrationForm = () => {
  const formRef = useRef(null)
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxI1oQU43FO1mSNTLtPMlG3osYVeM-BeQgmujkVhSiKn2gvR40OsU3kBhNmrK3WpMMk0w/exec'
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [formClass, setFormClass] = useState('')


// submit event
const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(formRef.current),
  }).then(res => {
        setMessage('REGISTRATION SUCCESSFUL')
        setFormClass('success-message')

        setTimeout(() => {
          setFormClass('')
          setMessage('')
        }, 5000);
        
        setLoading(false)
        formRef.current.reset()
        })
        .catch(err => console.log(err))
}
    return (
        <section id="registration-form" className="container-fluid" >

        <div className="container mycontainer">
          <h2 className="section-title">Register to Attend</h2>
          <form name="submit-to-google-sheet" ref ={ formRef } onSubmit ={handleSubmit}>
            <div className="name-group">
              <input  type="text" name = "firstname" className="firstname form-control" placeholder="Your first name" required />
              <input type="text" name = "lastname" className="lastname form-control" placeholder="Your last name" required />
            </div>
  
            <div className="contact-group">
              <input  type="email" name = "email" className="email form-control" placeholder="Your email" required />
              <input  type="tel" name = "phone" className="phone form-control" placeholder="Phone number" required />
            </div>
  
            <div className="company-group">
              <input  type="text" name = "company" className="company form-control" placeholder="Name of company" required />
              <input type="text" name = "position" className="position form-control" placeholder="Position in company" required />
            </div>
  
            <input type="submit" value={loading ? "loading..." : "REGISTER" } className="form-control submit-button"/>
            
          </form>
          <p className={ formClass }>{ message }</p>
        </div>
        
      </section>

    );
}

 
export default RegistrationForm;