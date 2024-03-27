package com.rungroup.demo.controllers;

import com.rungroup.demo.dtos.TransactionDTO;
import com.rungroup.demo.models.Transaction;
import com.rungroup.demo.models.User;
import com.rungroup.demo.repositories.UserRepository;
import com.rungroup.demo.services.impls.TransactionService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.NoSuchElementException;


import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin
public class TransactionController {

    private final TransactionService transactionService;
    private final UserRepository userRepository; // Add UserRepository

    @Autowired
    public TransactionController(TransactionService transactionService, UserRepository userRepository) {
        this.transactionService = transactionService;
        this.userRepository = userRepository; // Initialize UserRepository
    }

    @GetMapping
    public ResponseEntity<List<TransactionDTO>> getTransactionsByUser(@RequestParam(required = false) Long userId) {
        if (userId == null) {
            // Handle missing userId parameter
            return ResponseEntity.badRequest().build();
        }

        List<Transaction> transactions = transactionService.getTransactionsByUserId(userId);
        List<TransactionDTO> transactionDTOs = transactions.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return new ResponseEntity<>(transactionDTOs, HttpStatus.OK);
    }

    @DeleteMapping("/{transactionId}")
    @ResponseStatus(HttpStatus.NO_CONTENT) // This sets the HTTP status code to 204 No Content upon successful deletion.
    public void deleteTransaction(@PathVariable Long transactionId) {
        // Call the delete method from the transaction service
        // You need to implement this method in your TransactionService class
        transactionService.deleteTransaction(transactionId);
    }

    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody TransactionDTO transactionDTO) {
        // Convert TransactionDTO to Transaction entity
        Transaction transaction = convertToEntity(transactionDTO);

        // Fetch user entity from the database using userId
        User user = userRepository.findById(transactionDTO.getUserId()).orElseThrow(() -> new NoSuchElementException("User not found"));

        // Set the user for the transaction
        transaction.setUser(user);

        // Save the transaction
        Transaction savedTransaction = transactionService.saveTransaction(transaction);

        return new ResponseEntity<>(savedTransaction, HttpStatus.CREATED);
    }


    // Helper method to convert Transaction entity to DTO
    // Helper method to convert Transaction entity to DTO
    private TransactionDTO convertToDTO(Transaction transaction) {
        return TransactionDTO.builder()
                .id(transaction.getId())
                .userId(transaction.getUser() != null ? transaction.getUser().getId() : null) // Set userId from the User entity
                .type(transaction.getType())
                .date(transaction.getDate())
                .amount(transaction.getAmount())
                .category(transaction.getCategory())
                .subcategory(transaction.getSubcategory())
                .description(transaction.getDescription())
                .build();
    }

    // Helper method to convert Transaction DTO to entity
    private Transaction convertToEntity(TransactionDTO transactionDTO) {
        Transaction transaction = Transaction.builder()
                .type(transactionDTO.getType())
                .date(transactionDTO.getDate())
                .amount(transactionDTO.getAmount())
                .category(transactionDTO.getCategory())
                .subcategory(transactionDTO.getSubcategory())
                .description(transactionDTO.getDescription())
                .build();

        // Set the User entity for the transaction based on userId
        if (transactionDTO.getUserId() != null) {
            User user = userRepository.findById(transactionDTO.getUserId())
                    .orElseThrow(() -> new NoSuchElementException("User not found"));
            transaction.setUser(user);
        }

        return transaction;
    }

}



//package com.rungroup.demo.controllers;
//
//import com.rungroup.demo.models.Expense;
//import com.rungroup.demo.models.Income;
//import com.rungroup.demo.services.impls.TransactionService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/transactions")
//public class TransactionController {
//
//    private final TransactionService transactionService;
//
//    @Autowired
//    public TransactionController(TransactionService transactionService) {
//        this.transactionService = transactionService;
//    }
//
//
//    @PostMapping("/incomes/{userId}")
//    public ResponseEntity<Income> addIncome(@PathVariable Long userId, @RequestBody Income income) {
//        Income addedIncome = transactionService.addIncomeForUser(userId, income);
//        return new ResponseEntity<>(addedIncome, HttpStatus.CREATED);
//    }
//
//    @PostMapping("/expenses/{userId}")
//    public ResponseEntity<Expense> addExpense(@PathVariable Long userId, @RequestBody Expense expense) {
//        Expense addedExpense = transactionService.addExpenseForUser(userId, expense);
//        return new ResponseEntity<>(addedExpense, HttpStatus.CREATED);
//    }
//
//
//}
//
