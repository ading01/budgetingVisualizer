package com.rungroup.demo.dtos;

import lombok.Data;

@Data
public class TransactionDTO {
    private Long userId; // ID of the user to associate the transaction with
    private Double amount;
    private String transactionTypeName; // Assuming TransactionType is handled by name
}

