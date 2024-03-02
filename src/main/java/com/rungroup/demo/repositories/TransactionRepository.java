package com.rungroup.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.rungroup.demo.models.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

}
