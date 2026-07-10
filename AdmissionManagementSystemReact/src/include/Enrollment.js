import axios from "axios";
import { useForm} from 'react-hook-form';


function Enrollment(){
        const{register,handleSubmit,reset} = useForm();
       const clearForm=()=>{reset();};
      const onSubmit = async (data) => {
 
       
  if (data.photo) {
        console.log("Photo Length:", data.photo.length);
        console.log("First Photo:", data.photo[0]);
    }

    if (data.marksheet) {
        console.log("Marksheet Length:", data.marksheet.length);
        console.log("First Marksheet:", data.marksheet[0]);
    }

         const formData = new FormData();

    formData.append(
        "admission",
        JSON.stringify({
            studentName: data.studentName,
            fatherName: data.fatherName,
            motherName: data.motherName,
            dob: data.dob,
            gender: data.gender,
            category: data.category,
            email: data.email,
            mob: data.mob,
            course: data.course,
            pqualification: data.pqualification,
            percentage: data.percentage
        })
    );

    if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
    }

    if (data.marksheet && data.marksheet.length > 0) {
        formData.append("marksheet", data.marksheet[0]);
    }

   
  try {
    const response = await axios.post(
      "http://localhost:8080/admission/AddStudentData",
      formData
    );

    alert("Data Saved Successfully");
    console.log(response.data);

    reset();
  } catch (error) {
    console.error(error);
    alert("Data Save Failed");
  }
};

  
    return(
        
        <div  className="p-5">
        
        <center><h4 >Addmission Form</h4></center> <br/>
         <form onSubmit={handleSubmit(onSubmit)}>   
         <table>
           
        <tr>
         <td>  
       
        <div >
            <label htmlFor="sName" >
            Student Name:&nbsp;  </label>
            <input type="text" id='sName' placeholder="Enter Student Name"required {...register("studentName")} />
        </div></td><td>&nbsp;</td>
         <td>  
        <div >
            <label htmlFor="fName" >
           Father's Name:&nbsp;  </label>
            <input type="text" id='fName'placeholder="Enter Father Name" required {...register("fatherName")} />
        </div></td><td>&nbsp;</td>
             <td>  
         <div >
            <label htmlFor="mName" >
           Mother's Name:&nbsp;  </label>
            <input type="text" id='mName'placeholder="Enter Mother Name" required {...register("motherName")} />
        </div></td></tr><br/>
        <tr><td>
         <div >
            <label htmlFor="dob" >
           Date of Birth:&nbsp;  </label>
            <input type="text" id='dob' placeholder="Enter Date of Birth" required {...register("dob")} />
        </div></td><td>&nbsp;</td>
        <td>
         <div >
            <label htmlFor="gender" >
           Gender:&nbsp;  </label>
            <input type="radio"value="Male"{...register("gender", { required: true })}/>&nbsp;
    <label>Male</label> &nbsp;&nbsp;
        <input type="radio" value="Female" {...register("gender", { required: true })}/>&nbsp;
    <label>Female</label> &nbsp;&nbsp;
    <input type="radio" value="Other" {...register("gender", { required: true })} />&nbsp;
    <label>Other</label>
        </div></td><td>&nbsp;</td>
        <td>
         <div >
            <label htmlFor="cat" > Category:&nbsp;  </label>
            <select id="category" {...register("category", { required: true })} >
        <option value="">-- Select Category --</option>
        <option value="General">General</option>
        <option value="OBC">OBC</option>
        <option value="SC">SC</option>
        <option value="ST">ST</option>
        <option value="EWS">EWS</option>
        <option value="NT">NT</option>
        <option value="SBC">SBC</option>
    </select>
        </div></td></tr><br/>
        <tr><td>
         <div >
            <label htmlFor="mob" >
           Mobile Number:&nbsp;   </label>
            <input type="text" id='mob' placeholder="Enter Mobile Number" required {...register("mob")} />
        </div></td><td>&nbsp;</td>
        <td>
         <div >
            <label htmlFor="email" >
           Email:&nbsp;   </label>
            <input type="text" id='email' placeholder="Enter Email" required {...register("email")} />
        </div></td><td>&nbsp;</td>
        <td>
         <div >
            <label htmlFor="course" >
           Courses:&nbsp;   </label>
             <select id="course" {...register("course", { required: true })} >
        <option value="">-- Select Course --</option>
        <option value="BA">BA(Hindi)</option>
        <option value="MA">MA(Hindi)</option>
        </select>
        </div></td></tr><br/>
        <tr>
        <td>
         <div >
            <label htmlFor="per" >
           Percentage/CGPA:&nbsp;   </label>
            <input type="text" id='per' placeholder="Enter Percentage" required {...register("percentage")} />
        </div></td><td>&nbsp;</td>
        <td>       
         <div >
            <label htmlFor="pQua" >
          Previous Qualification:&nbsp;</label>
        <select id="pqualification" {...register("category", { required: true })} >
        <option value="">-- Select Previous Qualification --</option>
        <option value="Commerse">Commerce</option>
        <option value="Art">Art</option>
         <option value="Science">Science</option>
          <option value="BA">BA</option>
           <option value="B.Sc">B.Sc</option>
            <option value="B.Com">B.Com</option>
             <option value="BCA">BCA</option>
              <option value="BCCA">BCCA</option>
               <option value="Other">Other</option>
        </select>
        </div></td><td>&nbsp;</td>
        <div ><td> 
            <label htmlFor="photo" >Upload photo: &nbsp;  </label>
            <input type="file" id='photo' placeholder="Upload Photo" accept="" {...register("photo")} />
        </td></div></tr><br/>
        <tr><td>
         <div>
            <label htmlFor="mark" > Upload Marksheet:&nbsp;   </label>
            <input type="file" id='mark' placeholder="Upload Marksheet"  {...register("marksheet")} />
        </div></td>
        </tr>
         </table>

          <br/>
        <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-25">Submit</button> &nbsp;&nbsp;&nbsp;  
             <button type="button" className="btn btn-danger w-25" onClick={clearForm}>Clear</button> 
        </div>
        </form>
     
       
       </div>
    );
}
export default Enrollment;

