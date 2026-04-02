import {useState} from "react";

function Contact(){
    const [ email, setEmail]=useState("");
    const [ subject, setSubjeect]=useState("");
    const [ message, setMessage]=useState("");

    function handleSubmit(e){
        e.preventDefault();

        console.log(email);
        console.log(email);
        console.log(email);
    }


    return(

        <div className="div">
            <form className="form" onSubmit={handleSubmit} >
                <label className="label" > Email</label>
                <input  className="txt" type="Email"
                  placeholder="you@gmail.com"
                  onChange={(e)=> setEmail(e.target.value)}

                
                />
                <label className="label" > Subject</label>
                <input className="txt" type="text"
                    placeholder="enter subject"
                    onChange={(e)=> setSubject(e.target.value)}
                
                />
                <label  className="label"> Message</label>
                <textarea className="txt"
                  rows="text"
                  placeholder="enter Message"
                  onChange={(e)=> setMessage(e.target.value)}
                
                />
                <button className="btn" type="submit">send</button>
            </form>

        </div>
    )
}

export default Contact;