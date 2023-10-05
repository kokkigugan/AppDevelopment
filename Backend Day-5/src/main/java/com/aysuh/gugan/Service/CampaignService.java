package com.aysuh.gugan.Service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.aysuh.gugan.Model.Campaign;
import com.aysuh.gugan.Model.enumerate.Role;
import com.aysuh.gugan.Repository.CampaignRepository;
import com.aysuh.gugan.dto.request.CampaignRequest;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class CampaignService {
	
	private final CampaignRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice;
//	 private final AuthenticationManager authenticationManager;
	public boolean registertemp(CampaignRequest request) {
		// TODO Auto-generated method stub
	
			
	    var user = Campaign.builder()
	            .id(request.getId())
	            .campaignName(request.getCampaignName())
	            .businessName(request.getBusinessName())
	            .email(request.getEmail())
	            .phno(request.getPhno())
	            .description(request.getDescription())
	            .role(Role.USER)
	            .build();
	    repository.save(user);
//	    var jwtToken = jwtservice.generateToken(user);
	    
		return true;
	}
	 public List<Campaign> getAllProducts() {
	        List<Campaign> productList = repository.findAll();

	        return productList;
	    }
//	public List<TemplateResponse> updateProduct(TemplateRequest request, Long pid) {
//		 Template product = repository.findByPid(pid);
//
//	        if (product != null) {
//	            product.setId(request.getId());
//	            product.setFirstname(request.getFirstname());
//	            product.setLastname(request.getLastname());
//	            product.setEmail(request.getEmail());;
//	            product.setPhoneno(request.getPhoneno());
//	            product.setEducation(request.getEducation());
//	            product.setCgpa(request.getCgpa());
//	            repository.save(product);
//
//	            return product;
//	        } else {
//	            throw new EntityNotFoundException("Product with pid " + pid + " not found");
//	        }
//	}

}