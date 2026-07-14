import { useNavigate } from "react-router-dom";
import college from "../images/college.jpg";
function Navbar(){

    const navigate = useNavigate();
    return(
        <div>
            <nav style={{background:"blue", height:"100px",padding:"10px"}} className='d-flex justify-content-center align-items-center' >
       
         <img src={college} alt="CollegeImage"
          style={{width:"80px",height:"80px",borderRadius:"50%"}} />
     <p style={{fontSize:"30px", color:"white",marginLeft:"10px",marginBottom:"0"}}>Shreemati Binzani Mahila Mahavidyalaya, Mahal, Nagpur &nbsp; &nbsp; &nbsp; &nbsp; 
      <button onClick={()=> navigate("/enroll")} style={{borderRadius:"10px",background:"orange"}}>Enroll Now</button></p><br/>
      </nav></div>
       
    );
}
export default Navbar;