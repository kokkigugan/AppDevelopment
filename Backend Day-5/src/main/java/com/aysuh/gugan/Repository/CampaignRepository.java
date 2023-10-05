package com.aysuh.gugan.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aysuh.gugan.Model.Campaign;




public interface CampaignRepository extends JpaRepository<Campaign,Long> {
//	  List<Template> findByPid(Long id);

}