package com.aysuh.gugan.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aysuh.gugan.Model.User;


public interface UserRepositorys extends JpaRepository<User,Long> {

	Optional<User>findByEmail(String email);
}
