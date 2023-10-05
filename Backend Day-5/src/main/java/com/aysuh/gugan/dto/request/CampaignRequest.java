package com.aysuh.gugan.dto.request;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CampaignRequest {
	
	private Long id;
	private String businessName;
	private String campaignName;
	private String description;
	private String email;
	private String phno;

}