import * as React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div>
      <main >
        <Header/>
      </main>
      <div>
          <form action="">
          <h3>Get Intouch</h3>
          <p>Name</p>
          <input type="text" name="Name" id="" />
          <p>Type of Enquiry</p>
          <input type="text" name="Type of Enquiry" id="" />
          <p>Email Address</p>
          <input type="email" name="Email Address" id="" />
          <p>Phone Number</p>
          <input type="number" name="Phone Number" id="" />
          <p>Inquiry Details</p>
          <input type="text" name="Inquiry Details" id="" />
        </form>
      </div>
    </div>
    
  )
}

export default Contact;
