// import { useNavigate } from "react-router-dom";
// import college from "../images/college.jpg";
// function Navbar(){

//     const navigate = useNavigate();
//     return(
//         <div>
//             <nav style={{background:"blue", height:"100px",padding:"10px"}} className='d-flex justify-content-center align-items-center' >
       
//          <img src={college} alt="CollegeImage"
//           style={{width:"80px",height:"80px",borderRadius:"50%"}} />
//      <p style={{fontSize:"30px", color:"white",marginLeft:"10px",marginBottom:"0"}}>Shreemati Binzani Mahila Mahavidyalaya, Mahal, Nagpur &nbsp; &nbsp; &nbsp; &nbsp; 
//       <button onClick={()=> navigate("/enroll")} style={{borderRadius:"10px",background:"orange"}}>Enroll Now</button></p><br/>
//       </nav></div>
       
//     );
// }
// export default Navbar;

import { useNavigate } from "react-router-dom";
import college from "../images/college.jpg";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      className="container-fluid d-flex flex-column flex-md-row justify-content-center align-items-center p-3"
      style={{ background: "blue" }}
    >
      {/* Logo */}
      <img
        src={college}
        alt="CollegeImage"
        style={{
          width: "100%",
          height: "70px",
          borderRadius: "50%",
        }}
      />

      {/* College Name */}
      <h4
        className="text-white text-center my-2 my-md-0 mx-md-3"
        style={{ fontWeight: "bold" }}
      >
        Shreemati Binzani Mahila Mahavidyalaya, Mahal, Nagpur
      </h4>

      {/* Button */}
      <button
        className="btn btn-warning"
        onClick={() => navigate("/enroll")}
      >
        Enroll Now
      </button>
    </nav>
  );
}

export default Navbar;