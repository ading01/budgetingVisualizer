package com.rungroup.demo.controllers;

import com.rungroup.demo.models.Income;
import com.rungroup.demo.services.impls.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    private final TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }


    @PostMapping("/incomes/{userId}")
    public ResponseEntity<Income> addIncome(@PathVariable Long userId, @RequestBody Income income) {
        Income addedIncome = transactionService.addIncomeForUser(userId, income);
        return new ResponseEntity<>(addedIncome, HttpStatus.CREATED);
    }


}

