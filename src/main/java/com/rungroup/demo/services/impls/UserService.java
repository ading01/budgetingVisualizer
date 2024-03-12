package com.rungroup.demo.services.impls;

import com.rungroup.demo.models.User;
import com.rungroup.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        // Here, you can add additional logic before saving the user
        return userRepository.save(user);
    }

    public Long getUserIdByEmail(String email) {
        User user = userRepository.findByEmail(email);
        return user != null ? user.getId() : null;
    }



    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }


}
