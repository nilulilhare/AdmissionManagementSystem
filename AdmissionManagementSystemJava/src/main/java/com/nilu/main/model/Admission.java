package com.nilu.main.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admission {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String studentName;
	private String fatherName;
	private String motherName;
	private String dob;
	private String gender;
	private String category;
	private String email;
	private long mob;
	private String course;
	private String pqualification;
	private String percentage;
	
	@Lob
	private byte[] marksheet;
	@Lob
	private byte[]  photo;
	
}

//{"studentName":"Harshali",
//"motherName":"Nilima","fatherName":"Kunjanlal",
//"dob":761992,"gender":"Female","category":"OBC",
//"email":"harshali@123.com","mob":9140551220,
//"pqualification":"BA","course":"MA Hindi","percentage":"64%"}
