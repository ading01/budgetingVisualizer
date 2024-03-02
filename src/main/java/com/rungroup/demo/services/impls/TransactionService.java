package com.rungroup.demo.services.impls;

import com.rungroup.demo.dtos.TransactionDTO;
import com.rungroup.demo.models.Transaction;
import com.rungroup.demo.models.User;
import com.rungroup.demo.repositories.TransactionRepository;
import com.rungroup.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TransactionRepository transactionRepository;


    public Transaction createAndAssignTransaction(Double amount, String transactionType, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Transaction transaction = new Transaction();
        transaction.setAmount(amount);
        transaction.setTransactionType(transactionType);
        transaction.setUser(user);

        return transactionRepository.save(transaction);
    }
}

