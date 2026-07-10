package com.nilu.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
	
	

}
