

function Contact(){
    
    return <div id="contact">
        <div className="contacteiner" >
        <h1>Contact me</h1>
        <form id="contact-form" className="formcontact" onSubmit={(event)=>{
            event.preventDefault()
            alert("Obviamente esto no esta implementado duh \n Puto el que lee")
        }}>
            <label for="name">Name</label>
            <input id="name" placeholder="Insert your name"/>            
            <label for="textarea">Content</label>
            <textarea placeholder="Write me an email to work with me!"></textarea>
            <button id="sendbutton" type="submit">Send Email</button>
        </form>
        
        </div>
    </div>
}


export default Contact;