package com.rungroup.demo.dtos;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
@Builder
public class IncomeDTO {
    private Long id;
    private BigDecimal amount;
    private String category;
    private String subcategory;
    private String description;
    private Date date;

    // Make sure this constructor is public
    public IncomeDTO(Long id, BigDecimal amount, String category, String subcategory, String description, Date date) {
        this.id = id;
        this.amount = amount;
        this.category = category;
        this.subcategory = subcategory;
        this.description = description;
        this.date = date;
    }

    @Override
    public String toString() {
        return "IncomeDTO{" +
                "id=" + id +
                ", amount=" + amount +
                ", category='" + category + '\'' +
                ", subcategory='" + subcategory + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                '}';
    }

    // Getters and setters
}
