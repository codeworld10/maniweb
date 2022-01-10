import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Result =() => {
    return (
        <p className="frmpr_r">Thank you for your inquiry. We will get in touch with you soon!</p>
    )
}

function Form(props) {
   
  const [result, showResult] = useState(false);
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_b0n4upa",  
          "template_9np2vfo",
          e.target,
          "user_n4Y2Swbi2MnJJLYCunc9c"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset();
        showResult(true);
    };
   
    return (
      <>
      <div className="frmcntr">
        <form ref={form} action="" onSubmit={sendEmail}>
            <div className="formwork">
                <h2 className="frmt">Get In touch</h2>
                <span className="frtxt">Full name</span>
                <br></br>
                <input className="input100" type="text" name ="fullName" required/>
                <br></br>
               
                <span className="frtxt">Email</span>
                <br></br>
                <input className="input100" type="text" name ="email" required/>
                <br></br>
               
                <span className="frtxt">Phone</span>
                <br></br>
                <input className="input100" type="text" name ="Phone" />
                <br></br>
               
                <span className="frtxt" >Company</span>
                <br></br>
                <input className="input100" type="text" name ="company" required/>
                <br></br>
                <span className="frtxt">Message</span>
                <br></br>
                <textarea className= "messagee" name="message" required></textarea>
                <br></br>
                <div className="ctbtn">
                <button className="btrr">Submit</button>
                </div>
                <div className="row">
                    {result ? <Result/> : null}
                </div>
            </div>
        </form>
        </div>
      </>
    );
  };

export default Form;
