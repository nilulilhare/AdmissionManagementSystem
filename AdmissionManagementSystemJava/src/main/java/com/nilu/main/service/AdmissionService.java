package com.nilu.main.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nilu.main.model.Admission;
import com.nilu.main.repository.AdmissionRepository;

@Service
public class AdmissionService implements AdmissionServiceInterface {

	@Autowired
	public AdmissionRepository AdmissionRepository;

	@Override
	public Admission SaveData(Admission admission) {
		
		return AdmissionRepository.save(admission);
	}

	@Override
	public List<Admission> getAllStudentData() {
		List<Admission> stuData=AdmissionRepository.findAll();
		return stuData;
	}

	@Override
	public Admission getSingleStudentData(int id) {
		Optional<Admission> stuData=AdmissionRepository.findById(id);
		return stuData.get();
	}

	@Override
	public List<Admission> getStudentDataByName(String studentName) {
		List<Admission> stuData=AdmissionRepository.findByStudentName(studentName);
		return stuData;
	}

	@Override
	public Admission updateStudentData(int id, Admission admission, MultipartFile photo, MultipartFile marksheet)
			throws IOException {
		 {

			    Optional<Admission> opData = AdmissionRepository.findById(id);

			    if (opData.isPresent()) {

			        Admission originalAdmission = opData.get();

			        originalAdmission.setStudentName(admission.getStudentName());
			        originalAdmission.setFatherName(admission.getFatherName());
			        originalAdmission.setMotherName(admission.getMotherName());
			        originalAdmission.setDob(admission.getDob());
			        originalAdmission.setGender(admission.getGender());
			        originalAdmission.setCategory(admission.getCategory());
			        originalAdmission.setEmail(admission.getEmail());
			        originalAdmission.setMob(admission.getMob());
			        originalAdmission.setCourse(admission.getCourse());
			        originalAdmission.setPqualification(admission.getPqualification());
			        originalAdmission.setPercentage(admission.getPercentage());

			        // Photo update
			        if (photo != null && !photo.isEmpty()) {
			            originalAdmission.setPhoto(photo.getBytes());
			        }

			        // Marksheet update
			        if (marksheet != null && !marksheet.isEmpty()) {
			            originalAdmission.setMarksheet(marksheet.getBytes());
			        }

			        return AdmissionRepository.save(originalAdmission);
			    }

			    return null;
			}
	}

	@Override
	public Admission DeleteStudentData(int id) {
		Optional<Admission>opData=AdmissionRepository.findById(id);
		if(opData.isPresent())
		{
			AdmissionRepository.deleteById(id);
		}
		else
		{
			throw new RuntimeException("Record is not found on id "+ id);
		}
		return null;
	}
	
	

	
	
	

}
