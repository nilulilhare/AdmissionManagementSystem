package com.nilu.main.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nilu.main.model.Admission;
import com.nilu.main.service.AdmissionServiceInterface;


@CrossOrigin("*")
@RestController
@RequestMapping("/admission")
public class AdmissionController {
	
	@Autowired
	private AdmissionServiceInterface AdmissionServiceInterface;
	@Autowired
	private ObjectMapper objectMapper;
	
	

	
	
	
	@PostMapping("/AddStudentData")
	public ResponseEntity<Admission> SaveStudentDetails(@RequestPart("admission") String admissionJson,@RequestPart("photo")MultipartFile photo,@RequestPart("marksheet")MultipartFile marksheet)
	{
		Admission admission=null;
		try {
			admission = objectMapper.readValue(admissionJson,Admission.class);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		try {
			admission.setPhoto(photo.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
		}
		try {
			admission.setMarksheet(marksheet.getBytes());
		} catch (IOException e) {
			e.printStackTrace();
		}
		Admission stuData=AdmissionServiceInterface.SaveData(admission);
		
		return new ResponseEntity<Admission>(stuData,HttpStatus.CREATED);
	}
	
	@GetMapping("/GetStudentData")
	public ResponseEntity<List<Admission>> getAllStudentData()
	{
		List<Admission>stuData=AdmissionServiceInterface.getAllStudentData();
		return new ResponseEntity<List<Admission>>(stuData,HttpStatus.OK);
	}
	
	@GetMapping("/GetSingleStudentData/{id}")
	public ResponseEntity<Admission> getSingleStudentData(@PathVariable int id)
	{
		Admission stuData=AdmissionServiceInterface.getSingleStudentData(id);
		return new ResponseEntity<Admission>(stuData,HttpStatus.OK);
	}
	
	@GetMapping("/GetStudentDataByName/{studentName}")
	public ResponseEntity<List<Admission>> getStudentDataByName(@PathVariable String studentName)
	{
		List<Admission> stuData=AdmissionServiceInterface.getStudentDataByName(studentName);
		return new ResponseEntity<List<Admission>>(stuData,HttpStatus.OK);
	}
	
	@PatchMapping("/UpdateStudentData/{id}")
	public ResponseEntity<Admission> UpdateStudendData(@PathVariable int id,  @RequestPart("admission") String admissionJson,
	        @RequestPart(value = "photo", required = false) MultipartFile photo,
	        @RequestPart(value = "marksheet", required = false) MultipartFile marksheet)throws IOException
	{
		  ObjectMapper objectMapper = new ObjectMapper();
		    Admission admission = objectMapper.readValue(admissionJson, Admission.class);
		Admission stuData=AdmissionServiceInterface.updateStudentData(id,admission,photo,marksheet);
		return new ResponseEntity<Admission>(stuData,HttpStatus.OK);
		
	}
	
	@DeleteMapping("/DeleteStudentData/{id}")
	public ResponseEntity<Admission>DeleteStudentData(@ PathVariable int id)
	{
		Admission stuData=AdmissionServiceInterface.DeleteStudentData(id);
		return new ResponseEntity<Admission>(stuData,HttpStatus.GONE);
		
	}

}
