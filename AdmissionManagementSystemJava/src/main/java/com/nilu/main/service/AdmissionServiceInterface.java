package com.nilu.main.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.nilu.main.model.Admission;

public interface AdmissionServiceInterface {

	

	Admission SaveData(Admission admission);


	List<Admission> getAllStudentData();


	Admission getSingleStudentData(int id);


	List<Admission> getStudentDataByName(String studentName);


	Admission updateStudentData(int id, Admission admission, MultipartFile photo, MultipartFile marksheet) throws IOException;


	Admission DeleteStudentData(int id);




	

	

	

	



}
