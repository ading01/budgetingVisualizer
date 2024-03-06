package com.rungroup.demo.repositories;

import com.rungroup.demo.models.Income;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IncomeRepository extends JpaRepository<Income, Long> {
    // You can define custom database operations here
    List<Income> findByUserId(Long userId);
}

