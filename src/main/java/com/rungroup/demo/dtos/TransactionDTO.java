package com.rungroup.demo.dtos;

import com.rungroup.demo.models.Type;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Builder
public class TransactionDTO {
    private Long id;
    private Long userId;
    private Type type;
    private Date date;
    private BigDecimal amount;
    private String category;
    private String subcategory;
    private String description;

    // Constructors, getters, and setters
}
