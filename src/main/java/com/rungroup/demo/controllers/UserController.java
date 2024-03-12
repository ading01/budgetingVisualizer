package com.rungroup.demo.controllers;

import com.rungroup.demo.dtos.IncomeDTO;
import com.rungroup.demo.models.User;
import com.rungroup.demo.services.impls.TransactionService;
import com.rungroup.demo.services.impls.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final TransactionService transactionService;


    @Autowired
    public UserController(UserService userService, TransactionService transactionService) {
        this.userService = userService;
        this.transactionService = transactionService;
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @GetMapping("/id")
    public ResponseEntity<Long> getUserIdByEmail(@RequestParam String email) {
        Long userId = userService.getUserIdByEmail(email);
        if (userId != null) {
            return ResponseEntity.ok(userId);
        } else {
            return ResponseEntity.notFound().build();
        }
    }





//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
//        userService.deleteUserById(id);
//        return ResponseEntity.noContent().build();
//    }
//
//    @GetMapping("/{userId}/incomes")
//    public ResponseEntity<List<IncomeDTO>> getIncomesForUser(@PathVariable Long userId) {
//        List<IncomeDTO> incomeDTOs = transactionService.getIncomesForUser(userId);
//        return ResponseEntity.ok(incomeDTOs);
//    }


}

