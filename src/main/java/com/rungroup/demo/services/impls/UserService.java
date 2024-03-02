package com.rungroup.demo.services.impls;

import com.rungroup.demo.dtos.UserDTO;
import com.rungroup.demo.models.Transaction;
import com.rungroup.demo.models.User;
import com.rungroup.demo.repositories.TransactionRepository;
import com.rungroup.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @Transactional
    public User createUserWithTransaction(User user, Transaction transaction) {
        // Save the user first
        User savedUser = userRepository.save(user);

        // Associate transaction with the saved user and save the transaction
        transaction.setUser(savedUser);
        transactionRepository.save(transaction);

        // Optionally, link the transaction back to the user's set of transactions and return the user
        savedUser.setTransactions(Collections.singleton(transaction));
        return savedUser;
    }

    public User createUser(UserDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword()); // Consider encrypting the password
        return userRepository.save(user);
    }


}
