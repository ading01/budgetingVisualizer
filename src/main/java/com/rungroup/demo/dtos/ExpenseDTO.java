package com.rungroup.demo.dtos;

import com.rungroup.demo.models.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Builder
public class ExpenseDTO {
    private Long id;
    private BigDecimal amount;
    private String category;
    private String subcategory;
    private String description;
    private Date date;
}


