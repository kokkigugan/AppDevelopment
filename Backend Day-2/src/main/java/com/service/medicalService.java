package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.medical;
import com.repository.medicalRepository;

@Service
public class medicalService {

	@Autowired
	medicalRepository plantRepository;
	
	public Optional<List<medical>> getAll()   
	{  
		return Optional.of(plantRepository.findAll());
	}  
	
	public Optional<medical> getPlant(int id)   
	{  
		return plantRepository.findById(id); 
	}
	
	public void deletePlant(int id)   
	{  
		plantRepository.deleteById(id);  
	}
	
	public medical savePlant(medical p)   
	{  
		return plantRepository.save(p);  
	}
	
	public medical updatePlant(medical p)   
	{  
		plantRepository.save(p);  
		return p;  
	}

	
}
