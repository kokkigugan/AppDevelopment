package com.aysuh.gugan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aysuh.gugan.Model.User;


public interface UserRepository extends JpaRepository<User,String>{
    
}
