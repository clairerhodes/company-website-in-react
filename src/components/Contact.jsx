const contactInfo = [
  {
    email: "contact@lilpookies.org",
    phone: "1-800-POOK-IES",
 }
]
 
 


const Contact = () => {
    return (
      <>
        <h1>Contact the Pookies</h1>
            <div>
              <h2>Reach out to a Pookie</h2>
              <form className="contactForm">
              <label htmlFor="name">Name: </label>
                <input 
                  id="name"
                  type="text"
                  />
              <label htmlFor="email">Email: </label>
                <input 
                  id="email"
                  type="text"
                  size="40"
                  />
              <label htmlFor="message">Message: </label>
                <input 
                  id="message"
                  type="text"
                  size="55"
                  />
              </form>
            </div>
        <ul>
            {contactInfo.map((contact, index) => (
            
                <div className="contact"
                key={index}>
                    <li>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                    </li>
                </div>
            ))}
         </ul>
      </>
    );
  };
  
  export default Contact;