package com.rungroup.demo.controllers;

import com.rungroup.demo.dtos.UserDTO;
import com.rungroup.demo.dtos.UserTransactionDTO;
import com.rungroup.demo.models.Transaction;
import com.rungroup.demo.models.User;
import com.rungroup.demo.services.impls.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

//    @PostMapping("/test")
//    public ResponseEntity<User> createUserWithTransaction(@RequestBody UserTransactionDTO dto) {
//        User user = new User(null, dto.getName(), dto.getEmail(), dto.getPassword(), null);
//        Transaction transaction = new Transaction(null, null, dto.getAmount(), dto.getType());
//        User savedUser = userService.createUserWithTransaction(user, transaction);
//        return ResponseEntity.ok(savedUser);
//    }

    @PostMapping("/simpleUser")
    public ResponseEntity<User> createUser(@RequestBody UserDTO userDTO) {
        User newUser = userService.createUser(userDTO);
        return ResponseEntity.ok(newUser);
    }
}
