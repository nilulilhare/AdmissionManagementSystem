package com.nilu.main.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		try {
			admission.setPhoto(photo.getBytes());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			admission.setMarksheet(marksheet.getBytes());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Admission stuData=AdmissionServiceInterface.SaveData(admission);
		
		return new ResponseEntity<Admission>(stuData,HttpStatus.CREATED);
	}

}
