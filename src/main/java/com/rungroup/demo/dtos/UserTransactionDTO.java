package com.rungroup.demo.dtos;

import com.rungroup.demo.models.TransactionType;
import lombok.Data;

@Data
public class UserTransactionDTO {
    private String name;
    private String email;
    private String password;
    private Double amount;
    private TransactionType type;
}
