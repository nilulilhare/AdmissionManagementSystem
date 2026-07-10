import { Link } from "react-router-dom";
import college from "../images/college.jpg";
import phdphoto from "../images/kunj.jpg";
import admission from "../images/clg.jpg";
import kunj from "../images/phdphoto.jpg";
import { useEffect, useState } from "react";

function Home(){
  const images = [college, phdphoto, admission, kunj];
 
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // 3 second

    return () => clearInterval(interval);
  }, []);
    
    return(
        <div>
            <center>
     
      <div style={{border:"1px solid black", width:"1360px",padding:"20px",background:"black"}}>
     
    
      <button style={{borderRadius:"20px",background:"orange",fontSize:"30px"}}>Admission Open 20026-27</button><br/>
      <p style={{fontSize:"20px",color:"white"}}>Department of Hindi<br/>
       Dr. Kunjan Sir</p>
      <p style={{fontSize:"15px", color:"white"}}>M.A, M.Com, M.Ed, Net, Set, Ph.D (Hindi) </p>   <br/> 
      <Link to="/enroll">
      <button style={{borderRadius:"20px",background:"orange"}}>Enroll Now
        </button></Link> &nbsp; &nbsp; 
      <Link to="/contact">
      <button style={{borderRadius:"20px",background:"orange"}}>
        Call Us</button></Link>
       </div>
     
      <div style={{background:"black"}}>
        <img src={images[currentImage]} alt="College Image" style={{width:"500px",height:"300px"}} />
      </div>
       
       <div><br/>
       <h5  style={{color:"blue"}}>UG PG Department of Hindi</h5> 
       <p style={{fontSize:"18px"}}> Admission Information & Support Block<br/>
        "Empowering Minds Through Language, Literature and Research"</p>
       </div>
      <div>
          <h5 style={{color:"blue"}}>About</h5>
          <p style={{fontSize:"18px"}}>The Department of Hindi is committed to promoting excellence in Hindi Language, Literature, Linguistics,<br/>
           Translation Studies, Journalism, and Research. The department provides quality education, academic<br/>
            guidance, and opportunities for intellectual growth.</p>
      </div>
      <div>
        <h5 style={{color:"blue"}}>Program Offered </h5>
        <p style={{fontSize:"18px"}}> Master of Arts (M.A.) in Hindi<br/>
         Bachlor of Arts(B.A) in Hindi</p>
      </div>
      <div>
       <h5 style={{color:"blue"}}> Why Choose Hindi?</h5>
        <p style={{fontSize:"18px"}}> Rich Literary Heritage<br/>
         Career Opportunities in Teaching and Research<br/>
         Translation and Content Writing<br/>
         Journalism and Media<br/>
         Civil Services and Competitive Examinations<br/>
         Cultural and Literary Studies</p>
      </div>
      <div style={{background:"black",height:"100px"}}>
        
            <p style={{paddingTop:"30px",color:"white"}}> 2000 + Student
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              Expert Faculty
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 
                Daily Classes
               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

            100%  Pass Result Ratio
          </p>
       
              </div>
      <div>
        <h5 style={{color:"blue"}}>Admission Support Services</h5>
        <p style={{fontSize:"18px"}}> Admission Guidance <br/>
         Course Information<br/>
         Eligibility Assistance<br/>
         Document Verification<br/>
         Scholarship Information<br/>
         Career Counseling<br/>
         Student Query Support</p>
      </div>
      <div>
       <h5 style={{color:"blue"}}>Required Documents</h5>
        <p style={{fontSize:"18px"}}> Graduation Mark Sheets<br/>
        Transfer Certificate<br/>
        Migration Certificate (if applicable)<br/>
        Aadhaar Card<br/>
        Passport Size Photographs<br/>
        Caste Certificate (if applicable)</p>
        </div>

        <div>
          <h5 style={{color:"blue"}}>Career Opportunities</h5>
          <p style={{fontSize:"18px"}}> Lecturer / Assistant Professor<br/>
          Research Scholar<br/>
          Translator<br/>
          Content Writer<br/>
          Journalist<br/>
          Editor<br/>
          Civil Services Professional</p>
        </div>
        <div style={{background:"black",height:"100px",paddingTop:"10px"}}>
          <p style={{color:"white"}}>Limited seats available. Enroll today to secure <br/>
          your child future<br/>
          Contact Us - Dr Kunjan Sir 9765619608
          </p>
        </div>
        <div>
          <h5 style={{color:"green"}}>Contact Us<br/>
          Department of Hindi<br/>
          Shreemati Binzani Mahila Mahavidyalaya, Mahal, Nagpur</h5>
          Phone: 9422122900,9763895653,9422332769 <br/>
          <p style={{color:"blue"}}>Email: sbmm1961@gmail.com<br/>
          Website: wwww.binzanimahilamahavidyalaya.edu.in</p><br/>
        </div>
        <div>
         <p style={{fontSize:"20px",color:"Purple"}}> "Hindi: A Gateway to Knowledge, Culture and Career."<br/>
          "Join the Department of Hindi and Shape Your Future."</p> 
        </div>
       </center>
        </div>
    );
}
export default Home;