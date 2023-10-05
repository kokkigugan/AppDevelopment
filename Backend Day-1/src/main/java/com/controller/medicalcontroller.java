package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.medical;
import com.service.medicalService;
@RestController
@CrossOrigin
@RequestMapping("/medical")

public class medicalcontroller {


	@Autowired 
	
	medicalService medicalService;
	
	@GetMapping("/getmedical")  
	public Optional<List<medical>> GetAllMedical()   
	{  
		return medicalService.getAll();  
	}  

	@GetMapping("/medical/{code}") 
	public ResponseEntity<Optional<medical>> GetMedical(@PathVariable int code)
	{  
		Optional<medical> re = medicalService.getPlant(code); 
		return ResponseEntity.ok(re);
	}  

	@DeleteMapping("/medical/{code}")  
	public ResponseEntity<Map<String, Boolean>> DeleteMedical(@PathVariable int code)   
	{  
		medicalService.deletePlant(code);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  

	@PostMapping("/newmedical")  
	public medical SaveMedical(@RequestBody medical p)   
	{  
		return medicalService.savePlant(p);  
	}  
	
	@PutMapping("/updatemedical")  
	public ResponseEntity<medical> UpdateMedical(@PathVariable int code,@RequestBody medical p)   
	{  
		medical pl = medicalService.updatePlant(p);  
		return ResponseEntity.ok(pl); 
	} 
	
}
