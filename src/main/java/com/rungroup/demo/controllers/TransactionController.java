package com.rungroup.demo.controllers;

import com.rungroup.demo.dtos.TransactionDTO;
import com.rungroup.demo.models.Transaction;
import com.rungroup.demo.services.impls.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody TransactionDTO transactionDTO) {
        Transaction createdTransaction = transactionService.createAndAssignTransaction(
                transactionDTO.getAmount(),
                transactionDTO.getTransactionTypeName(),
                transactionDTO.getUserId());
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTransaction);
    }
}
