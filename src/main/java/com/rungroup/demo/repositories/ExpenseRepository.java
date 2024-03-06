package com.rungroup.demo.repositories;

import com.rungroup.demo.models.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

//import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
