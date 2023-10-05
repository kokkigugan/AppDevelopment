package com.aysuh.gugan.Model;



import com.aysuh.gugan.Model.enumerate.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Campaigns")
public class Campaign {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.UUID)
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String businessName;
	private String campaignName;
	private String description;
	private String email;
	private String phno;
	  @Enumerated(EnumType.STRING)
	private Role role;



}
