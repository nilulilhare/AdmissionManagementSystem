
import clg from "../images/clg.jpg";

function Contact(){
    return(
        <div>
         
            
      <div>
            <h3 style={{background:"black", padding:"10px",color:"white"}}> <i className="bi bi-telephone-fill"> </i>
            Contact Us</h3>
            <p style={{padding:"10px", background:"orange"}}>
           <i className="bi bi-telephone-fill"> </i> Dr. Kunjan Sir 9765619608<br/>
            <i className="bi bi-telephone-fill"> </i> Vinay Upadhayay 9834131849<br/>
            <i className="bi bi-telephone-fill"> </i> Guddi Khan 8847786034</p>
    </div>
    <div style={{background:"pink",textAlign:"center"}}>
        <img src={clg} alt="CollegeImage" />
      </div>

        </div>
    )
}
export default Contact;