package com.nilu.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nilu.main.model.Admission;

@Repository
public interface AdmissionRepository extends JpaRepository<Admission, Integer> {

	Admission save(String admissionJson);
	
	List<Admission> findByStudentName(String studentName);

}
