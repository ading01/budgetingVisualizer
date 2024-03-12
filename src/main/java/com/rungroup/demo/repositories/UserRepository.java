package com.rungroup.demo.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import com.rungroup.demo.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findByEmail(String email);

}
